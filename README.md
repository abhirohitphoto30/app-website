# APPVERSE X — The Digital Archive

A distinctive editorial / brutalist-inspired dark APK storefront. Static, responsive, and ready for Vercel.

## Project structure
- `index.html` — custom animated storefront and app library
- `apps/` — place Android `.apk` files here
- `scripts/generate-catalog.js` — scans APKs and generates the catalogue
- `apps.json` — generated app catalogue
- `vercel.json` — Vercel deployment configuration

## Deploy
1. Extract this ZIP and upload the complete `APPVERSE-X` folder contents to a GitHub repository.
2. Import that repository into Vercel.
3. Framework preset: **Other**
4. Build command: `npm run build`
5. Output directory: `.`
6. No environment variables are needed.

## Add apps
Put APK files into `apps/`, commit and push to GitHub. Vercel rebuilds the project and the catalogue updates automatically.

To customize an app's title, category, description and icon, edit the `descriptions` object in `scripts/generate-catalog.js`. Use the exact APK filename in lowercase as the key.

Only distribute APKs you own or are authorized to share. Visitors should install APKs only from sources they trust.
