/**
 * dcClient.js — browser client for the Osaka 2027 Doctoral Consortium intake API.
 *
 * Framework-agnostic. No Astro, React, or DOM assumptions: it takes plain
 * objects and File instances, and returns plain objects. Import it from the
 * client-side <script> of the Astro pages.
 *
 * The backend is a Google Apps Script web app. Two of its quirks are handled
 * here and must not be "cleaned up" — see the comments on postJson_().
 */

// ─────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────

/**
 * The Apps Script /exec URL. Set PUBLIC_DC_ENDPOINT in .env — it is not a
 * secret (anyone can submit an application) but it does not belong in git.
 */
const ENDPOINT = import.meta.env.PUBLIC_DC_ENDPOINT;

export const MAX_FILE_BYTES = 10 * 1024 * 1024; // must match CONFIG.MAX_FILE_BYTES server-side

export const ALLOWED_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

/** Value for the <input type="file"> accept attribute. */
export const FILE_ACCEPT = '.pdf,.doc,.docx';

export const MIN_PROGRAM_YEAR = 1;
export const MAX_PROGRAM_YEAR = 7;

// ─────────────────────────────────────────────────────────────
// ERROR COPY
// ─────────────────────────────────────────────────────────────

/**
 * Server error codes → sentences shown to the applicant. Never surface a raw
 * code. Anything unmapped falls back to GENERIC_ERROR.
 */
export const ERROR_MESSAGES = {
  missing_fields: 'Some required fields are still empty. Please check the highlighted fields.',
  invalid_email: 'That email address does not look valid. Please check it and try again.',
  invalid_program_year: 'Please select which year of your doctoral program you are in.',
  stipend_requires_funding_confirmation:
    'To request a stipend, please also confirm that your university cannot fund your attendance.',
  unsupported_file_type: 'Please upload PDF or Word documents only.',
  file_too_large: 'That file is larger than 10 MB. Please compress it or upload a smaller version.',
  submissions_closed: 'The submission deadline has passed and applications are now closed.',
  file_upload_failed:
    'Your details were saved but the file upload did not complete. Please contact the organizers and quote your reference number.',
  already_submitted: 'You have already completed this form. Contact the organizers if you need to change something.',
  invalid_link: 'This link is not valid. Please use the link from your acceptance email, or contact the organizers.',
  invalid_date_of_birth: 'Please enter your date of birth.',
  corrupt_upload: 'That file could not be read. Please try uploading it again.',
  network: 'We could not reach the server. Please check your connection and try again.',
  server_error: 'Something went wrong on our side. Please try again in a moment.'
};

export const GENERIC_ERROR = ERROR_MESSAGES.server_error;

export function errorMessage(code) {
  return ERROR_MESSAGES[code] || GENERIC_ERROR;
}

// ─────────────────────────────────────────────────────────────
// TRANSPORT
// ─────────────────────────────────────────────────────────────

/**
 * Apps Script cannot set custom CORS headers, so the request must qualify as a
 * CORS "simple request" to avoid a preflight.
 *
 *   DO NOT add a headers object.
 *   DO NOT set Content-Type: application/json.
 *
 * Either one triggers an OPTIONS preflight that Apps Script answers
 * incorrectly, and every submission fails with an opaque CORS error. The
 * default text/plain content type is required; the server parses the body as
 * JSON regardless.
 */
async function postJson_(payload) {
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    if (!res.ok) return { ok: false, error: 'server_error' };
    return await res.json();
  } catch (err) {
    return { ok: false, error: 'network' };
  }
}

async function getJson_(params) {
  try {
    const url = ENDPOINT + '?' + new URLSearchParams(params).toString();
    const res = await fetch(url);
    if (!res.ok) return { ok: false, error: 'server_error' };
    return await res.json();
  } catch (err) {
    return { ok: false, error: 'network' };
  }
}

// ─────────────────────────────────────────────────────────────
// FILE HANDLING
// ─────────────────────────────────────────────────────────────

/** Reads a File into a bare base64 string (no data: prefix). */
export function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1]);
    reader.onerror = () => reject(new Error('read_failed'));
    reader.readAsDataURL(file);
  });
}

/**
 * Client-side gate so the applicant learns about a bad file immediately rather
 * than after a multi-megabyte upload. The server re-checks both conditions.
 * Returns null when valid, or an error code.
 */
export function checkFile(file) {
  if (!file) return 'missing_file';
  if (file.size > MAX_FILE_BYTES) return 'file_too_large';

  // Some browsers report an empty type for .doc/.docx, so fall back to extension.
  if (file.type && !ALLOWED_MIME.includes(file.type)) return 'unsupported_file_type';
  if (!file.type && !/\.(pdf|docx?)$/i.test(file.name)) return 'unsupported_file_type';

  return null;
}

function mimeFor_(file) {
  if (file.type && ALLOWED_MIME.includes(file.type)) return file.type;
  if (/\.pdf$/i.test(file.name)) return 'application/pdf';
  if (/\.docx$/i.test(file.name)) {
    return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  }
  return 'application/msword';
}

