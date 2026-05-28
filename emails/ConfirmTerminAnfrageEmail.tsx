import { Text, Link } from "@react-email/components";
import { EmailLayout } from "./components/EmailLayout";

interface ConfirmTerminProps {
  name: string;
  wunschtermin: string;
  kennzeichen: string;
  category: "karosserie" | "autoservice" | "";
}

const categoryLabel = (c: string): string => {
  if (c === "karosserie") return "Karosserie & Lack";
  if (c === "autoservice") return "Autoservice";
  return "KFZ Lindner";
};

export const ConfirmTerminAnfrageEmail = ({
  name,
  wunschtermin,
  kennzeichen,
  category,
}: ConfirmTerminProps) => (
  <EmailLayout
    preview="Wir haben Ihre Terminanfrage erhalten – KFZ Lindner Berlin"
    title={`Danke für Ihre Anfrage, ${name}`}
  >
    <Text style={paragraph}>
      Wir haben Ihre Terminanfrage im Bereich{" "}
      <strong>{categoryLabel(category)}</strong> erhalten und melden uns
      schnellstmöglich bei Ihnen, um einen passenden Termin zu bestätigen.
    </Text>

    <Text style={detailLabel}>Ihre Angaben auf einen Blick:</Text>

    <Text style={paragraph}>
      {wunschtermin && (
        <>
          Gewünschter Termin: <strong>{wunschtermin}</strong>
          <br />
        </>
      )}
      {kennzeichen && (
        <>
          Kennzeichen: <strong>{kennzeichen}</strong>
          <br />
        </>
      )}
      Bereich: <strong>{categoryLabel(category)}</strong>
    </Text>

    <Text style={paragraph}>
      Falls Sie vorab Fragen haben, erreichen Sie uns telefonisch unter{" "}
      <Link href="tel:+49309131252" style={link}>
        030 913 1252
      </Link>{" "}
      oder per E-Mail an{" "}
      <Link href="mailto:info@kfz-lindner.de" style={link}>
        info@kfz-lindner.de
      </Link>
      .
    </Text>

    <Text style={closing}>Mit freundlichen Grüßen</Text>
    <Text style={signature}>Ihr Team von KFZ Lindner</Text>
  </EmailLayout>
);

/* ---------- Shared email styles ---------- */

const paragraph: React.CSSProperties = {
  color: "#3d4048",
  fontSize: 15,
  lineHeight: 1.65,
  margin: "0 0 14px",
};

const detailLabel: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1.5,
  color: "#012428",
  margin: "20px 0 10px",
};

const closing: React.CSSProperties = {
  color: "#3d4048",
  fontSize: 15,
  margin: "24px 0 0",
};

const signature: React.CSSProperties = {
  color: "#012428",
  fontSize: 15,
  fontWeight: 700,
  margin: "4px 0 0",
};

const link: React.CSSProperties = {
  color: "#012428",
  fontWeight: 600,
};
