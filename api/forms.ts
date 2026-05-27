import * as nodemailer from 'nodemailer';
import {
  hasFormErrors,
  sanitizeApplicationData,
  sanitizeAppointmentData,
  validateApplicationForm,
  validateAppointmentForm,
  type ApplicationFormData,
  type AppointmentFormData,
} from '../lib/formValidation';

type FormType = 'appointment' | 'application';
type AppointmentCategory = 'karosserie' | 'autoservice' | '';

interface RequestLike {
  method?: string;
  body?: unknown;
}

interface ResponseLike {
  status: (statusCode: number) => ResponseLike;
  json: (payload: unknown) => void;
  setHeader: (name: string, value: string) => void;
}

interface EnvConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  to: string;
  from: string;
}

let transporter: nodemailer.Transporter | null = null;

const FORM_TYPES = new Set<FormType>(['appointment', 'application']);
const APPOINTMENT_CATEGORIES = new Set<AppointmentCategory>([
  'karosserie',
  'autoservice',
  '',
]);

const toStringValue = (value: unknown): string =>
  typeof value === 'string' ? value : '';

const normalizeBody = (body: unknown): Record<string, unknown> => {
  if (!body) return {};

  if (typeof body === 'object') {
    return body as Record<string, unknown>;
  }

  if (typeof body === 'string') {
    try {
      const parsed = JSON.parse(body);
      if (parsed && typeof parsed === 'object') {
        return parsed as Record<string, unknown>;
      }
    } catch {
      return {};
    }
  }

  return {};
};

const getEnvConfig = (): EnvConfig => {
  const host = process.env.SMTP_HOST || 'mxe989.netcup.net';
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = (process.env.SMTP_SECURE || 'true').toLowerCase() === 'true';
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';
  const to = process.env.MAIL_TO || user;
  const from = process.env.MAIL_FROM || user;

  if (!user || !pass || !to || !from) {
    throw new Error('SMTP environment variables are incomplete.');
  }

  if (!Number.isFinite(port) || port <= 0) {
    throw new Error('SMTP_PORT is invalid.');
  }

  return { host, port, secure, user, pass, to, from };
};

const getTransporter = (): nodemailer.Transporter => {
  if (transporter) return transporter;

  const config = getEnvConfig();
  transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  return transporter;
};

