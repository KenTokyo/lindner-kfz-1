import { Text, Link, Section, Row, Column } from "@react-email/components";
import { EmailLayout, BRAND_DARK, BRAND_GOLD, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_MUTED, PAGE_BG, WHITE } from "./components/EmailLayout";

interface ConfirmBewerbungProps {
  name: string;
  position: string;
}

export const ConfirmBewerbungEmail = ({
  name,
  position,
}: ConfirmBewerbungProps) => (
  <EmailLayout preview={`${name}, Ihre Bewerbung ist bei uns eingegangen – KFZ Lindner Berlin`}>
    {/* Hero */}
    <Section style={heroCard}>
      <Text style={heroLabel}>
        Bewerbungseingang
      </Text>
      <Text style={heroTitle}>
        Vielen Dank f&uuml;r Ihre Bewerbung, {name}!
      </Text>
      <Text style={heroText}>
        Wir freuen uns &uuml;ber Ihr Interesse an unserem Team und haben Ihre
        Unterlagen f&uuml;r die Position{" "}
        <strong>{position}</strong> sicher erhalten.
      </Text>
    </Section>

    {/* Next Steps */}
    <Section style={contentCard}>
      <Text style={featureTitle}>Was passiert als N&auml;chstes?</Text>
      <Text style={featureText}>
        Wir nehmen uns die Zeit, Ihre Erfahrungen sorgf&auml;ltig zu pr&uuml;fen,
        und melden uns innerhalb weniger Werktage bei Ihnen &mdash; telefonisch
        oder f&uuml;r ein pers&ouml;nliches Kennenlernen direkt in unserer
        Werkstatt in Berlin-Blankenfelde.
      </Text>
      <Text style={featureText}>
        Sollten Sie in der Zwischenzeit Fragen haben, melden Sie sich jederzeit
        gerne bei uns.
      </Text>
    </Section>

    {/* Contact */}
    <Section style={contentCard}>
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
        Wir w&uuml;nschen Ihnen einen sch&ouml;nen Tag!
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

const featureTitle: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 600,
  letterSpacing: -0.48,
  lineHeight: 1.2,
  color: TEXT_PRIMARY,
  margin: "0 0 16px",
};

const featureText: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.6,
  color: TEXT_SECONDARY,
  margin: "0 0 12px",
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
