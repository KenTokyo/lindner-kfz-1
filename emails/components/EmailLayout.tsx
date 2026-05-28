import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Link,
  Hr,
  Img,
  Font,
} from "@react-email/components";

export interface EmailLayoutProps {
  preview: string;
  title: string;
  children: React.ReactNode;
}

const BRAND_DARK = "#012428";
const BRAND_LIGHT = "#f4f6f8";
const TEXT_PRIMARY = "#1a1a2e";
const TEXT_SECONDARY = "#5a5f6e";
const WHITE = "#ffffff";

export const EmailLayout = ({ preview, title, children }: EmailLayoutProps) => (
  <Html lang="de">
    <Head>
      <Font
        fontFamily="Manrope"
        fallbackFontFamily={["Arial", "Helvetica", "sans-serif"]}
        webFont={{
          url: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap",
          format: "woff2",
        }}
      />
    </Head>
    <Preview>{preview}</Preview>
    <Body style={body}>
      <Container style={container}>
        {/* Header */}
        <Section style={headerSection}>
          <Row>
            <Column align="center">
              <Img
                src="https://www.kfz-lindner.de/Lindner%20Logo_weiss.png"
                alt="KFZ Lindner Berlin"
                width="180"
                height="auto"
                style={logo}
              />
            </Column>
          </Row>
          <Text style={headerTagline}>
            Karosserie &amp; Lack &bull; Autoservice
          </Text>
        </Section>

        {/* Title */}
        <Section style={titleSection}>
          <Text style={titleText}>{title}</Text>
        </Section>

        {/* Content */}
        <Section style={contentSection}>{children}</Section>

        {/* Divider */}
        <Hr style={hr} />

        {/* Footer */}
        <Section style={footerSection}>
          <Text style={footerName}>KFZ Lindner &mdash; Meisterbetrieb</Text>
          <Text style={footerAddress}>
            Hauptstraße 43, 13159 Berlin &bull;{" "}
            <Link href="tel:+49309131252" style={footerLink}>
              030 913 1252
            </Link>
          </Text>
          <Text style={footerEmail}>
            <Link href="mailto:info@kfz-lindner.de" style={footerLink}>
              info@kfz-lindner.de
            </Link>{" "}
            &bull;{" "}
            <Link href="https://www.kfz-lindner.de" style={footerLink}>
              www.kfz-lindner.de
            </Link>
          </Text>
          <Text style={footerHours}>Mo &ndash; Fr: 07:00 &ndash; 18:00 Uhr</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

/* ---------- Styles ---------- */

const body: React.CSSProperties = {
  backgroundColor: "#e8ecf0",
  fontFamily: "Manrope, Arial, Helvetica, sans-serif",
  margin: 0,
  padding: 0,
  WebkitFontSmoothing: "antialiased",
};

const container: React.CSSProperties = {
  maxWidth: 600,
  margin: "40px auto",
  backgroundColor: WHITE,
  borderRadius: 12,
  overflow: "hidden",
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
};

const headerSection: React.CSSProperties = {
  backgroundColor: BRAND_DARK,
  padding: "36px 32px 32px",
  textAlign: "center",
};

const logo: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const headerTagline: React.CSSProperties = {
  color: "rgba(255,255,255,0.7)",
  fontSize: 13,
  letterSpacing: 2,
  textTransform: "uppercase",
  margin: "16px 0 0",
  fontWeight: 400,
};

const titleSection: React.CSSProperties = {
  padding: "28px 32px 16px",
};

const titleText: React.CSSProperties = {
  color: BRAND_DARK,
  fontSize: 22,
  fontWeight: 700,
  margin: 0,
  lineHeight: 1.3,
};

const contentSection: React.CSSProperties = {
  padding: "8px 32px 28px",
};

const hr: React.CSSProperties = {
  borderColor: "#e5e7eb",
  margin: "0 32px",
};

const footerSection: React.CSSProperties = {
  padding: "24px 32px 32px",
  textAlign: "center",
};

const footerName: React.CSSProperties = {
  color: BRAND_DARK,
  fontSize: 14,
  fontWeight: 700,
  margin: "0 0 8px",
};

const footerAddress: React.CSSProperties = {
  color: TEXT_SECONDARY,
  fontSize: 12,
  margin: "0 0 4px",
};

const footerEmail: React.CSSProperties = {
  color: TEXT_SECONDARY,
  fontSize: 12,
  margin: "0 0 4px",
};

const footerHours: React.CSSProperties = {
  color: TEXT_SECONDARY,
  fontSize: 12,
  margin: "8px 0 0",
};

const footerLink: React.CSSProperties = {
  color: BRAND_DARK,
  textDecoration: "none",
  fontWeight: 600,
};
