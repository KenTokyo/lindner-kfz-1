import { Text, Link } from "@react-email/components";
import { EmailLayout } from "./components/EmailLayout";

interface ConfirmBewerbungProps {
  name: string;
  position: string;
}

export const ConfirmBewerbungEmail = ({
  name,
  position,
}: ConfirmBewerbungProps) => (
  <EmailLayout
    preview={`Wir haben Ihre Bewerbung erhalten – KFZ Lindner Berlin`}
    title={`Danke für Ihre Bewerbung, ${name}`}
  >
    <Text style={paragraph}>
      Wir haben Ihre Bewerbung für die Position{" "}
      <strong>{position}</strong> erhalten und werden sie sorgfältig prüfen.
    </Text>

    <Text style={paragraph}>
      Wir melden uns in Kürze bei Ihnen, um die nächsten Schritte zu besprechen.
      Sollten Sie in der Zwischenzeit Fragen haben, erreichen Sie uns jederzeit.
    </Text>

    <Text style={paragraph}>
      Telefonisch unter{" "}
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

/* ---------- Styles ---------- */

const paragraph: React.CSSProperties = {
  color: "#3d4048",
  fontSize: 15,
  lineHeight: 1.65,
  margin: "0 0 14px",
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
