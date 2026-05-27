export const SITE_URL = 'https://www.kfz-lindner.de';
export const SITE_NAME = 'KFZ Lindner Berlin';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type JsonLd = Record<string, unknown>;

interface PageSeoConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  structuredData?: JsonLd | JsonLd[];
}

interface ListItem {
  name: string;
  description?: string;
  url?: string;
}

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', url);
}

function stripContext(item: JsonLd) {
  const { ['@context']: _context, ...data } = item;
  return data;
}

function setStructuredData(data?: JsonLd | JsonLd[]) {
  document
    .querySelectorAll('script[data-route-schema="true"]')
    .forEach((element) => element.remove());

  if (!data) return;

  const items = Array.isArray(data) ? data : [data];
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.dataset.routeSchema = 'true';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': items.map(stripContext),
  });
  document.head.appendChild(script);
}

export function setPageSeo({ title, description, path, image, type = 'website', structuredData }: PageSeoConfig) {
  const url = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image) : DEFAULT_OG_IMAGE;

  document.title = title;
  upsertMeta('name', 'description', description);
  upsertCanonical(url);

  upsertMeta('property', 'og:type', type);
  upsertMeta('property', 'og:locale', 'de_DE');
  upsertMeta('property', 'og:site_name', SITE_NAME);
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:image', imageUrl);

  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertMeta('name', 'twitter:image', imageUrl);

  setStructuredData(structuredData);
}

export function webPageSchema(path: string, name: string, description: string): JsonLd {
  const url = absoluteUrl(path);

  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'de-DE',
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#auto-repair`,
    },
  };
}

export function itemListSchema(name: string, path: string, items: ListItem[]): JsonLd {
  return {
    '@type': 'ItemList',
    '@id': `${absoluteUrl(path)}#itemlist`,
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: item.name,
        description: item.description,
        url: item.url ? absoluteUrl(item.url) : undefined,
      },
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
