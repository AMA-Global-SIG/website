# Osaka 2027 DC — deployment & API contract

## One-time setup

1. Open the sheet **Osaka 2027 DC Applications** → *Extensions → Apps Script*.
2. Delete the stub `myFunction`, paste in `Code.gs`, save.
3. Rename the project (top left) to `Osaka 2027 DC Intake`.
4. In the function dropdown select **`setup`** and click *Run*.
   - Google will ask for authorization. Choose the `amaglobaldc@gmail.com` account.
   - You will hit an "unverified app" screen. Click *Advanced → Go to Osaka 2027 DC Intake (unsafe)*. This is expected for a personal script; it is your own code.
   - Confirm both tabs and headers now exist in the sheet.
5. *Deploy → New deployment → Web app*:
   - Description: `v1`
   - **Execute as: Me (amaglobaldc@gmail.com)**
   - **Who has access: Anyone**
   - Copy the resulting `/exec` URL — this is the endpoint the site posts to.
6. Sanity check in a browser: `<EXEC_URL>?action=ping` should return `{"ok":true,...}`.

## The thing that catches everyone out

Editing the script does **not** change what the deployed URL runs. After any edit you must go *Deploy → Manage deployments → (pencil icon) → Version: New version → Deploy*. Same URL, new code. If you instead create a *new deployment* you get a *different* URL and the site keeps calling the old one.

## CORS

Apps Script cannot set custom CORS headers. The frontend must therefore send a **simple request** that avoids a preflight:

```js
await fetch(EXEC_URL, {
  method: 'POST',
  body: JSON.stringify(payload)   // no headers object — default text/plain is required
});
```

Do **not** set `Content-Type: application/json`. That triggers an OPTIONS preflight, which Apps Script answers incorrectly, and the request fails. The script parses the body as JSON regardless.

## Frontend routes

- Application form: `/doctoral-consortium/osaka-2027/apply`
- Post-acceptance confirmation: `/doctoral-consortium/osaka-2027/confirm?t=TOKEN`

`CONFIG.CONFIRM_URL` on the backend must equal `<live domain>/doctoral-consortium/osaka-2027/confirm` for the acceptance email's link to land on the right page. This has not been cross-checked against the deployed script — verify before going live.

## API contract

### `GET ?action=validate&t=TOKEN`
```json
{ "ok": true, "first_name": "…", "submission_id": "DC27-0001", "already_submitted": false }
{ "ok": false, "error": "invalid_link" }
```

### `POST` — Step 1
```json
{
  "action": "step1",
  "first_name": "", "last_name": "", "email": "",
  "university": "", "university_country": "", "citizenship": "",
  "program_year": 3, "supervisor": "",
  "stipend_requested": true, "stipend_no_uni_funding": true,
  "manuscript":   { "mime_type": "application/pdf", "data": "<base64>" },
  "cover_letter": { "mime_type": "application/pdf", "data": "<base64>" },
  "user_agent": ""
}
```
Returns `{ "ok": true, "submission_id": "DC27-0001" }` or `{ "ok": false, "error": "…" }`.

Error codes to surface to the user: `missing_fields` (with `fields[]`), `invalid_email`, `invalid_program_year`, `stipend_requires_funding_confirmation`, `unsupported_file_type`, `file_too_large`, `submissions_closed`, `file_upload_failed`, `server_error`.

Note the asymmetry: client-side validation (`validateStep1`/`validateStep2` in `dcClient.js`) returns `fieldErrors` — an object of `{ field: code }` — while the server's `missing_fields` response returns `fields` — an array of field names. The frontend handles both shapes; this is intentional, not a bug to fix.

### `POST` — Step 2
```json
{
  "action": "step2", "t": "TOKEN",
  "passport_name": "", "nationality": "", "date_of_birth": "1995-04-17",
  "consent_publish": true, "linkedin_interest": true,
  "user_agent": ""
}
```

## Base64 in the browser

```js
const toBase64 = (file) => new Promise((res, rej) => {
  const r = new FileReader();
  r.onload = () => res(r.result.split(',')[1]);
  r.onerror = rej;
  r.readAsDataURL(file);
});
```

Note the payload inflates ~33% in base64, so a 10 MB file becomes ~13.3 MB on the wire. That is within Apps Script's limits but slow on a poor connection — show a progress state, and cap the file input client-side at 10 MB so the user finds out before the upload rather than after.

## Sending acceptances

Set column P (`decision`) to `accept` or `reject` for every row, then run **`sendAcceptanceInvitations`** from the editor. It emails only rows marked `accept` that have not yet completed Step 2, so it is safe to re-run as decisions trickle in.

`nextSubmissionId_` derives the next `DC27-####` ID from the highest ID already issued, not from the sheet's row count — deleting a row (e.g. after a smoke test) does not cause the next real submission to reuse its ID.

## Before going live

- [ ] Set `CONFIG.DEADLINE` to the real submission deadline
- [ ] Add the organizers' addresses to `CONFIG.ORGANIZER_EMAILS`
- [ ] Confirm `CONFIG.CONFIRM_URL` matches `https://<live domain>/doctoral-consortium/osaka-2027/confirm`
- [ ] Submit one test application end to end, then delete the row and its Drive folder
- [ ] Share `Submissions/` and the sheet with the organizers as Editor
