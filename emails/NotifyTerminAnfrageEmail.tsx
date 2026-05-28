import { Text, Link } from "@react-email/components";
import { EmailLayout } from "./components/EmailLayout";

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
  <EmailLayout
    preview={`Neue Terminanfrage von ${name} (${categoryLabel(category)})`}
    title="Neue Terminanfrage"
  >
    <Text style={paragraph}>
      <strong>{name}</strong> hat eine Terminanfrage über die Website gestellt.
    </Text>

    <InfoRow label="Bereich" value={categoryLabel(category)} />
    <InfoRow label="Name" value={name} />
    <InfoRow label="E-Mail" value={email} link />
    <InfoRow label="Telefon" value={telefon || "—"} />
    <InfoRow label="Kennzeichen" value={kennzeichen || "—"} />
    <InfoRow label="Wunschtermin" value={wunschtermin || "—"} />

    <Text style={detailLabel}>Anliegen</Text>
    <Text style={messageBox}>{nachricht}</Text>

    <Text style={actionHint}>
      <Link href={`mailto:${email}`} style={buttonLink}>
        Jetzt antworten →
      </Link>
    </Text>
  </EmailLayout>
);

/* ---------- Mini-components ---------- */

const InfoRow = ({
  label,
  value,
  link,
}: {
  label: string;
  value: string;
  link?: boolean;
}) => (
  <Text style={infoRow}>
    <span style={infoLabel}>{label}</span>
    <span style={link ? infoLinkValue : infoValue}>{value}</span>
  </Text>
);

/* ---------- Styles ---------- */

const paragraph: React.CSSProperties = {
  color: "#3d4048",
  fontSize: 15,
  lineHeight: 1.65,
  margin: "0 0 18px",
};

const infoRow: React.CSSProperties = {
  fontSize: 14,
  margin: "0 0 8px",
  color: "#3d4048",
};

const infoLabel: React.CSSProperties = {
  fontWeight: 600,
  color: "#012428",
  display: "inline-block",
  width: 130,
};

const infoValue: React.CSSProperties = {
  color: "#3d4048",
};

const infoLinkValue: React.CSSProperties = {
  color: "#012428",
  fontWeight: 600,
};

const detailLabel: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1.5,
  color: "#012428",
  margin: "20px 0 10px",
};

const messageBox: React.CSSProperties = {
  backgroundColor: "#f5f7f9",
  borderLeft: "4px solid #012428",
  borderRadius: 4,
  padding: "14px 18px",
  color: "#3d4048",
  fontSize: 14,
  lineHeight: 1.7,
  whiteSpace: "pre-wrap",
  margin: "0 0 20px",
};

const actionHint: React.CSSProperties = {
  margin: "24px 0 0",
};

const buttonLink: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#012428",
  color: "#ffffff",
  padding: "10px 22px",
  borderRadius: 6,
  fontSize: 14,
  fontWeight: 600,
  textDecoration: "none",
};
