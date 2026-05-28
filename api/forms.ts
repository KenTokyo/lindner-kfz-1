import * as nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import {
  hasFormErrors,
  sanitizeApplicationData,
  sanitizeAppointmentData,
  validateApplicationForm,
  validateAppointmentForm,
  type ApplicationFormData,
  type AppointmentFormData,
} from '../lib/formValidation';
import { ConfirmTerminAnfrageEmail } from '../emails/ConfirmTerminAnfrageEmail';
import { NotifyTerminAnfrageEmail } from '../emails/NotifyTerminAnfrageEmail';
import { ConfirmBewerbungEmail } from '../emails/ConfirmBewerbungEmail';
import { NotifyBewerbungEmail } from '../emails/NotifyBewerbungEmail';

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
  const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD || '';
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

const sendAppointmentEmail = async (
  data: AppointmentFormData,
  category: AppointmentCategory
) => {
  const smtpConfig = getEnvConfig();
  const mailer = getTransporter();

  // Business notification
  const notifyHtml = await render(
    NotifyTerminAnfrageEmail({
      name: data.name,
      email: data.email,
      telefon: data.telefon || '',
      kennzeichen: data.kennzeichen || '',
      wunschtermin: data.wunschtermin || '',
      nachricht: data.nachricht,
      category,
    })
  );

  await mailer.sendMail({
    from: smtpConfig.from,
    to: smtpConfig.to,
    replyTo: data.email,
    subject: `Neue Terminanfrage${
      category === 'karosserie'
        ? ' (Karosserie & Lack)'
        : category === 'autoservice'
        ? ' (Autoservice)'
        : ''
    }`,
    html: notifyHtml,
  });

  // User confirmation
  const confirmHtml = await render(
    ConfirmTerminAnfrageEmail({
      name: data.name,
      wunschtermin: data.wunschtermin || '',
      kennzeichen: data.kennzeichen || '',
      category,
    })
  );

  await mailer.sendMail({
    from: smtpConfig.from,
    to: data.email,
    subject: 'Ihre Terminanfrage bei KFZ Lindner',
    html: confirmHtml,
  });
};

const sendApplicationEmail = async (data: ApplicationFormData) => {
  const smtpConfig = getEnvConfig();
  const mailer = getTransporter();

  // Business notification
  const notifyHtml = await render(
    NotifyBewerbungEmail({
      name: data.name,
      email: data.email,
      telefon: data.telefon || '',
      position: data.position,
      nachricht: data.nachricht,
    })
  );

  await mailer.sendMail({
    from: smtpConfig.from,
    to: smtpConfig.to,
    replyTo: data.email,
    subject: `Neue Bewerbung (${data.position})`,
    html: notifyHtml,
  });

  // User confirmation
  const confirmHtml = await render(
    ConfirmBewerbungEmail({
      name: data.name,
      position: data.position,
    })
  );

  await mailer.sendMail({
    from: smtpConfig.from,
    to: data.email,
    subject: 'Ihre Bewerbung bei KFZ Lindner',
    html: confirmHtml,
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
