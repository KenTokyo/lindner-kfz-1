import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileCheck, LockKeyhole, Mail, MapPinned, Server, UserRoundCheck } from 'lucide-react';
import { setPageSeo, webPageSchema } from '../utils/seo';

const sections = [
  {
    id: 'verantwortlicher',
    title: '1. Verantwortlicher',
    icon: UserRoundCheck,
  },
  {
    id: 'hosting',
    title: '2. Website-Aufruf und Server-Logfiles',
    icon: Server,
  },
  {
    id: 'kontakt',
    title: '3. Kontakt, Termin- und Bewerbungsanfragen',
    icon: Mail,
  },
  {
    id: 'maps',
    title: '4. Google Maps',
    icon: MapPinned,
  },
  {
    id: 'schriftarten',
    title: '5. Schriftarten und Tracking',
    icon: FileCheck,
  },
  {
    id: 'rechte',
    title: '6. Ihre Rechte',
    icon: UserRoundCheck,
  },
  {
    id: 'sicherheit',
    title: '7. Sicherheit und Aktualitaet',
    icon: LockKeyhole,
  },
];

export const DatenschutzPage: React.FC = () => {
  useEffect(() => {
    const title = 'Datenschutz | KFZ Lindner Berlin';
    const description =
      'Datenschutzhinweise der Kfz-Werkstatt Lindner und der Autoservice Lindner GmbH fuer Website, Formulare, Bewerbungen und Google Maps.';

    setPageSeo({
      title,
      description,
      path: '/datenschutz',
      structuredData: webPageSchema('/datenschutz', title, description),
    });
  }, []);

  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Datenschutz
            </p>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-neutral-950 md:text-6xl">
              Datenschutzerkl&auml;rung
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Informationen zur Verarbeitung personenbezogener Daten auf dieser Website und bei
              Kontaktaufnahme mit Kfz-Werkstatt Lindner oder Autoservice Lindner GmbH.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-relaxed text-neutral-600">
            <p className="font-semibold text-neutral-950">Stand: 28. Mai 2026</p>
            <p className="mt-2">
              Google Maps wird auf dieser Website erst nach aktiver Zustimmung geladen. Vor dem
              Klick findet keine Kartenanfrage an Google statt.
            </p>
          </div>
        </motion.header>

        <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:border-neutral-300 hover:bg-neutral-50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-950 text-white">
                  <Icon size={19} />
                </span>
                <span className="text-sm font-semibold text-neutral-800 group-hover:text-neutral-950">
                  {item.title}
                </span>
              </motion.a>
            );
          })}
        </div>

        <div className="space-y-10 text-sm leading-relaxed text-neutral-600">
          <section id="verantwortlicher" className="rounded-2xl border border-neutral-200 bg-neutral-950 p-7 text-white md:p-8">
            <h2 className="text-2xl font-semibold">1. Verantwortlicher</h2>
            <p className="mt-5 text-white/70">
              Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) sind die jeweiligen
              Betriebe am Standort, soweit ihre Leistungen oder Anfragen betroffen sind:
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">Kfz-Werkstatt Lindner</p>
                <p className="mt-3 text-white/70">
                  Detlef Lindner
                  <br />
                  Hauptstr. 43
                  <br />
                  13159 Berlin
                  <br />
                  Deutschland
                  <br />
                  Telefon:{' '}
                  <a href="tel:+49309131252" className="underline decoration-white/30 underline-offset-4">
                    +49 30 913 12 52
                  </a>
                  <br />
                  E-Mail:{' '}
                  <a href="mailto:info@kfz-lindner.de" className="underline decoration-white/30 underline-offset-4">
                    info@kfz-lindner.de
                  </a>
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white">Autoservice Lindner GmbH</p>
                <p className="mt-3 text-white/70">
                  Geschaeftsfuehrerin: Katrin Lindner
                  <br />
                  Hauptstr. 43-45
                  <br />
                  13159 Berlin
                  <br />
                  Telefon:{' '}
                  <a href="tel:+49309131252" className="underline decoration-white/30 underline-offset-4">
                    +49 30 913 12 52
                  </a>
                  <br />
                  E-Mail:{' '}
                  <a href="mailto:info@kfz-lindner.de" className="underline decoration-white/30 underline-offset-4">
                    info@kfz-lindner.de
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section id="hosting" className="rounded-2xl border border-neutral-200 bg-white p-7 md:p-8">
            <h2 className="text-2xl font-semibold text-neutral-950">2. Website-Aufruf und Server-Logfiles</h2>
            <p className="mt-5">
              Beim Aufruf dieser Website verarbeitet der eingesetzte Webserver technisch notwendige
              Zugriffsdaten, damit die Seite ausgeliefert, stabil betrieben und gegen Missbrauch
              abgesichert werden kann. Dazu koennen insbesondere IP-Adresse, Datum und Uhrzeit des
              Abrufs, angeforderte URL, Referrer-URL, Browsertyp, Betriebssystem und uebertragene
              Datenmenge gehoeren.
            </p>
            <p className="mt-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im
              sicheren und fehlerfreien Betrieb der Website. Logfiles werden nur so lange gespeichert,
              wie dies fuer Sicherheit, Fehleranalyse und technische Nachvollziehbarkeit erforderlich ist.
            </p>
            <p className="mt-4">
              Fuer Betrieb, Hosting und E-Mail-Zustellung koennen technische Dienstleister als
              Auftragsverarbeiter eingesetzt werden. Mit diesen Dienstleistern werden, soweit
              erforderlich, Vereinbarungen nach Art. 28 DSGVO geschlossen.
            </p>
          </section>

          <section id="kontakt" className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7 md:p-8">
            <h2 className="text-2xl font-semibold text-neutral-950">3. Kontakt, Termin- und Bewerbungsanfragen</h2>
            <p className="mt-5">
              Wenn Sie uns per Formular, E-Mail oder Telefon kontaktieren, verarbeiten wir die von
              Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage. Je nach Formular koennen dazu
              Name, E-Mail-Adresse, Telefonnummer, Nachricht, gewaehlter Leistungsbereich,
              Fahrzeug- oder Termindaten sowie bei Bewerbungen Angaben zur gewuenschten Position
              gehoeren.
            </p>
            <p className="mt-4">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Verarbeitung zur
              Durchfuehrung vorvertraglicher Massnahmen oder zur Vertragsabwicklung erfolgt. Im
              Uebrigen verarbeiten wir Anfragen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, weil
              wir ein berechtigtes Interesse an der Beantwortung von Kontaktanfragen haben.
            </p>
            <p className="mt-4">
              Bewerbungsdaten verarbeiten wir zur Durchfuehrung des Bewerbungsverfahrens auf
              Grundlage von Art. 6 Abs. 1 lit. b DSGVO in Verbindung mit Paragraf 26 BDSG. Nach
              Abschluss des Bewerbungsverfahrens loeschen wir Bewerbungsdaten regelmaessig
              spaetestens nach sechs Monaten, sofern keine gesetzlichen Pflichten oder berechtigten
              Interessen eine laengere Speicherung erfordern.
            </p>
          </section>

          <section id="maps" className="rounded-2xl border border-neutral-200 bg-white p-7 md:p-8">
            <h2 className="text-2xl font-semibold text-neutral-950">4. Google Maps</h2>
            <p className="mt-5">
              Diese Website bindet Google Maps ueber eine Zwei-Klick-Loesung ein. Die Karte wird
              erst geladen, wenn Sie auf den Button zum Laden von Google Maps klicken. Erst dann
              wird eine Verbindung zu Google aufgebaut.
            </p>
            <p className="mt-4">
              Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              Im Rahmen der Nutzung koennen insbesondere IP-Adresse, Browser- und Geraetedaten,
              Referrer-URL sowie, falls Sie bei Google angemeldet sind, weitere Kontodaten
              verarbeitet werden. Eine Uebermittlung an Google LLC in den USA kann nicht
              ausgeschlossen werden.
            </p>
            <p className="mt-4">
              Rechtsgrundlage fuer das Laden der Karte ist Ihre Einwilligung nach Art. 6 Abs. 1
              lit. a DSGVO sowie, soweit Cookies oder vergleichbare Technologien eingesetzt
              werden, Paragraf 25 Abs. 1 TDDDG. Sie koennen die Seite nutzen, ohne Google Maps zu
              aktivieren. Alternativ koennen Sie den Standort direkt in Google Maps oeffnen.
            </p>
            <p className="mt-4">
              Weitere Informationen finden Sie in der Datenschutzerklaerung von Google:{' '}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-950 underline underline-offset-4"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </section>

          <section id="schriftarten" className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7 md:p-8">
            <h2 className="text-2xl font-semibold text-neutral-950">5. Schriftarten, Cookies und Tracking</h2>
            <p className="mt-5">
              Die Website verwendet keine extern nachgeladenen Google Fonts. Schriftarten werden
              lokal beziehungsweise ueber Systemschriften des Endgeraets dargestellt.
            </p>
            <p className="mt-4">
              Es werden keine Analyse- oder Marketing-Tools wie Google Analytics oder Meta Pixel
              eingesetzt. Die Website setzt ohne Ihre aktive Entscheidung keine nicht notwendigen
              Tracking-Cookies. Wenn Google Maps aktiviert wird, gelten die Hinweise im Abschnitt
              Google Maps.
            </p>
          </section>

          <section id="rechte" className="rounded-2xl border border-neutral-200 bg-white p-7 md:p-8">
            <h2 className="text-2xl font-semibold text-neutral-950">6. Ihre Rechte</h2>
            <p className="mt-5">
              Sie haben nach Massgabe der gesetzlichen Voraussetzungen folgende Rechte: Auskunft
              nach Art. 15 DSGVO, Berichtigung nach Art. 16 DSGVO, Loeschung nach Art. 17 DSGVO,
              Einschraenkung der Verarbeitung nach Art. 18 DSGVO, Datenuebertragbarkeit nach Art.
              20 DSGVO, Widerspruch nach Art. 21 DSGVO sowie Widerruf einer erteilten Einwilligung
              nach Art. 7 Abs. 3 DSGVO.
            </p>
            <p className="mt-4">
              Ausserdem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehoerde. Fuer
              Berlin ist dies die Berliner Beauftragte fuer Datenschutz und Informationsfreiheit,
              Alt-Moabit 59-61, 10555 Berlin.
            </p>
          </section>

          <section id="sicherheit" className="rounded-2xl border border-neutral-200 bg-neutral-950 p-7 text-white md:p-8">
            <h2 className="text-2xl font-semibold">7. Sicherheit und Aktualitaet</h2>
            <p className="mt-5 text-white/70">
              Diese Website nutzt eine SSL-/TLS-Verschluesselung, sofern sie ueber HTTPS
              ausgeliefert wird. Eine verschluesselte Verbindung erkennen Sie am Schloss-Symbol
              Ihres Browsers.
            </p>
            <p className="mt-4 text-white/70">
              Wir passen diese Datenschutzerklaerung an, wenn technische, organisatorische oder
              rechtliche Aenderungen dies erforderlich machen. Massgeblich ist die jeweils
              aktuelle Fassung auf dieser Website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
