# Build brief — Osaka 2027 Doctoral Consortium application form

## Task

Add two pages to the AMA Global Marketing SIG Astro site: a public application form and a token-gated post-acceptance form. The backend already exists and is deployed; do not build or modify it.

**Before writing anything, read `docs/DEPLOY.md` (the API contract) and `src/lib/dcClient.js` (the client module).** `dcClient.js` is finished and tested against the API — import it, do not rewrite it, and do not inline its logic into the pages.

**Match the existing site.** Read the current `src/pages/doctoral-consortium/osaka-2027.astro` and the base layout first, and reuse the site's existing layout component, heading styles, button styles, spacing scale, and link colours. This form should look like it was always part of the site. Do not introduce a CSS framework, a component library, or a form library.

## Files

| Path | Purpose |
|---|---|
| `src/lib/dcClient.js` | Provided — drop in as-is |
| `src/data/countries.js` | Create — ISO 3166-1 English short names, alphabetical, exported as a string array |
| `src/pages/doctoral-consortium/osaka-2027/apply.astro` | Step 1 application form |
| `src/pages/doctoral-consortium/osaka-2027/confirm.astro` | Step 2 post-acceptance form |
| `.env` / `.env.example` | `PUBLIC_DC_ENDPOINT=` — the Apps Script /exec URL |

Add a prominent link to `/apply` from the existing `osaka-2027` consortium page.

## Step 1 — `apply.astro`

### Fields, in order

| Field | Control | Notes |
|---|---|---|
| `first_name` | text | required |
| `last_name` | text | required |
| `email` | email | required; this is where the acceptance email goes — say so in help text |
| `university` | text | required |
| `university_country` | select | required; from `countries.js` |
| `citizenship` | select | required; from `countries.js` |
| `program_year` | select 1–7 | required |
| `supervisor` | text | required; label "Doctoral supervisor" |
| `manuscript` | file | required; PDF or Word, max 10 MB |
| `cover_letter` | file | required; PDF or Word, max 10 MB |
| `stipend_requested` | checkbox | "I would like to be considered for a travel stipend" |
| `stipend_no_uni_funding` | checkbox | **conditional** — only rendered when `stipend_requested` is checked |

The conditional checkbox reads: "I confirm that my university is unable to fund my attendance." When `stipend_requested` is unchecked, hide it and clear its value — do not submit a stale `true`.

Use `FILE_ACCEPT` from `dcClient.js` for the `accept` attribute, and show the selected filename and size once a file is chosen.

### Submit flow

1. On submit, call `validateStep1(form, files)`. If it returns any keys, render inline errors under the offending fields via `errorMessage(code)` and do not call the API. Move focus to the first error.
2. Otherwise call `submitStep1(form, files, onProgress)`. Disable the submit button for the whole duration.
3. `onProgress` fires with `'encoding'` then `'uploading'`. Show distinct text for each — "Preparing your files…" then "Uploading…". A 10 MB pair can take 30+ seconds on a slow connection and a frozen button with no explanation reads as a broken form.
4. On `{ ok: true }`, replace the form with a success panel showing the reference number: "Your application has been received. Your reference number is **DC27-0001**. A confirmation email is on its way to <email>." Do not leave the form on screen.
5. On `{ ok: false }`, show `errorMessage(res.error)` in an alert region above the form and re-enable the button. If `res.fieldErrors` is present, also render them inline.

`file_upload_failed` is the one error where the applicant must not retry blindly — their row exists. Show the message from `ERROR_MESSAGES` and include the organizers' contact address.

### Error copy pattern

`ERROR_MESSAGES` in `dcClient.js` maps `required` and `missing_file` to one generic sentence each — it has no per-field text, since the field name isn't known at that layer. Both pages wrap `errorMessage(code)` in a local `fieldMessage(field, code)` helper that supplies specific copy for those two codes only ("Please enter your first name.", "Please upload your manuscript.", etc.) and falls through to `errorMessage(code)` for every other code. Add new per-field copy the same way rather than adding more codes to `dcClient.js`.

## Step 2 — `confirm.astro`

Token-gated. Read `?t=` from the query string on mount and call `validateToken(t)` before rendering anything.

Four states:

- **Loading** — while validating.
- **Invalid** (`!res.ok`) — show `errorMessage('invalid_link')` and nothing else. No form, no retry, no hint about why. This is deliberate: the endpoint returns the same failure for a bad token, a rejected applicant, and an undecided one, so that nobody can infer their outcome. Do not add logic that distinguishes these.
- **Already submitted** (`res.already_submitted`) — read-only confirmation that their details were received.
- **Ready** — greet by `res.first_name` and show the form.

### Fields

| Field | Control | Notes |
|---|---|---|
| `passport_name` | text | required; label "Full name exactly as it appears in your passport" |
| `nationality` | select | required; from `countries.js` |
| `date_of_birth` | date | required; must submit as `YYYY-MM-DD` |
| `consent_publish` | checkbox | "I consent to my name and email address being listed on the AMA Global Marketing SIG website" |
| `linkedin_interest` | checkbox | "I would like an invitation to the AMA Global Marketing SIG LinkedIn community" |

Explain above the form why the first three are collected: they are used solely to prepare the visa invitation letter for the host institution. The two checkboxes are genuinely optional — unchecked is a valid answer and the form must submit fine without them.

Same submit pattern as Step 1: `validateStep2` → `submitStep2(token, form)` → success panel or error.

## Cross-cutting requirements

- **Accessibility**: every input has a real `<label for>`; errors are associated via `aria-describedby`; the error summary region is `role="alert"`; the form is fully keyboard-operable. Do not rely on placeholder text as a label.
- **No native `<form>` submission** — handle everything in JS and call `preventDefault()`. A stray page reload mid-upload loses the application.
- **Mobile**: applicants will fill this on phones. Single column, comfortable tap targets, file inputs that don't overflow.
- **No client-side deadline logic.** The server owns the deadline and returns `submissions_closed`. Do not duplicate the date in the frontend — it will drift.
- **Do not log form contents to the console** in production code.

## Acceptance criteria

- [ ] `npm run build` passes with no new warnings
- [ ] Submitting with empty fields shows inline errors and makes no network request
- [ ] The stipend confirmation checkbox appears only when the stipend box is checked
- [ ] A >10 MB file is rejected client-side before any upload begins
- [ ] A successful submission shows the reference number and hides the form
- [ ] `/confirm` with no `?t=` and with a junk `?t=` both show the same invalid-link message
- [ ] Both pages are usable at 375 px width
- [ ] The pages are visually indistinguishable in style from the rest of the site

## Things that will break the form if you "fix" them

1. **`postJson_` in `dcClient.js` sends no headers.** This is required. Adding `Content-Type: application/json` triggers a CORS preflight that Apps Script mishandles, and every submission fails. There is a comment saying so; leave it in.
2. **Files go as base64 in a JSON body**, not `FormData`. Apps Script's `doPost` cannot parse multipart bodies from a cross-origin fetch reliably.
3. **The invalid-link message is intentionally vague.** Don't improve it.
