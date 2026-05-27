export interface AppointmentFormData {
  name: string;
  email: string;
  telefon: string;
  kennzeichen: string;
  wunschtermin: string;
  nachricht: string;
}

export interface ApplicationFormData {
  name: string;
  email: string;
  telefon: string;
  position: string;
  nachricht: string;
}

export type AppointmentField = keyof AppointmentFormData;
export type ApplicationField = keyof ApplicationFormData;
export type FormErrors<TField extends string> = Partial<Record<TField, string>>;

export const APPOINTMENT_FIELDS: AppointmentField[] = [
  'name',
  'email',
  'telefon',
  'kennzeichen',
  'wunschtermin',
  'nachricht',
];

export const APPLICATION_FIELDS: ApplicationField[] = [
  'name',
  'email',
  'telefon',
  'position',
  'nachricht',
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_ALLOWED_REGEX = /^[0-9+\s()/.-]+$/;

const normalizeSpace = (value: string): string => value.trim().replace(/\s+/g, ' ');
const countDigits = (value: string): number => value.replace(/\D/g, '').length;

export const sanitizeAppointmentData = (
  data: AppointmentFormData
): AppointmentFormData => ({
  name: normalizeSpace(data.name),
  email: data.email.trim(),
  telefon: data.telefon.trim(),
  kennzeichen: normalizeSpace(data.kennzeichen),
  wunschtermin: normalizeSpace(data.wunschtermin),
  nachricht: data.nachricht.trim(),
});

export const sanitizeApplicationData = (
  data: ApplicationFormData
): ApplicationFormData => ({
  name: normalizeSpace(data.name),
  email: data.email.trim(),
  telefon: data.telefon.trim(),
  position: normalizeSpace(data.position),
  nachricht: data.nachricht.trim(),
});

export const validateAppointmentField = (
  field: AppointmentField,
  rawData: AppointmentFormData
): string | undefined => {
  const data = sanitizeAppointmentData(rawData);

  switch (field) {
    case 'name': {
      if (!data.name) return 'Bitte geben Sie Ihren Namen ein.';
      if (data.name.length < 2) return 'Der Name ist zu kurz.';
      if (data.name.length > 80) return 'Bitte maximal 80 Zeichen eingeben.';
      return undefined;
    }

    case 'email': {
      if (!data.email) return 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
      if (!EMAIL_REGEX.test(data.email)) return 'Bitte eine gueltige E-Mail-Adresse eingeben.';
      if (data.email.length > 120) return 'Bitte maximal 120 Zeichen eingeben.';
      return undefined;
    }

    case 'telefon': {
      if (!data.telefon) return undefined;
      if (!PHONE_ALLOWED_REGEX.test(data.telefon)) {
        return 'Bitte nur Zahlen sowie +, -, /, Leerzeichen oder Klammern verwenden.';
      }
      const digits = countDigits(data.telefon);
      if (digits < 6) return 'Die Telefonnummer wirkt zu kurz.';
      if (digits > 15) return 'Die Telefonnummer wirkt zu lang.';
      return undefined;
    }

    case 'kennzeichen': {
      if (!data.kennzeichen) return undefined;
      if (data.kennzeichen.length > 20) return 'Bitte maximal 20 Zeichen eingeben.';
      return undefined;
    }

    case 'wunschtermin': {
      if (!data.wunschtermin) return undefined;
      if (data.wunschtermin.length > 80) return 'Bitte maximal 80 Zeichen eingeben.';
      return undefined;
    }

    case 'nachricht': {
      if (!data.nachricht) return 'Bitte beschreiben Sie kurz Ihr Anliegen.';
      if (data.nachricht.length < 10) return 'Bitte mindestens 10 Zeichen eingeben.';
      if (data.nachricht.length > 1200) return 'Bitte maximal 1200 Zeichen eingeben.';
      return undefined;
    }

    default:
      return undefined;
  }
};

export const validateApplicationField = (
  field: ApplicationField,
  rawData: ApplicationFormData
): string | undefined => {
  const data = sanitizeApplicationData(rawData);

  switch (field) {
    case 'name': {
      if (!data.name) return 'Bitte geben Sie Ihren Namen ein.';
      if (data.name.length < 2) return 'Der Name ist zu kurz.';
      if (data.name.length > 80) return 'Bitte maximal 80 Zeichen eingeben.';
      return undefined;
    }

    case 'email': {
      if (!data.email) return 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
      if (!EMAIL_REGEX.test(data.email)) return 'Bitte eine gueltige E-Mail-Adresse eingeben.';
      if (data.email.length > 120) return 'Bitte maximal 120 Zeichen eingeben.';
      return undefined;
    }

    case 'telefon': {
      if (!data.telefon) return undefined;
      if (!PHONE_ALLOWED_REGEX.test(data.telefon)) {
        return 'Bitte nur Zahlen sowie +, -, /, Leerzeichen oder Klammern verwenden.';
      }
      const digits = countDigits(data.telefon);
      if (digits < 6) return 'Die Telefonnummer wirkt zu kurz.';
      if (digits > 15) return 'Die Telefonnummer wirkt zu lang.';
      return undefined;
    }

    case 'position': {
      if (!data.position) return 'Bitte waehlen Sie eine Position aus.';
      if (data.position.length > 120) return 'Bitte maximal 120 Zeichen eingeben.';
      return undefined;
    }

    case 'nachricht': {
      if (!data.nachricht) return 'Bitte schreiben Sie ein paar Worte zu Ihrer Bewerbung.';
      if (data.nachricht.length < 20) return 'Bitte mindestens 20 Zeichen eingeben.';
      if (data.nachricht.length > 1500) return 'Bitte maximal 1500 Zeichen eingeben.';
      return undefined;
    }

    default:
      return undefined;
  }
};

export const validateAppointmentForm = (
  data: AppointmentFormData
): FormErrors<AppointmentField> => {
  const errors: FormErrors<AppointmentField> = {};

  for (const field of APPOINTMENT_FIELDS) {
    const error = validateAppointmentField(field, data);
    if (error) errors[field] = error;
  }

  return errors;
};

export const validateApplicationForm = (
  data: ApplicationFormData
): FormErrors<ApplicationField> => {
  const errors: FormErrors<ApplicationField> = {};

  for (const field of APPLICATION_FIELDS) {
    const error = validateApplicationField(field, data);
    if (error) errors[field] = error;
  }

  return errors;
};

export const hasFormErrors = <TField extends string>(
  errors: FormErrors<TField>
): boolean => Object.values(errors).some(Boolean);
