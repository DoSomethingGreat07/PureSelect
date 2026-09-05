# Final QA — 5 September 2026

Scope: the local production build, public external link destinations, and SMTP connectivity. No email or WhatsApp message was sent. The live `pureselect.in` website was still showing the previous site.

## Passed

- Clean offline `npm ci` followed by lint, mocked enquiry tests, and a production build without local environment files. Final source also passes the production build and TypeScript checks.
- Homepage, Privacy, and Terms return successfully. Footer legal links open the correct page in a new tab, and section anchors resolve.
- All 11 unique image URLs tested return HTTP 200. Below-the-fold images are lazy-loaded.
- Correct Blinkit product URLs appear in the rendered product cards.
- WhatsApp redirects successfully to the contact page showing **Pure Select**, number **917207085910**.
- Mail links use `pureselectenterprises@gmail.com`; the Privacy page uses `care@pureselect.in` as provided.
- SMTP connection and authentication succeed. The local enquiry recipient is `pureselectenterprises@gmail.com`.
- Mobile navigation opens, navigates, and closes. Header clearance and document width verified at 320, 390, 768, 1024, and 1440 px.
- Product quick views and recipes open in scrollable dialogs with visible close controls on mobile. Escape closes the product dialog.
- Product enquiry buttons prefill the product. Selecting Other shows its input; selecting a named product hides and clears it. Changing state clears the city selection.
- Mocked API tests cover all 14 named products, Other details, invalid input, mismatched cities, honeypot and timing protection, CAPTCHA paths, both email recipients, reply addresses, and HTML escaping.
- Browser form tests use intercepted API requests: validation, Other requirement, submitted payload, successful reset, and the customer-confirmation-failure message.

## Fixed during QA

- Mobile product and recipe dialogs previously extended above the viewport, hiding their close buttons. They now use a bounded native dialog with internal scrolling, keyboard dismissal, focus containment, and background scroll locking.
- A customer confirmation failure previously reported the whole enquiry as failed after the business email had already been sent. The API now preserves success and the form explains that confirmation could not be sent.
- The lint command previously scanned archived `.next-*` build directories. Generated build archives are now excluded.
- A taller mobile header overlapped the homepage banner label. Page padding and anchor offsets now follow the measured header height.

## Remaining external checks

- Blinkit returned HTTP 403 to automated browser access. The configured links are correct, but destination content and availability need a regular-browser check.
- Actual email arrival and spam-folder placement require an authorized live test. SMTP login success alone does not prove delivery.
- `care@pureselect.in` has a domain with mail-exchange records, but the individual mailbox has not been verified.
- WhatsApp chat delivery has not been tested; only the public contact-page redirect was checked.
- Deploy the prepared repository and repeat the smoke checks on the production hostname.
