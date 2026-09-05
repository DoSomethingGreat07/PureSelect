# Pure Select

Pure Select Enterprises LLP’s grocery brand website, built with Next.js, React, TypeScript, and Tailwind CSS. Includes product and recipe views, a business enquiry form, and dedicated Privacy and Terms pages.

## Run locally

Use Node.js 22 (also specified in `.nvmrc` and `package.json`).

```bash
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Fill in your own SMTP credentials in `.env.local` to enable email delivery. Keep that file local; Git ignores it.

## Checks

```bash
npm run lint
npm test
npm run build
npm start
```

`npm test` checks the enquiry API and validation using mocked email and CAPTCHA services. It sends no messages. The production build also checks TypeScript; `npm run typecheck` is available separately.

GitHub Actions runs lint, tests, and the production build for pushes to `main` and pull requests. No SMTP secrets are needed for CI.

## Deploy from GitHub

The repository is prepared for Vercel’s Next.js integration. Import the GitHub repository, select Node.js 22, and add the variables described in [Deployment](docs/DEPLOYMENT.md) before deploying.

The `/api/enquiry` route requires a Node.js runtime. GitHub Pages and a static export cannot run the email form. Other hosts must support Next.js server routes and outbound SMTP.

## Environment configuration

`.env.example` contains public contact and product settings plus placeholders for private credentials.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public website origin; defaults to `https://www.pureselect.in` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | International number containing digits only; `917207085910` |
| `NEXT_PUBLIC_BLINKIT_URL` | Header and general shopping destination |
| `NEXT_PUBLIC_BLINKIT_URL_RAW_PEANUTS` | Raw Peanuts product URL |
| `NEXT_PUBLIC_BLINKIT_URL_ROASTED_CHANA_DAL` | Roasted Chana Dal product URL |
| `NEXT_PUBLIC_BLINKIT_URL_RAJMA_CHITRA` | Rajma Chitra product URL |
| `SMTP_HOST`, `SMTP_PORT` | Email server and port; example uses Gmail on 587 |
| `SMTP_USER`, `SMTP_PASS` | Email account credentials; server-only |
| `SMTP_FROM_EMAIL` | Sender address/name permitted by your SMTP account |
| `ENQUIRY_TO_EMAIL` | Business inbox: `pureselectenterprises@gmail.com` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` | Optional CAPTCHA; configure both or leave both blank |

The sender account may differ from the business recipient. `Reply-To` lets the business reply to the customer and the customer reply to the business. If a customer confirmation fails after the business email succeeds, the enquiry remains successful and the form explains the missing confirmation.

Public variables are included at build time. Redeploy after changing them. Never put SMTP credentials in a variable prefixed `NEXT_PUBLIC_`.

## Editing the website

| Content | Location |
| --- | --- |
| Contact details and navigation | `src/data/siteConfig.ts` |
| Products and per-product links | `src/data/products.ts` |
| Recipes | `src/data/recipes.ts` |
| Homepage banner | `public/images/hero/ps-banner.png` and `src/components/sections/HeroSection.tsx` |
| Story, Mission, and Vision | `src/components/sections/StorySection.tsx` |
| Enquiry options and controls | `src/components/forms/EnquiryForm.tsx` |
| Enquiry validation | `src/lib/form.ts` |
| Email handling | `src/app/api/enquiry/route.ts` |
| Privacy and Terms content | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` |
| Shared legal-page design | `src/components/layout/LegalPage.tsx` |
| SEO | `src/app/metadata.ts`, `public/robots.txt`, `public/sitemap.xml` |

See [Final QA results](docs/QA.md) for verified behavior and remaining live-delivery checks.
