import { Car, Paintbrush, Wrench, Cog, Settings, ClipboardCheck, type LucideIcon } from 'lucide-react';

export interface ServiceData {
  title: string;
  description: string;
  icon: LucideIcon;
  note?: string;
  detailDescription?: string;
  benefits?: string[];
}

export interface ServiceCategory {
  title: string;
  categoryKey: 'karosserie' | 'autoservice';
  services: ServiceData[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Karosserie & Lack',
    categoryKey: 'karosserie',
    services: [
      {
        title: 'Unfallinstandsetzung',
        description: 'Fachgerechte Reparatur nach Herstellervorgaben – von der Begutachtung bis zur Fertigstellung.',
        icon: Car,
        detailDescription: 'Nach einem Unfall übernehmen wir die komplette Instandsetzung Ihres Fahrzeugs. Von der ersten Begutachtung über die Karosserie- und Lackierarbeiten bis zur finalen Qualitätskontrolle – alles aus einer Hand, nach Herstellervorgaben.',
        benefits: [
          'Komplette Abwicklung von Begutachtung bis Fertigstellung',
          'Reparatur nach Herstellervorgaben und aktuellen Standards',
          'Transparente Kommunikation über jeden Arbeitsschritt',
        ],
      },
      {
        title: 'Karosseriearbeiten',
        description: 'Professionelle Karosseriearbeiten aller Art – präzise und termingerecht.',
        icon: Settings,
        detailDescription: 'Ob Beulen, Verformungen oder strukturelle Schäden – wir bringen Ihre Karosserie wieder in Form. Mit modernem Werkzeug und Erfahrung arbeiten wir präzise und termingerecht.',
        benefits: [
          'Präzise Arbeiten mit modernem Werkzeug',
          'Termingerechte Umsetzung',
          'Fachgerechte Bearbeitung aller Karosserieschäden',
        ],
      },
      {
        title: 'Lackierung',
        description: 'Hochwertige Lackierungen mit Glasurit-Lacksystemen – Teil- und Komplettlackierung.',
        icon: Paintbrush,
        detailDescription: 'Wir lackieren Ihr Fahrzeug mit hochwertigen Glasurit-Lacksystemen – ob Teillackierung, Spotrepair oder Komplettlackierung. Farbton und Qualität stimmen, das Ergebnis überzeugt.',
        benefits: [
          'Glasurit-Lacksysteme für langlebige Ergebnisse',
          'Teil-, Spot- und Komplettlackierungen',
          'Exakte Farbtonanpassung mit modernster Technik',
        ],
      },
      {
        title: 'Oldtimer',
        description: 'Lack- und Aufbereitungsarbeiten für klassische Fahrzeuge.',
        icon: Cog,
        note: 'Auf Anfrage',
        detailDescription: 'Für klassische Fahrzeuge bieten wir Lack- und Aufbereitungsarbeiten nach individueller Absprache an. Sprechen Sie uns an – wir prüfen gemeinsam, was möglich ist.',
        benefits: [
          'Individuelle Beratung für jedes Projekt',
          'Sorgfältige Arbeitsweise für klassische Fahrzeuge',
          'Flexible Abstimmung nach Ihren Wünschen',
        ],
      },
    ],
  },
  {
    title: 'Autoservice',
    categoryKey: 'autoservice',
    services: [
      {
        title: 'Inspektion & Service',
        description: 'Regelmäßige Wartung und Inspektion für alle Marken – zuverlässig und transparent.',
        icon: ClipboardCheck,
        detailDescription: 'Regelmäßige Wartung hält Ihr Fahrzeug sicher und wertbeständig. Wir führen Inspektionen und Servicearbeiten für alle Marken durch – transparent, zuverlässig und ohne unnötige Extras.',
        benefits: [
          'Inspektionen für alle Marken',
          'Transparente Kommunikation über notwendige Arbeiten',
          'Zuverlässige Wartung ohne unnötige Extras',
        ],
      },
      {
        title: 'Mechanik & Reparaturen',
        description: 'Mechanische Reparaturen aller Art – schnelle Diagnose, saubere Umsetzung.',
        icon: Wrench,
        detailDescription: 'Von der Diagnose bis zur fertigen Reparatur – wir kümmern uns um mechanische Anliegen aller Art. Schnelle Fehlersuche, saubere Umsetzung, klare Absprache.',
        benefits: [
          'Schnelle und gründliche Fehlerdiagnose',
          'Saubere Umsetzung der Reparatur',
          'Klare Kommunikation über Umfang und Kosten',
        ],
      },
    ],
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const dienstleistungenFAQ: FAQItem[] = [
  {
    question: 'Ist die Terminanfrage eine verbindliche Buchung?',
    answer: 'Nein. Es handelt sich um eine unverbindliche Anfrage. Wir melden uns bei Ihnen mit einem passenden Terminvorschlag.',
  },
  {
    question: 'Wie schnell bekomme ich eine Rückmeldung?',
    answer: 'In der Regel melden wir uns innerhalb eines Werktages per Telefon oder E-Mail bei Ihnen.',
  },
  {
    question: 'Was soll ich bei meiner Anfrage angeben?',
    answer: 'Name, Kontaktdaten und eine kurze Beschreibung Ihres Anliegens reichen aus. Wenn vorhanden, gerne auch Kennzeichen und Wunschzeitraum.',
  },
  {
    question: 'Repariert ihr alle Automarken?',
    answer: 'Ja – sowohl im Bereich Karosserie & Lack als auch im Autoservice arbeiten wir markenunabhängig.',
  },
  {
    question: 'Worin unterscheidet sich Autoservice von Karosserie & Lack?',
    answer: 'Autoservice umfasst Inspektion, Mechanik und Wartung. Karosserie & Lack betrifft Unfallschäden, Karosseriearbeiten und Lackierungen. Bei der Terminanfrage wählen Sie einfach den passenden Bereich.',
  },
  {
    question: 'Bietet ihr auch Oldtimer-Arbeiten an?',
    answer: 'Ja, auf Anfrage. Sprechen Sie uns an – wir prüfen gemeinsam, welche Arbeiten möglich sind.',
  },
];
