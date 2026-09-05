# GitHub deployment

## Repository

Remote: `https://github.com/DoSomethingGreat07/PureSelect.git`  
Branch: `main`

The repository includes source, image assets, the npm lockfile, and CI. Environment files, dependencies, build output, local tooling, and test artifacts are ignored. `.env.example` is the only environment file intended for Git.

## Deploy with GoDaddy Node.js Hosting

Use the Node.js Hosting product for this Next.js app. Connect the GitHub repository and branch `main`, with the repository root as the app root. The project uses Node.js 22, `npm ci`, `npm run build`, and `npm start`.

In the hosting secrets/environment screen, add the public values from `.env.example`, then configure the business mailbox:

```dotenv
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=465
SMTP_USER=care@pureselect.in
SMTP_PASS=REPLACE_WITH_BUSINESS_MAILBOX_PASSWORD
SMTP_FROM_EMAIL=Pure Select <care@pureselect.in>
ENQUIRY_TO_EMAIL=pureselectenterprises@gmail.com
```

Enter the password for the `care@pureselect.in` mailbox privately in GoDaddy, not the GoDaddy account password. The repository example and local configuration deliberately leave this password empty. Never commit credentials. Revoke the previously exposed personal Gmail app password in Google account settings; removing it from this project does not revoke it.

These settings follow [GoDaddy Professional Email SMTP documentation](https://www.godaddy.com/en-in/help/use-imap-settings-to-add-my-professional-email-to-a-client-32204). Confirm the mailbox allows SMTP access. Keep existing email DNS records when connecting the website domain.

Business notifications come from **Pure Select <care@pureselect.in>** and go to **pureselectenterprises@gmail.com**, with **Reply-To set to the customer's submitted email**. Customer acknowledgements use the same business sender and reply to the business enquiry inbox. Customer contact details appear in the message; they are supplied by the customer, not identity-verified. WhatsApp opens the customer's own account to message the business number.

Configure both Turnstile keys for the deployment hostname before accepting public enquiries. Review the preview, then publish and connect `pureselect.in` and `www.pureselect.in` using GoDaddy's supplied domain settings. Rebuild after changing public environment values. Test actual inbox delivery after configuring the mailbox; mocked tests do not verify delivery.

## Deploy with Vercel

1. Push the reviewed changes to the GitHub repository.
2. In Vercel, import that repository as a new project, or use its existing connected project.
3. Select the **Next.js** framework preset and **Node.js 22.x**. Keep the root directory at the repository root. Use `npm ci` for installation and `npm run build` for the build. Keep the default Next.js output settings.
4. In the project’s environment settings, add the variables from `.env.example`. Enter the actual SMTP credentials privately in Vercel; do not upload `.env.local` to GitHub.
5. Set `ENQUIRY_TO_EMAIL=pureselectenterprises@gmail.com`. Use a sender authorized by the SMTP account. For Gmail, use an App Password where supported by the account’s security settings.
6. Set the public Blinkit product URLs exactly as shown in `.env.example`, including Roasted Chana Dal product `798934` and Rajma Chitra product `799507`.
7. Configure both Turnstile keys if CAPTCHA is enabled, and register the deployment hostname in Cloudflare. Leaving both keys blank disables CAPTCHA; the form still has validation, a honeypot, and timing checks.
8. Deploy and check the generated deployment URL before changing the live domain. Preview environment variables are configured separately from Production. Use a test inbox in Preview if you plan to submit test enquiries there.
9. Connect `pureselect.in` and `www.pureselect.in` using the DNS records Vercel gives you. The repository’s canonical URL is `https://www.pureselect.in`; use the same canonical hostname or update metadata, robots, sitemap, and `NEXT_PUBLIC_SITE_URL` together.
10. Subsequent pushes to the connected production branch deploy through Vercel. GitHub CI checks the code; it does not itself deploy or hold SMTP secrets.

Environment changes apply to subsequent deployments. Changes to `NEXT_PUBLIC_` values require a rebuild because those values are embedded in browser code.

## Before calling the live deployment complete

- Open the homepage, `/privacy`, and `/terms` on the deployed hostname.
- Check desktop and mobile menus, product and recipe dialogs, the new banner, and the Product Requirement dropdown.
- Open each Blinkit link in a regular browser. Automated checks were blocked by Blinkit; product availability can depend on delivery location.
- Open WhatsApp and confirm it shows **Pure Select**, number **+91 72070 85910**.
- With permission to send the test messages, submit one enquiry using an inbox you control. Verify receipt at `pureselectenterprises@gmail.com`, the customer confirmation, and both reply addresses. Check spam folders as well.
- Verify that the privacy contact `care@pureselect.in` can receive mail, or replace it with a monitored address.

SMTP authentication and mocked API tests do not prove inbox delivery. The public domain was still serving the previous website during local QA; local preparation does not publish these changes.

## Other hosting services

A supported Next.js Node.js host can run `npm ci`, `npm run build`, then `npm start`. Configure environment variables there and allow outbound SMTP. The server honors `PORT` through Next.js.

GitHub Pages is static hosting and cannot execute `/api/enquiry`. Do not enable `output: "export"` unless email handling is moved to a separate backend.

## References

- [Vercel: importing an existing project](https://vercel.com/docs/getting-started-with-vercel/import)
- [Vercel: environment variables](https://vercel.com/docs/environment-variables)
- [Vercel: supported Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions)
- [Next.js: environment variables](https://nextjs.org/docs/pages/guides/environment-variables)
- [GitHub Pages: static hosting](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
