import { Text, Link, Section } from "@react-email/components";
import { EmailLayout, BRAND_DARK, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED, WHITE, PAGE_BG } from "./components/EmailLayout";

interface NotifyTerminProps {
  name: string;
  email: string;
  telefon: string;
  kennzeichen: string;
  wunschtermin: string;
  nachricht: string;
  category: "karosserie" | "autoservice" | "";
}

const categoryLabel = (c: string): string => {
  if (c === "karosserie") return "Karosserie & Lack";
  if (c === "autoservice") return "Autoservice";
  return "Nicht angegeben";
};

export const NotifyTerminAnfrageEmail = ({
  name,
  email,
  telefon,
  kennzeichen,
  wunschtermin,
  nachricht,
  category,
}: NotifyTerminProps) => (
  <EmailLayout preview={`Neue Terminanfrage von ${name} – ${categoryLabel(category)}`}>
    {/* Hero */}
    <Section style={heroCard}>
      <Text style={heroLabel}>Neue Terminanfrage &bull; kfz-lindner.de</Text>
      <Text style={heroTitle}>
        <strong>{name}</strong> hat eine Terminanfrage gestellt
      </Text>
      <Text style={heroText}>Bitte zeitnah Kontakt aufnehmen.</Text>
    </Section>

    {/* Info Card */}
    <Section style={infoCard}>
      <Text style={infoCardTitle}>KUNDENDATEN &amp; ANFRAGE</Text>
      <Section style={infoRowWrapper}>
        <InfoRow label="Bereich" value={categoryLabel(category)} highlight />
        <InfoRow label="Name" value={name} />
        <InfoRow
          label="E-Mail"
          value={email}
          href={`mailto:${email}`}
        />
        <InfoRow label="Telefon" value={telefon || "—"} />
        <InfoRow label="Kennzeichen" value={kennzeichen || "—"} />
        <InfoRow label="Wunschtermin" value={wunschtermin || "—"} />
      </Section>
    </Section>

    {/* Message */}
    <Section style={messageCard}>
      <Text style={messageLabel}>ANLIEGEN DES KUNDEN</Text>
      <Text style={messageBox}>{nachricht}</Text>
    </Section>

    {/* Action Bar */}
    <Section style={actionCard}>
      <Link href={`mailto:${email}`} style={actionButton}>
        Jetzt per E-Mail antworten →
      </Link>
      <Text style={actionSecondary}>
        oder anrufen:{" "}
        <Link href={`tel:${telefon || ""}`} style={actionLink}>
          {telefon || "keine Nummer angegeben"}
        </Link>
      </Text>
    </Section>
  </EmailLayout>
);

/* ---------- Mini-components ---------- */

const InfoRow = ({
  label,
  value,
  href,
  highlight,
}: {
  label: string;
  value: string;
  href?: string;
  highlight?: boolean;
}) => (
  <Text style={infoRow}>
    <span style={highlight ? infoLabelHighlight : infoLabel}>{label}</span>
    <span style={infoValue}>
      {href ? (
        <Link href={href} style={infoLink}>
          {value}
        </Link>
      ) : highlight ? (
        <strong style={{ color: BRAND_DARK }}>{value}</strong>
      ) : (
        value
      )}
    </span>
  </Text>
);

/* ---------- Styles ---------- */

const heroCard: React.CSSProperties = {
  backgroundColor: WHITE,
  borderRadius: 10,
  marginTop: 24,
  padding: "32px 32px 28px",
  textAlign: "center",
};

const heroLabel: React.CSSProperties = {
  fontSize: 12,
  lineHeight: 1.5,
  fontWeight: 500,
  color: TEXT_MUTED,
  margin: "0 0 8px",
  textTransform: "uppercase",
  letterSpacing: 1,
};

const heroTitle: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 600,
  letterSpacing: -0.44,
  lineHeight: 1.2,
  color: TEXT_PRIMARY,
  margin: "0 auto 8px",
  maxWidth: 420,
};

const heroText: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.5,
  fontWeight: 400,
  color: TEXT_SECONDARY,
  maxWidth: 440,
  margin: "0 auto",
};

const infoCard: React.CSSProperties = {
  backgroundColor: WHITE,
  borderRadius: 10,
  marginTop: 24,
  padding: "40px 32px 32px",
};

const infoCardTitle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1.5,
  color: TEXT_MUTED,
  margin: "0 0 24px",
};

const infoRowWrapper: React.CSSProperties = {
  margin: 0,
};

const infoRow: React.CSSProperties = {
  fontSize: 14,
  margin: "0 0 10px",
  color: TEXT_SECONDARY,
};

const infoLabel: React.CSSProperties = {
  fontWeight: 600,
  color: TEXT_MUTED,
  display: "inline-block",
  width: 140,
};

const infoLabelHighlight: React.CSSProperties = {
  fontWeight: 700,
  color: BRAND_DARK,
  display: "inline-block",
  width: 140,
};

const infoValue: React.CSSProperties = {
  color: TEXT_PRIMARY,
};

const infoLink: React.CSSProperties = {
  color: BRAND_DARK,
  fontWeight: 600,
  textDecoration: "none",
};

const messageCard: React.CSSProperties = {
  backgroundColor: WHITE,
  borderRadius: 10,
  marginTop: 24,
  padding: "40px 32px 36px",
};

const messageLabel: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1.5,
  color: TEXT_MUTED,
  margin: "0 0 16px",
};

const messageBox: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.7,
  color: TEXT_SECONDARY,
  whiteSpace: "pre-wrap",
  margin: 0,
  backgroundColor: PAGE_BG,
  borderRadius: 8,
  padding: "20px 24px",
};

const actionCard: React.CSSProperties = {
  backgroundColor: WHITE,
  borderRadius: 10,
  marginTop: 24,
  padding: "48px 32px",
  textAlign: "center",
};

const actionButton: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: BRAND_DARK,
  color: "#ffffff",
  padding: "16px 32px",
  borderRadius: 8,
  fontSize: 16,
  fontWeight: 600,
  textDecoration: "none",
};

const actionSecondary: React.CSSProperties = {
  color: TEXT_MUTED,
  fontSize: 13,
  margin: "16px 0 0",
};

const actionLink: React.CSSProperties = {
  color: BRAND_DARK,
  fontWeight: 600,
  textDecoration: "none",
};
