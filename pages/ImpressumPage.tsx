import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Building2, FileText, Mail, MapPin, Phone } from 'lucide-react';
import { GoogleMapConsent } from '../components/shared/GoogleMapConsent';
import { setPageSeo, webPageSchema } from '../utils/seo';

const contactItems = [
  { label: 'Adresse', value: 'Hauptstr. 43-45, 13159 Berlin', icon: MapPin },
  { label: 'Telefon', value: '+49 30 913 12 52', icon: Phone },
  { label: 'E-Mail', value: 'info@kfz-lindner.de', icon: Mail },
  { label: 'Register', value: 'HRB 130211 B, Amtsgericht Berlin (Charlottenburg)', icon: FileText },
];

export const ImpressumPage: React.FC = () => {
  useEffect(() => {
    const title = 'Impressum | KFZ Lindner und Autoservice Lindner Berlin';
    const description =
      'Impressum der Kfz-Werkstatt Lindner und der Autoservice Lindner GmbH in Berlin-Blankenfelde mit Angaben nach Paragraf 5 DDG.';

    setPageSeo({
      title,
      description,
      path: '/impressum',
      structuredData: webPageSchema('/impressum', title, description),
    });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Rechtliches
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-neutral-950 md:text-6xl">
              Impressum
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Angaben gemäß Paragraf 5 DDG für den Internetauftritt von Kfz-Werkstatt
              Lindner und Autoservice Lindner GmbH in Berlin-Blankenfelde.
            </p>
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-neutral-200 bg-white p-6 text-sm leading-relaxed text-neutral-600 shadow-sm">
            <p className="font-semibold text-neutral-950">Hinweis</p>
            <p className="mt-2">
              Die EU-Plattform zur Online-Streitbeilegung wurde zum 20. Juli 2025 eingestellt.
              Deshalb wird hier kein veralteter OS-Link mehr geführt.
            </p>
          </div>
        </motion.header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="h-full rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <Icon className="mb-6 h-5 w-5 text-neutral-950" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-900">{item.value}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 space-y-6">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-200 bg-white p-7 text-neutral-600 shadow-sm md:p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 text-neutral-950">
                <Building2 size={21} />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">Anbieter</p>
                <h2 className="text-2xl font-semibold text-neutral-950">Betriebe am Standort</h2>
              </div>
            </div>

            <div className="grid gap-8 text-sm leading-relaxed md:grid-cols-2">
              <dl className="space-y-5">
                <div>
                  <dt className="text-neutral-400">Kfz-Werkstatt Lindner</dt>
                  <dd className="mt-1 font-medium text-neutral-900">
                    Detlef Lindner
                    <br />
                    Hauptstr. 43
                    <br />
                    13159 Berlin
                    <br />
                    Deutschland
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">Kontakt</dt>
                  <dd className="mt-1 font-medium text-neutral-900">
                    Telefon:{' '}
                    <a href="tel:+49309131252" className="underline underline-offset-4 hover:text-neutral-600">
                      +49 30 913 12 52
                    </a>
                    <br />
                    E-Mail:{' '}
                    <a href="mailto:info@kfz-lindner.de" className="underline underline-offset-4 hover:text-neutral-600">
                      info@kfz-lindner.de
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">Steuerangaben</dt>
                  <dd className="mt-1 font-medium text-neutral-900">
                    Steuernummer: 35/422/62538
                    <br />
                    USt-IdNr.: DE 137047275
                  </dd>
                </div>
              </dl>

              <dl className="space-y-5">
                <div>
                  <dt className="text-neutral-400">Autoservice Lindner GmbH</dt>
                  <dd className="mt-1 font-medium text-neutral-900">
                    Hauptstr. 43-45
                    <br />
                    13159 Berlin
                    <br />
                    Deutschland
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">Vertreten durch</dt>
                  <dd className="mt-1 font-medium text-neutral-900">Geschäftsführerin Katrin Lindner</dd>
                </div>
                <div>
                  <dt className="text-neutral-400">Registereintrag</dt>
                  <dd className="mt-1 font-medium text-neutral-900">
                    Handelsregister: HRB 130211 B
                    <br />
                    Registergericht: Amtsgericht Berlin (Charlottenburg)
                  </dd>
                </div>
                <div>
                  <dt className="text-neutral-400">Steuerangaben</dt>
                  <dd className="mt-1 font-medium text-neutral-900">
                    Steuernummer: 37/235/21624
                    <br />
                    USt-IdNr.: DE 815240659
                  </dd>
                </div>
              </dl>
            </div>
          </motion.section>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm md:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-neutral-950" />
                <h2 className="text-xl font-semibold text-neutral-950">Handwerkliche Angaben</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-neutral-600">
                <p>
                  Zuständige Kammer: Handwerkskammer Berlin, Blücherstr. 68, 10961 Berlin.
                </p>
                <p>
                  Die ausgeübten Leistungen betreffen insbesondere Fahrzeugservice, Reparatur,
                  Lackierung, Karosseriebau, Unfallinstandsetzung und verwandte Kfz-Leistungen.
                  Berufsrechtliche Grundlage ist insbesondere die Handwerksordnung, abrufbar unter{' '}
                  <a
                    href="https://www.gesetze-im-internet.de/hwo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-neutral-950 underline underline-offset-4"
                  >
                    gesetze-im-internet.de/hwo
                  </a>
                  .
                </p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm md:p-8"
            >
              <h2 className="text-xl font-semibold text-neutral-950">Redaktionell verantwortlich</h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                Verantwortlich für journalistisch-redaktionelle Inhalte im Sinne von Paragraf 18
                Abs. 2 MStV: Katrin Lindner, Anschrift wie oben.
              </p>
            </motion.section>
          </div>
        </div>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-7 text-sm leading-relaxed text-neutral-600 shadow-sm md:p-8">
              <h2 className="text-xl font-semibold text-neutral-950">Verbraucherstreitbeilegung</h2>
              <p className="mt-3">
                Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-7 text-sm leading-relaxed text-neutral-600 shadow-sm md:p-8">
              <h2 className="text-xl font-semibold text-neutral-950">Haftung für Inhalte</h2>
              <p className="mt-3">
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Verpflichtungen zur Entfernung oder Sperrung
                der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt.
                Eine diesbezügliche Haftung ist erst ab Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese
                Inhalte umgehend.
              </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-7 text-sm leading-relaxed text-neutral-600 shadow-sm md:p-8">
              <h2 className="text-xl font-semibold text-neutral-950">Haftung für Links</h2>
              <p className="mt-3">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber verantwortlich.
              </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-7 text-sm leading-relaxed text-neutral-600 shadow-sm md:p-8">
              <h2 className="text-xl font-semibold text-neutral-950">Urheberrecht</h2>
              <p className="mt-3">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
                bedürfen der schriftlichen Zustimmung des jeweiligen Rechteinhabers.
              </p>
          </div>
        </section>

        <section className="mt-6">
          <GoogleMapConsent variant="light" className="min-h-[440px] rounded-2xl shadow-sm" />
        </section>
      </div>
    </div>
  );
};
