<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1HMj0cnArs1yOVLxRu-Usm1ol4F8CxGnN

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Formularversand (Vercel + Netcup SMTP)

Die Kontakt-/Terminanfrage und das Bewerbungsformular senden an die Vercel Function `api/forms.ts`.

1. Kopiere `.env.example` nach `.env.local` (lokal) und trage das echte `SMTP_PASS` ein.
2. Setze dieselben Variablen in Vercel unter `Project Settings -> Environment Variables`.
3. Deploy neu starten.

Verwendete Netcup-Defaults:
- `SMTP_HOST=mxe989.netcup.net`
- `SMTP_PORT=465`
- `SMTP_SECURE=true`
- `SMTP_USER=info@kfz-lindner.de`
- Passwort-Variable: `SMTP_PASS` (alternativ kompatibel: `SMTP_PASSWORD`)