const categoryLabel = (category: AppointmentCategory): string => {
  if (category === 'karosserie') return 'Karosserie & Lack';
  if (category === 'autoservice') return 'Autoservice';
  return 'Nicht angegeben';
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const htmlWithBreaks = (value: string): string => escapeHtml(value).replace(/\n/g, '<br />');

const appointmentText = (
  data: AppointmentFormData,
  category: AppointmentCategory
): string => [
  'Neue Terminanfrage von der Website',
  '',
  `Bereich: ${categoryLabel(category)}`,
  `Name: ${data.name}`,
  `E-Mail: ${data.email}`,
  `Telefon: ${data.telefon || '-'}`,
  `Kennzeichen: ${data.kennzeichen || '-'}`,
  `Wunschtermin: ${data.wunschtermin || '-'}`,
  '',
  'Anliegen:',
  data.nachricht,
].join('\n');

const applicationText = (data: ApplicationFormData): string => [
  'Neue Bewerbung von der Website',
  '',
  `Name: ${data.name}`,
  `E-Mail: ${data.email}`,
  `Telefon: ${data.telefon || '-'}`,
  `Position: ${data.position}`,
  '',
  'Nachricht:',
  data.nachricht,
].join('\n');

const appointmentHtml = (
  data: AppointmentFormData,
  category: AppointmentCategory
): string => `
  <h2>Neue Terminanfrage</h2>
  <p><strong>Bereich:</strong> ${escapeHtml(categoryLabel(category))}</p>
  <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
  <p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p>
  <p><strong>Telefon:</strong> ${escapeHtml(data.telefon || '-')}</p>
  <p><strong>Kennzeichen:</strong> ${escapeHtml(data.kennzeichen || '-')}</p>
  <p><strong>Wunschtermin:</strong> ${escapeHtml(data.wunschtermin || '-')}</p>
  <p><strong>Anliegen:</strong></p>
  <p>${htmlWithBreaks(data.nachricht)}</p>
`;

const applicationHtml = (data: ApplicationFormData): string => `
  <h2>Neue Bewerbung</h2>
  <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
  <p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p>
  <p><strong>Telefon:</strong> ${escapeHtml(data.telefon || '-')}</p>
  <p><strong>Position:</strong> ${escapeHtml(data.position)}</p>
  <p><strong>Nachricht:</strong></p>
  <p>${htmlWithBreaks(data.nachricht)}</p>
`;

const sendAppointmentEmail = async (
  data: AppointmentFormData,
  category: AppointmentCategory
) => {
  const smtpConfig = getEnvConfig();
  const mailer = getTransporter();
  await mailer.sendMail({
    from: smtpConfig.from,
    to: smtpConfig.to,
    replyTo: data.email,
    subject: `Neue Terminanfrage (${categoryLabel(category)})`,
    text: appointmentText(data, category),
    html: appointmentHtml(data, category),
  });
};

const sendApplicationEmail = async (data: ApplicationFormData) => {
  const smtpConfig = getEnvConfig();
  const mailer = getTransporter();
  await mailer.sendMail({
    from: smtpConfig.from,
    to: smtpConfig.to,
    replyTo: data.email,
    subject: `Neue Bewerbung (${data.position})`,
    text: applicationText(data),
    html: applicationHtml(data),
  });
};

const handleAppointment = async (body: Record<string, unknown>) => {
  const data = sanitizeAppointmentData({
    name: toStringValue(body.name),
    email: toStringValue(body.email),
    telefon: toStringValue(body.telefon),
    kennzeichen: toStringValue(body.kennzeichen),
    wunschtermin: toStringValue(body.wunschtermin),
    nachricht: toStringValue(body.nachricht),
  });

  const category = toStringValue(body.category).toLowerCase() as AppointmentCategory;

  if (!APPOINTMENT_CATEGORIES.has(category)) {
    return {
      ok: false,
      status: 400,
      body: { ok: false, message: 'Ungueltige Kategorie.' },
    };
  }

  const errors = validateAppointmentForm(data);
  if (hasFormErrors(errors)) {
    return {
      ok: false,
      status: 400,
      body: { ok: false, message: 'Bitte korrigieren Sie die Eingaben.', errors },
    };
  }

  await sendAppointmentEmail(data, category);
  return { ok: true, status: 200, body: { ok: true } };
};

const handleApplication = async (body: Record<string, unknown>) => {
  const data = sanitizeApplicationData({
    name: toStringValue(body.name),
    email: toStringValue(body.email),
    telefon: toStringValue(body.telefon),
    position: toStringValue(body.position),
    nachricht: toStringValue(body.nachricht),
  });

  const errors = validateApplicationForm(data);
  if (hasFormErrors(errors)) {
    return {
      ok: false,
      status: 400,
      body: { ok: false, message: 'Bitte korrigieren Sie die Eingaben.', errors },
    };
  }

  await sendApplicationEmail(data);
  return { ok: true, status: 200, body: { ok: true } };
};

export default async function handler(req: RequestLike, res: ResponseLike) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method Not Allowed' });
    return;
  }

  const body = normalizeBody(req.body);
  const formType = toStringValue(body.formType).toLowerCase() as FormType;
  const honeypot = toStringValue(body.website);

  if (honeypot) {
    res.status(200).json({ ok: true });
    return;
  }

  if (!FORM_TYPES.has(formType)) {
    res.status(400).json({ ok: false, message: 'Ungueltiger Formular-Typ.' });
    return;
  }

  try {
    const result =
      formType === 'appointment'
        ? await handleAppointment(body)
        : await handleApplication(body);

    res.status(result.status).json(result.body);
  } catch (error) {
    console.error('Form submit error:', error);
    res.status(500).json({
      ok: false,
      message: 'Der Versand hat nicht funktioniert. Bitte versuchen Sie es spaeter erneut.',
    });
  }
}
