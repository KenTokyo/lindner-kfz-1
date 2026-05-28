import { Text, Link, Section, Row, Column } from "@react-email/components";
import { EmailLayout, BRAND_DARK, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED, WHITE } from "./components/EmailLayout";

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

const categoryDetails = (c: string): string => {
  if (c === "karosserie")
    return "Wir nehmen uns gerne Zeit f&uuml;r eine professionelle Schadensbegutachtung und die bestm&ouml;gliche Instandsetzung Ihres Fahrzeugs.";
  if (c === "autoservice")
    return "Von der Inspektion &uuml;ber den &Ouml;lwechsel bis zur Hauptuntersuchung &mdash; wir k&uuml;mmern uns mit Sorgfalt um Ihr Fahrzeug.";
  return "Wir k&uuml;mmern uns mit Sorgfalt um Ihr Anliegen.";
};

export const ConfirmTerminAnfrageEmail = ({
  name,
  wunschtermin,
  kennzeichen,
  category,
}: ConfirmTerminProps) => (
  <EmailLayout preview={`${name}, Ihre Terminanfrage ist bei uns eingegangen – KFZ Lindner Berlin`}>
    {/* Hero */}
    <Section style={heroCard}>
      <Text style={heroLabel}>
        Terminanfrage &bull; {categoryLabel(category)}
      </Text>
      <Text style={heroTitle}>
        Vielen Dank f&uuml;r Ihre Anfrage, {name}!
      </Text>
      <Text style={heroText}>
        Wir haben alle Informationen erhalten und melden uns zeitnah bei Ihnen.
      </Text>
    </Section>

    {/* Bereich Intro */}
    <Section style={contentCard}>
      <Text style={contentText}>
        Ihre Terminanfrage im Bereich{" "}
        <strong>{categoryLabel(category)}</strong> ist sicher bei uns
        eingegangen. {categoryDetails(category)}
      </Text>
    </Section>

    {/* Info Card */}
    <Section style={infoCard}>
      <Text style={infoCardTitle}>IHRE ANFRAGE AUF EINEN BLICK</Text>
      <Row style={detailRow}>
        <Column style={detailLabelCol}>Bereich</Column>
        <Column style={detailValueCol}>
          <strong style={{ color: BRAND_DARK }}>{categoryLabel(category)}</strong>
        </Column>
      </Row>
      {wunschtermin && (
        <Row style={detailRow}>
          <Column style={detailLabelCol}>Wunschtermin</Column>
          <Column style={detailValueCol}>
            <strong>{wunschtermin}</strong>
          </Column>
        </Row>
      )}
      {kennzeichen && (
        <Row style={detailRow}>
          <Column style={detailLabelCol}>Kennzeichen</Column>
          <Column style={detailValueCol}>
            <strong>{kennzeichen}</strong>
          </Column>
        </Row>
      )}
    </Section>

    {/* Callout */}
    <Section style={calloutCard}>
      <Text style={calloutText}>
        Sie h&ouml;ren in der Regel innerhalb eines Werktages von uns &mdash;
        oft geht es auch schneller. Sollten Sie vorab Fragen haben, rufen Sie
        uns einfach an oder schreiben Sie eine kurze Mail.
      </Text>
    </Section>

    {/* Contact */}
    <Section style={contactCard}>
      <Row style={{ marginBottom: 12 }}>
        <Column style={iconCol}>
          <Text style={contactIcon}>📞</Text>
        </Column>
        <Column>
          <Text style={contactLabel}>Telefon</Text>
          <Link href="tel:+49309131252" style={contactLink}>
            030 913 1252
          </Link>
        </Column>
      </Row>
      <Row>
        <Column style={iconCol}>
          <Text style={contactIcon}>✉️</Text>
        </Column>
        <Column>
          <Text style={contactLabel}>E-Mail</Text>
          <Link href="mailto:info@kfz-lindner.de" style={contactLink}>
            info@kfz-lindner.de
          </Link>
        </Column>
      </Row>
    </Section>

    {/* Sign-off */}
    <Section style={signoffSection}>
      <Text style={signoffText}>
        Herzliche Gr&uuml;&szlig;e aus Berlin-Blankenfelde
      </Text>
      <Text style={signoffName}>Ihr Team von KFZ Lindner</Text>
    </Section>
  </EmailLayout>
);

/* ---------- Styles ---------- */

const heroCard: React.CSSProperties = {
  backgroundColor: WHITE,
  borderRadius: 10,
  marginTop: 24,
  padding: "64px 32px 48px",
  textAlign: "center",
};

const heroLabel: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.5,
  fontWeight: 500,
  color: TEXT_MUTED,
  margin: "0 0 16px",
};

const heroTitle: React.CSSProperties = {
  fontSize: 36,
  fontWeight: 600,
  letterSpacing: -0.72,
  lineHeight: 1.15,
  color: TEXT_PRIMARY,
  margin: "0 auto 16px",
  maxWidth: 420,
};

const heroText: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.6,
  fontWeight: 400,
  color: TEXT_SECONDARY,
  maxWidth: 440,
  margin: "0 auto",
};

const contentCard: React.CSSProperties = {
  backgroundColor: WHITE,
  borderRadius: 10,
  marginTop: 24,
  padding: "40px 32px 36px",
};

const contentText: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.6,
  color: TEXT_SECONDARY,
  margin: 0,
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

const detailRow: React.CSSProperties = {
  margin: "0 0 10px",
};

const detailLabelCol: React.CSSProperties = {
  color: TEXT_MUTED,
  fontSize: 14,
  fontWeight: 600,
  width: 140,
};

const detailValueCol: React.CSSProperties = {
  color: TEXT_PRIMARY,
  fontSize: 14,
};

const calloutCard: React.CSSProperties = {
  backgroundColor: WHITE,
  borderRadius: 10,
  marginTop: 24,
  padding: "36px 32px",
};

const calloutText: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.7,
  color: TEXT_SECONDARY,
  fontStyle: "italic",
  margin: 0,
  paddingLeft: 14,
  borderLeft: `3px solid ${BRAND_DARK}`,
};

const contactCard: React.CSSProperties = {
  backgroundColor: WHITE,
  borderRadius: 10,
  marginTop: 24,
  padding: "40px 32px 36px",
  textAlign: "left",
};

const iconCol: React.CSSProperties = {
  verticalAlign: "top",
  width: 40,
  paddingTop: 2,
};

const contactIcon: React.CSSProperties = {
  fontSize: 18,
  margin: 0,
  lineHeight: 1.6,
};

const contactLabel: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1.5,
  color: TEXT_MUTED,
  margin: "0 0 2px",
};

const contactLink: React.CSSProperties = {
  color: BRAND_DARK,
  fontSize: 15,
  fontWeight: 600,
  textDecoration: "none",
};

const signoffSection: React.CSSProperties = {
  marginTop: 24,
  padding: "0 32px 0",
};

const signoffText: React.CSSProperties = {
  fontSize: 16,
  color: TEXT_SECONDARY,
  margin: "0 0 4px",
};

const signoffName: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  color: BRAND_DARK,
  margin: "0 0 32px",
};
