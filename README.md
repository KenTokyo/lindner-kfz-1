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

## Formularversand (Vercel + IONOS SMTP)

Die Termin- und Bewerbungsformulare senden über die Vercel Function `api/forms.ts`. Interne Benachrichtigungen gehen direkt an das Website-Postfach; Formularnutzer erhalten eine Bestätigung aus den React-Email-Templates.

1. Kopiere `.env.example` nach `.env.local` und ersetze `SMTP_PASS` lokal durch das echte Passwort.
2. Hinterlege dieselben Variablen in Vercel für Development, Preview und Production.
3. Erstelle anschließend ein neues Production-Deployment.

Konfiguration:
- `SMTP_HOST=smtp.ionos.de`
- `SMTP_PORT=465`
- `SMTP_SECURE=true`
- `SMTP_USER=webseite@kfz-lindner.de`
- `MAIL_TO=webseite@kfz-lindner.de`
- `MAIL_FROM=webseite@kfz-lindner.de`
- Passwort-Variable: `SMTP_PASS` (alternativ kompatibel: `SMTP_PASSWORD`)

`MAIL_FROM` bleibt bewusst beim authentifizierten IONOS-Konto. Die E-Mail-Adresse des Formularnutzers wird als `Reply-To` gesetzt; eine fremde Absenderdomain würde SPF/DMARC-Zustellung unnötig gefährden. Die Anwendung setzt keine eigene DKIM-Signatur.
