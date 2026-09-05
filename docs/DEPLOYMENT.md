# GitHub deployment

## Repository

Remote: `https://github.com/DoSomethingGreat07/PureSelect.git`  
Branch: `main`

The repository includes source, image assets, the npm lockfile, and CI. Environment files, dependencies, build output, local tooling, and test artifacts are ignored. `.env.example` is the only environment file intended for Git.

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
