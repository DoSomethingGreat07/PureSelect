# Pure Select

Premium, single-page Next.js website for Pure Select Enterprises LLP.

## Project setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Start the dev server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## GitHub-ready checklist

Before pushing this repository:

1. Keep `.env.local` local only. It is already ignored by Git.
2. Commit `.env.example` with placeholders only.
3. Do not commit `.next`, `.next-stale`, `node_modules`, or platform files like `.DS_Store`.
4. Add deployment environment variables in GitHub/Vercel/Netlify settings, not in the repository.

## Folder structure

```text
pure-select/
├── public/
│   └── images/
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── lib/
│   ├── styles/
│   └── types/
├── .env.example
└── README.md
```

## How to run locally

```bash
npm install
npm run dev
```

## How to build

```bash
npm run build
npm run start
```

## How to replace product images

1. Put final product images inside `public/images/products/`.
2. Keep the same file names if you want zero code changes.
3. If you rename files, update `src/data/products.ts`.
4. When a product image is not ready yet, keep `imageStatus: "placeholder"` and point it to `public/images/placeholders/`.

## How to update product data

Edit `src/data/products.ts`.

Each product entry contains:

- `name`
- `localName`
- `category`
- `formats`
- `description`
- `image`
- `imageStatus`
- `altText`

## How to update Blinkit link

1. Set `NEXT_PUBLIC_BLINKIT_URL` in `.env.local`, or
2. Update the fallback `blinkitLink` inside `src/data/siteConfig.ts`.

## How to configure form delivery

The site now sends enquiries through the internal Next.js API route at `src/app/api/enquiry/route.ts`.

Add SMTP values to `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=youremail@gmail.com
SMTP_PASS=your-16-digit-gmail-app-password
SMTP_FROM_EMAIL=Pure Select <youremail@gmail.com>
ENQUIRY_TO_EMAIL=youremail@gmail.com
```

Notes:

1. If you use Gmail, create an App Password and place it in `SMTP_PASS`.
2. `ENQUIRY_TO_EMAIL` is where the customer responses will arrive.
3. `SMTP_FROM_EMAIL` controls the visible sender name.
4. The form validates on both client and server before sending.
5. A hidden honeypot field and minimum submit time are included to reduce spam.
6. After a successful submission, the customer also receives an automatic confirmation email.

### Optional CAPTCHA

To enable Cloudflare Turnstile:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

If these are blank, the form still works with honeypot protection only.

## Recommended `.env.local`

For a free personal Gmail setup:

```env
NEXT_PUBLIC_BLINKIT_URL=https://blinkit.com/prn/pure-select-raw-peanuts-palli/prid/793784?srsltid=AfmBOooLTIyM8EXCWTCovaJNvKI7Vebk_vKDcOZ00hfIVFzxuNXzPplW
NEXT_PUBLIC_WHATSAPP_NUMBER=917207085910
NEXT_PUBLIC_SITE_URL=https://www.pureselect.in

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your-16-digit-gmail-app-password
SMTP_FROM_EMAIL=Pure Select <yourgmail@gmail.com>
ENQUIRY_TO_EMAIL=yourgmail@gmail.com

NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
```

Sender and receiver:

1. `SMTP_USER` / `SMTP_FROM_EMAIL` = sender account used by the site.
2. `ENQUIRY_TO_EMAIL` = inbox that receives customer enquiries.
3. The customer receives an automatic confirmation email after a successful submission.

## How to update phone, email, or business details

Edit `src/data/siteConfig.ts`.

## How to update SEO metadata

Edit:

- `src/app/metadata.ts`
- `src/data/siteConfig.ts`
- `public/robots.txt`
- `public/sitemap.xml`

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy with the default Next.js settings.

## Deploy on Netlify

1. Push the repository to GitHub.
2. Import the repo in Netlify.
3. Use:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add the environment variables from `.env.example` in the Netlify site settings.
5. If you prefer static export later, adjust the Next.js config for that deployment style.