async function filePayload_(file) {
  return { mime_type: mimeFor_(file), data: await toBase64(file) };
}

// ─────────────────────────────────────────────────────────────
// CLIENT-SIDE VALIDATION
// ─────────────────────────────────────────────────────────────

const REQUIRED_STEP1 = [
  'first_name', 'last_name', 'email', 'university',
  'university_country', 'citizenship', 'program_year', 'supervisor'
];

/**
 * Mirrors the server rules so the applicant gets inline feedback before any
 * upload happens. Returns { field: errorCode } — empty object means valid.
 *
 * `form` is the plain-object form state; `files` is
 * { manuscript: File, cover_letter: File }.
 */
export function validateStep1(form, files) {
  const errors = {};

  REQUIRED_STEP1.forEach((f) => {
    if (!String(form[f] ?? '').trim()) errors[f] = 'required';
  });

  if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(form.email).trim())) {
    errors.email = 'invalid_email';
  }

  const year = parseInt(form.program_year, 10);
  if (form.program_year && !(year >= MIN_PROGRAM_YEAR && year <= MAX_PROGRAM_YEAR)) {
    errors.program_year = 'invalid_program_year';
  }

  // The funding confirmation is only required when a stipend is requested.
  if (form.stipend_requested && !form.stipend_no_uni_funding) {
    errors.stipend_no_uni_funding = 'stipend_requires_funding_confirmation';
  }

  const m = checkFile(files.manuscript);
  if (m) errors.manuscript = m;
  const c = checkFile(files.cover_letter);
  if (c) errors.cover_letter = c;

  return errors;
}

export function validateStep2(form) {
  const errors = {};

  ['passport_name', 'nationality', 'date_of_birth'].forEach((f) => {
    if (!String(form[f] ?? '').trim()) errors[f] = 'required';
  });

  if (form.date_of_birth && !/^\d{4}-\d{2}-\d{2}$/.test(String(form.date_of_birth))) {
    errors.date_of_birth = 'invalid_date_of_birth';
  }

  return errors;
}

// ─────────────────────────────────────────────────────────────
// PUBLIC API
// ─────────────────────────────────────────────────────────────

/**
 * Submits the initial application.
 *
 *   const res = await submitStep1(form, { manuscript, cover_letter }, setPhase);
 *   res.ok  → { ok: true, submission_id: 'DC27-0001' }
 *   !res.ok → { ok: false, error: 'file_too_large', fields?: [...] }
 *
 * `onProgress` is called with 'encoding' then 'uploading' so the UI can show
 * what is happening; base64 encoding a 10 MB file is itself perceptible.
 */
export async function submitStep1(form, files, onProgress = () => {}) {
  const errors = validateStep1(form, files);
  if (Object.keys(errors).length) {
    return { ok: false, error: 'missing_fields', fieldErrors: errors };
  }

  onProgress('encoding');
  let manuscript, cover_letter;
  try {
    manuscript = await filePayload_(files.manuscript);
    cover_letter = await filePayload_(files.cover_letter);
  } catch (err) {
    return { ok: false, error: 'corrupt_upload' };
  }

  onProgress('uploading');
  const result = await postJson_({
    action: 'step1',
    first_name: String(form.first_name).trim(),
    last_name: String(form.last_name).trim(),
    email: String(form.email).trim(),
    university: String(form.university).trim(),
    university_country: form.university_country,
    citizenship: form.citizenship,
    program_year: parseInt(form.program_year, 10),
    supervisor: String(form.supervisor).trim(),
    stipend_requested: !!form.stipend_requested,
    stipend_no_uni_funding: !!form.stipend_no_uni_funding,
    manuscript,
    cover_letter,
    user_agent: navigator.userAgent
  });

  onProgress('done');
  return result;
}

/**
 * Validates a Step 2 invitation token.
 * ok  → { ok: true, first_name, submission_id, already_submitted }
 * !ok → { ok: false, error: 'invalid_link' }
 *
 * The server returns invalid_link for every failure reason — bad token,
 * rejected applicant, decision not yet made — so that nobody can infer their
 * outcome from this endpoint. Do not try to give a more specific message.
 */
export async function validateToken(token) {
  if (!token) return { ok: false, error: 'invalid_link' };
  return getJson_({ action: 'validate', t: token });
}

/** Submits the post-acceptance details. */
export async function submitStep2(token, form) {
  const errors = validateStep2(form);
  if (Object.keys(errors).length) {
    return { ok: false, error: 'missing_fields', fieldErrors: errors };
  }

  return postJson_({
    action: 'step2',
    t: token,
    passport_name: String(form.passport_name).trim(),
    nationality: form.nationality,
    date_of_birth: String(form.date_of_birth).trim(),
    consent_publish: !!form.consent_publish,
    linkedin_interest: !!form.linkedin_interest,
    user_agent: navigator.userAgent
  });
}

/** Health check, useful while wiring things up. */
export async function ping() {
  return getJson_({ action: 'ping' });
}
