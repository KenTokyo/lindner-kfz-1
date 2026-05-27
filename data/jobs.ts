export interface Job {
  id: string;
  title: string;
  type: 'vollzeit' | 'ausbildung' | 'initiativ';
  description: string;
  tasks: string[];
  requirements: string[];
  image?: string;
}

export const jobs: Job[] = [
  {
    id: 'karosseriebauer',
    title: 'Karosseriebauer (m/w/d)',
    type: 'vollzeit',
    description: 'Zur Verstärkung unseres Teams suchen wir eine/n gelernte/n Karosseriebauer.',
    tasks: [
      'Unfallinstandsetzung aller Art',
      'Reparatur von Anhängern und Fahrzeugaufbauten',
      'Richtbankarbeiten',
      'Aluminium- und Kunststoffinstandsetzung',
    ],
    requirements: [
      'Abgeschlossene Berufsausbildung',
      'Selbstständiges Arbeiten',
      'Führerschein Klasse B',
      'Teamfähigkeit',
    ],
    image: '/Lindner-Bilder/karriere-karosseriebauer.jpg',
  },
  {
    id: 'mechatroniker',
    title: 'Kfz-Mechatroniker (m/w/d)',
    type: 'vollzeit',
    description: 'Wir suchen Verstärkung im Autoservice für Diagnose, Wartung und Reparatur an Fahrzeugen freier Marken.',
    tasks: [
      'Wartung und Inspektion nach Herstellervorgaben',
      'Fehlerdiagnose mit modernen Diagnosegeräten',
      'Reparaturen an Mechanik, Elektrik und Fahrzeugsystemen',
      'Servicearbeiten an Fahrzeugen verschiedener Marken',
    ],
    requirements: [
      'Abgeschlossene Ausbildung als Kfz-Mechatroniker',
      'Sicherer Umgang mit Diagnose- und Werkstatttechnik',
      'Selbstständige, sorgfältige Arbeitsweise',
      'Führerschein Klasse B und Teamfähigkeit',
    ],
    image: '/Lindner-Bilder/karriere-mechatroniker.png',
  },
  {
    id: 'fahrzeuglackierer',
    title: 'Fahrzeuglackierer (m/w/d)',
    type: 'vollzeit',
    description: 'Wir suchen einen Experten für perfekte Oberflächen.',
    tasks: [
      'Innen- und Außenlackierung',
      'Vorbereitung (Reinigen, Spachteln, Schleifen)',
      'Spritzlackierungen',
      'Qualitätskontrolle',
    ],
    requirements: [
      'Abgeschlossene Ausbildung als Fahrzeuglackierer',
      'Berufserfahrung wünschenswert',
      'Zuverlässigkeit und Genauigkeit',
    ],
    image: '/Lindner-Bilder/karriere-fahrzeuglackierer.jpg',
  },
  {
    id: 'ausbildung',
    title: 'Ausbildung (Diverse)',
    type: 'ausbildung',
    description: 'Wir bilden aus! Starte deine Karriere bei uns.',
    tasks: [
      'KFZ-Mechatroniker/-in',
      'KFZ-Lackierer/-in',
      'Karosserie- und Fahrzeugbaumechaniker/-in',
    ],
    requirements: [
      'Realschulabschluss oder guter Hauptschulabschluss',
      'Motivation und Lernbereitschaft',
    ],
    image: '/Lindner-Bilder/karriere-ausbildung.jpg',
  },
  {
    id: 'initiativ',
    title: 'Initiativbewerbung',
    type: 'initiativ',
    description: 'Kein passendes Angebot dabei? Bewirb dich initiativ – wir freuen uns auf deine Nachricht.',
    tasks: [],
    requirements: [],
    image: '/Lindner-Bilder/karriere-initiativbewerbung.jpg',
  },
];
