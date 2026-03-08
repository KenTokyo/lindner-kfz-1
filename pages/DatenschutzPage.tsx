import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const DatenschutzPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Datenschutzerklärung | KFZ Lindner Berlin';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Datenschutzerklärung von KFZ Lindner und Autoservice Lindner in Berlin. Informationen zur Datenverarbeitung gemäß DSGVO.');
  }, []);

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Datenschutzerklärung</h1>
          <p className="text-neutral-500 mb-12">Informationen zur Verarbeitung Ihrer personenbezogenen Daten</p>
        </motion.div>

        {/* Platzhalter-Hinweis */}
        <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 mb-12">
          <p className="text-sm text-amber-700">
            <strong>Intern:</strong> Dieser Text dient als Strukturvorlage. Die vollständige DSGVO-konforme
            Datenschutzerklärung muss vor dem Go-Live durch einen rechtlich geprüften Text ersetzt oder ergänzt werden.
          </p>
        </div>

        <div className="space-y-10 text-neutral-600 leading-relaxed">
          {/* 1. Verantwortlicher */}
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website sind:
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <p className="font-semibold text-neutral-800">KFZ Lindner</p>
                <p>Hauptstraße 43<br />13159 Berlin-Blankenfelde</p>
                <p>Telefon: 030 / 913 12 52</p>
                <p>E-Mail: info@autoservice-lindner.de</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                <p className="font-semibold text-neutral-800">Autoservice Lindner</p>
                <p>Hauptstraße 43<br />13159 Berlin-Blankenfelde</p>
                <p>Telefon: 030 / 913 12 53</p>
                <p>E-Mail: info@autoservice-lindner.de</p>
              </div>
            </div>
          </section>

          {/* 2. Allgemeines zur Datenverarbeitung */}
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur
              Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
              Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung
              des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer
              Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch
              gesetzliche Vorschriften gestattet ist.
            </p>
          </section>

          {/* 3. Rechtsgrundlage */}
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">3. Rechtsgrundlage</h2>
            <p>
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen
              Person einholen, dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
            </p>
            <p className="mt-3">
              Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen
              Vertragspartei die betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als
              Rechtsgrundlage. Für die Verarbeitung, die zur Wahrung eines berechtigten Interesses unseres
              Unternehmens erforderlich ist, dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage.
            </p>
          </section>

          {/* 4. Server-Logfiles */}
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">4. Bereitstellung der Website und Erstellung von Logfiles</h2>
            <p>
              Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen
              des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Informationen über den Browsertyp und die verwendete Version</li>
              <li>Das Betriebssystem des Nutzers</li>
              <li>Die IP-Adresse des Nutzers</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Websites, von denen das System des Nutzers auf unsere Internetseite gelangt (Referrer)</li>
            </ul>
            <p className="mt-3">
              Die Daten werden in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten zusammen
              mit anderen personenbezogenen Daten des Nutzers findet nicht statt. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. f DSGVO. Die Erhebung der Daten zur Bereitstellung der Website und die Speicherung der Daten
              in Logfiles ist für den Betrieb der Internetseite zwingend erforderlich.
            </p>
          </section>

          {/* 5. Kontaktformular */}
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">5. Kontakt- und Terminanfrageformular</h2>
            <p>
              Auf unserer Internetseite sind Formulare vorhanden, die für die Terminanfrage sowie Kontaktaufnahme
              genutzt werden können. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske
              eingegeben Daten an uns übermittelt und gespeichert. Diese Daten sind:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer (optional)</li>
              <li>Anliegen / Nachricht</li>
              <li>Gewählter Bereich (Karosserie & Lack / Autoservice)</li>
              <li>Kennzeichen (optional)</li>
              <li>Wunschtermin (optional)</li>
            </ul>
            <p className="mt-3">
              Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur Bearbeitung
              der Kontaktaufnahme bzw. Terminanfrage. Die Daten werden nach abgeschlossener Bearbeitung Ihres
              Anliegens gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
            <p className="mt-3">
              Rechtsgrundlage für die Verarbeitung der Daten ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
              Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihres Anliegens).
            </p>
          </section>

          {/* 6. Bewerbungsformular */}
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">6. Bewerbungsformular</h2>
            <p>
              Auf unserer Karriereseite können Sie sich über ein Formular bewerben. Dabei werden folgende Daten
              erhoben: Name, E-Mail-Adresse, Telefonnummer (optional), gewünschte Position und Ihre Nachricht.
            </p>
            <p className="mt-3">
              Die Daten werden ausschließlich zum Zweck der Bearbeitung Ihrer Bewerbung verarbeitet. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. b DSGVO i.V.m. § 26 BDSG. Ihre Bewerbungsdaten werden nach Abschluss des
              Bewerbungsverfahrens gelöscht, sofern kein berechtigtes Interesse an einer weiteren Speicherung besteht
              (max. 6 Monate nach Abschluss des Verfahrens).
            </p>
          </section>

          {/* 7. Cookies */}
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">7. Cookies</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Seite
              erforderlich sind. Es werden keine Tracking-Cookies, Analyse-Tools oder Marketing-Cookies eingesetzt.
            </p>
            <p className="mt-3">
              Da ausschließlich technisch notwendige Cookies verwendet werden, ist keine Einwilligung erforderlich.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          {/* 8. Externe Dienste */}
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">8. Externe Dienste</h2>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-2">Google Fonts</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Google Fonts.
              Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriftarten in Ihren Browser-Cache.
              Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen.
              Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde.
            </p>
            <p className="mt-3">
              Die Nutzung von Google Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung
              unserer Online-Angebote. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen zu
              Google Fonts finden Sie in der Datenschutzerklärung von Google.
            </p>

            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-2">Kein Tracking / Keine Analyse-Tools</h3>
            <p>
              Wir setzen auf dieser Website keine Analyse- oder Tracking-Tools ein (kein Google Analytics,
              kein Meta Pixel o.ä.). Es werden keine Nutzungsprofile erstellt.
            </p>
          </section>

          {/* 9. Rechte der Betroffenen */}
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">9. Ihre Rechte</h2>
            <p>
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO)</li>
              <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
              <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
              <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
              <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
              <li><strong>Recht auf Widerruf</strong> einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
              <li><strong>Beschwerderecht bei einer Aufsichtsbehörde</strong> (Art. 77 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Die zuständige Aufsichtsbehörde ist:
            </p>
            <p className="mt-2 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
              Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
              Alt-Moabit 59-61<br />
              10555 Berlin
            </p>
          </section>

          {/* 10. SSL-Verschlüsselung */}
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">10. SSL-/TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
              eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>
          </section>

          {/* 11. Aktualität */}
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">11. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand [Datum wird ergänzt].
            </p>
            <p className="mt-3">
              Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher
              bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
