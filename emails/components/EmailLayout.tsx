import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Link,
  Row,
  Column,
  Font,
} from "@react-email/components";

export interface EmailLayoutProps {
  preview: string;
  children: React.ReactNode;
}

export const BRAND_DARK = "#012428";
export const BRAND_GOLD = "#c9a84c";
export const TEXT_PRIMARY = "#14171e";
export const TEXT_SECONDARY = "#43454b";
export const TEXT_MUTED = "#7b7d81";
export const PAGE_BG = "#f3f4f6";
export const WHITE = "#ffffff";

export const EmailLayout = ({ preview, children }: EmailLayoutProps) => (
  <Html lang="de">
    <Head>
      <Font
        fontFamily="Manrope"
        fallbackFontFamily={["Arial", "Helvetica", "sans-serif"]}
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap",
          format: "woff2",
        }}
      />
      <style>{`
        @media (max-width: 600px) {
          .mobile-px-4 { padding-left: 16px !important; padding-right: 16px !important; }
          .mobile-py-6 { padding-top: 40px !important; padding-bottom: 40px !important; }
        }
      `}</style>
    </Head>
    <Preview>{preview}</Preview>
    <Body style={body}>
      <Container style={container}>
        {/* Header */}
        <Section style={headerSection}>
          <Row>
            <Column style={headerBrandCol}>
              <Text style={headerBrandName}>KFZ LINDNER</Text>
            </Column>
            <Column style={headerTaglineCol}>
              <Text style={headerTagline}>
                Karosserie &amp; Lack &bull; Autoservice
              </Text>
            </Column>
          </Row>
        </Section>

        {children}

        {/* Footer */}
        <Section style={footerSection}>
          <Text style={footerDesc}>
            KFZ Lindner &mdash; Ihr Meisterbetrieb f&uuml;r alle Kfz-Belange in
            Berlin-Blankenfelde.
          </Text>
          <Text style={footerAddress}>
            Hauptstra&szlig;e 43, 13159 Berlin-Blankenfelde
          </Text>
          <Text style={footerContact}>
            <Link href="tel:+49309131252" style={footerLink}>
              030 913 1252
            </Link>{" "}
            &bull;{" "}
            <Link href="mailto:info@kfz-lindner.de" style={footerLink}>
              info@kfz-lindner.de
            </Link>{" "}
            &bull;{" "}
            <Link href="https://www.kfz-lindner.de" style={footerLink}>
              www.kfz-lindner.de
            </Link>
          </Text>
          <Text style={footerHours}>
            &Ouml;ffnungszeiten: Mo &ndash; Fr &bull; 07:00 &ndash; 18:00 Uhr
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

/* ---------- Styles ---------- */

const body: React.CSSProperties = {
  backgroundColor: PAGE_BG,
  fontFamily: "Manrope, Arial, Helvetica, sans-serif",
  margin: 0,
  padding: 0,
};

const container: React.CSSProperties = {
  maxWidth: 640,
  margin: "0 auto",
  width: "100%",
};

const headerSection: React.CSSProperties = {
  backgroundColor: WHITE,
  borderRadius: 10,
  padding: "18px 24px",
  marginTop: 32,
};

const headerBrandCol: React.CSSProperties = {
  verticalAlign: "middle",
  width: "50%",
};

const headerBrandName: React.CSSProperties = {
  color: BRAND_DARK,
  fontSize: 16,
  fontWeight: 700,
  letterSpacing: 3,
  margin: 0,
};

const headerTaglineCol: React.CSSProperties = {
  verticalAlign: "middle",
  width: "50%",
};

const headerTagline: React.CSSProperties = {
  color: TEXT_MUTED,
  fontSize: 12,
  fontWeight: 500,
  textAlign: "right",
  margin: 0,
};

const footerSection: React.CSSProperties = {
  backgroundColor: WHITE,
  borderRadius: 10,
  padding: "48px 24px 40px",
  marginTop: 24,
  marginBottom: 32,
  textAlign: "center",
};

const footerDesc: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.5,
  color: TEXT_MUTED,
  maxWidth: 300,
  margin: "0 auto 32px",
};

const footerAddress: React.CSSProperties = {
  fontSize: 11,
  lineHeight: 1.5,
  color: TEXT_MUTED,
  margin: "0 0 20px",
};

const footerContact: React.CSSProperties = {
  fontSize: 13,
  color: TEXT_MUTED,
  margin: "0 0 8px",
};

const footerHours: React.CSSProperties = {
  fontSize: 11,
  color: TEXT_MUTED,
  margin: "8px 0 0",
  fontStyle: "italic",
};

const footerLink: React.CSSProperties = {
  color: BRAND_DARK,
  textDecoration: "none",
  fontWeight: 600,
};
