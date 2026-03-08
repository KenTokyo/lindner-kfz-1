import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const ImpressumPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Impressum | KFZ Lindner Berlin';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Impressum von KFZ Lindner und Autoservice Lindner in Berlin-Blankenfelde. Angaben gemäß § 5 TMG.');
  }, []);

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Impressum</h1>
          <p className="text-neutral-500 mb-12">Angaben gemäß § 5 TMG</p>
        </motion.div>

        {/* Zwei Firmierungen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* KFZ Lindner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100"
          >
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">KFZ Lindner</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Karosserie- und Lackierbetrieb
            </p>
            <div className="space-y-3 text-neutral-600">
              <p>
                <span className="font-semibold text-neutral-700">Inhaberin:</span><br />
                [Name der Inhaberin]
              </p>
              <p>
                <span className="font-semibold text-neutral-700">Anschrift:</span><br />
                Hauptstraße 43<br />
                13159 Berlin-Blankenfelde
              </p>
              <p>
                <span className="font-semibold text-neutral-700">Telefon:</span><br />
                030 / 913 12 52
              </p>
              <p>
                <span className="font-semibold text-neutral-700">E-Mail:</span><br />
                <a href="mailto:info@autoservice-lindner.de" className="underline hover:text-neutral-900 transition-colors">
                  info@autoservice-lindner.de
                </a>
              </p>
              <p>
                <span className="font-semibold text-neutral-700">Handwerkskammer:</span><br />
                [Handwerkskammer Berlin – wird ergänzt]
              </p>
              <p>
                <span className="font-semibold text-neutral-700">Berufsbezeichnung:</span><br />
                Karosserie- und Fahrzeugbaumechaniker-Meister/in
              </p>
              <p>
                <span className="font-semibold text-neutral-700">USt-IdNr.:</span><br />
                [wird ergänzt]
              </p>
            </div>
          </motion.div>

          {/* Autoservice Lindner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100"
          >
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Autoservice Lindner</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Mechanik, Service & Inspektion
            </p>
            <div className="space-y-3 text-neutral-600">
              <p>
                <span className="font-semibold text-neutral-700">Inhaberin:</span><br />
                [Name der Inhaberin]
              </p>
              <p>
                <span className="font-semibold text-neutral-700">Anschrift:</span><br />
                Hauptstraße 43<br />
                13159 Berlin-Blankenfelde
              </p>
              <p>
                <span className="font-semibold text-neutral-700">Telefon:</span><br />
                030 / 913 12 53
              </p>
              <p>
                <span className="font-semibold text-neutral-700">E-Mail:</span><br />
                <a href="mailto:info@autoservice-lindner.de" className="underline hover:text-neutral-900 transition-colors">
                  info@autoservice-lindner.de
                </a>
              </p>
              <p>
                <span className="font-semibold text-neutral-700">Handwerkskammer:</span><br />
                [Handwerkskammer Berlin – wird ergänzt]
              </p>
              <p>
                <span className="font-semibold text-neutral-700">USt-IdNr.:</span><br />
                [wird ergänzt]
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hinweis "unter einem Dach" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-neutral-900 text-white rounded-2xl mb-16"
        >
          <p className="text-sm leading-relaxed">
            <strong>Hinweis:</strong> KFZ Lindner (Karosserie & Lack) und Autoservice Lindner (Mechanik, Service & Inspektion)
            sind zwei eigenständige Betriebe unter einem Dach am Standort Hauptstraße 43, 13159 Berlin-Blankenfelde.
          </p>
        </motion.div>

        {/* Streitschlichtung */}
        <div className="space-y-10 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-900 transition-colors"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-3">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="mt-3">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-3">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
              auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>

        {/* Platzhalter-Hinweis */}
        <div className="mt-16 p-6 bg-amber-50 rounded-2xl border border-amber-200">
          <p className="text-sm text-amber-700">
            <strong>Intern:</strong> Die mit [eckigen Klammern] markierten Angaben müssen vor dem Go-Live
            durch die korrekten rechtlichen Informationen ersetzt werden (Inhabername, Handwerkskammer-Nr., USt-IdNr. etc.).
          </p>
        </div>
      </div>
    </div>
  );
};
