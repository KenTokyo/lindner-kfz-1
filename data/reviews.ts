export interface Review {
  quote: string;
  name: string;
  source: string;
}

export const reviews: Review[] = [
  {
    quote: 'Sehr professionelle Arbeit – mein Auto sieht wieder aus wie neu. Schnelle Terminvergabe und freundliche Kommunikation.',
    name: 'M. Schmidt',
    source: 'Google',
  },
  {
    quote: 'Familienbetrieb mit Herz und Verstand. Klare Absprachen, faire Preise, top Ergebnis bei der Lackierung.',
    name: 'S. Weber',
    source: 'Google',
  },
  {
    quote: 'Nach dem Unfall alles unkompliziert abgewickelt. Von der Annahme bis zur Abholung – alles bestens.',
    name: 'T. Krüger',
    source: 'Google',
  },
  {
    quote: 'Inspektion und Service schnell und zuverlässig erledigt. Komme gerne wieder.',
    name: 'A. Richter',
    source: 'Google',
  },
];
