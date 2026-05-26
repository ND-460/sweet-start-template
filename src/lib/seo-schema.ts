/**
 * SEO Schema Configuration and Generator for AgentVista
 * Generates JSON-LD structured data for search engines
 */

// Configuration constants
export const BASE_URL = "https://agentsvista.com";
const ORG_NAME = "AgentVista";
const ORG_DESCRIPTION = "AI-powered survey, feedback collection, and sentiment intelligence platform with native Salesforce integration";
const ORG_EMAIL = "info@agentsvista.com";
const ORG_PHONE = "+1-800-XXXXX";  // Update with actual phone number
const LOGO_URL = "https://agentsvista.com/logo.svg";

// Social media links - update with actual profiles
const SOCIAL_LINKS = [
  "https://www.linkedin.com/company/agentsvista",
  "https://twitter.com/agentsvista",
  "https://www.facebook.com/agentsvista",
];

// TypeScript Types
interface ImageObject {
  "@type": "ImageObject";
  url: string;
  "@id"?: string;
  width?: number;
  height?: number;
  caption?: string;
}

interface ListItem {
  "@type": "ListItem";
  "@id"?: string;
  position: number;
  name: string;
  item?: string;
}

interface BreadcrumbList {
  "@type": "BreadcrumbList";
  "@id": string;
  itemListElement: ListItem[];
}

interface Organization {
  "@type": "Organization";
  "@id": string;
  name: string;
  description: string;
  url: string;
  email: string;
  telephone: string;
  logo: ImageObject;
  image?: ImageObject | { "@id": string };
  sameAs: string[];
}

interface WebPage {
  "@type": "WebPage";
  "@id": string;
  url: string;
  name: string;
  description: string;
  inLanguage: string;
  isPartOf: { "@id": string };
  breadcrumb: { "@id": string };
  datePublished: string;
  dateModified: string;
}

interface WebSite {
  "@type": "WebSite";
  "@id": string;
  url: string;
  name: string;
  description: string;
  inLanguage: string;
  publisher: { "@id": string };
}

interface SEOSchemaGraph {
  "@context": string;
  "@graph": (BreadcrumbList | Organization | WebPage | WebSite)[];
}

// Helper function to get current ISO timestamp
const getCurrentTimestamp = (): string => {
  return new Date().toISOString();
};

/**
 * Generate the complete SEO schema with optional page-specific overrides
 */
export function generateSEOSchema(overrides?: {
  pageUrl?: string;
  pageName?: string;
  pageDescription?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{ name: string; item?: string }>;
}): SEOSchemaGraph {
  const pageUrl = overrides?.pageUrl || BASE_URL;
  const currentDate = getCurrentTimestamp();

  const breadcrumbList: BreadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${BASE_URL}/#breadcrumblist`,
    itemListElement: overrides?.breadcrumbs
      ? overrides.breadcrumbs.map((item, index) => ({
          "@type": "ListItem" as const,
          "@id": `${BASE_URL}#listItem-${index}`,
          position: index + 1,
          name: item.name,
          ...(item.item && { item: item.item }),
        }))
      : [
          {
            "@type": "ListItem",
            "@id": `${BASE_URL}#listItem`,
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
        ],
  };

  const organization: Organization = {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: ORG_NAME,
    description: ORG_DESCRIPTION,
    url: BASE_URL,
    email: ORG_EMAIL,
    telephone: ORG_PHONE,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      "@id": `${BASE_URL}/#organizationLogo`,
      width: 400,
      height: 100,
      caption: ORG_NAME,
    },
    image: {
      "@id": `${BASE_URL}/#organizationLogo`,
    },
    sameAs: SOCIAL_LINKS,
  };

  const webPage: WebPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name:
      overrides?.pageName ||
      "AgentVista – AI-Powered Surveys, Forms & Feedback Platform",
    description:
      overrides?.pageDescription ||
      "Create intelligent surveys, collect feedback, and analyze sentiment with AI-powered insights. Native Salesforce integration for seamless CRM workflows.",
    inLanguage: "en-US",
    isPartOf: {
      "@id": `${BASE_URL}/#website`,
    },
    breadcrumb: {
      "@id": `${BASE_URL}/#breadcrumblist`,
    },
    datePublished: overrides?.datePublished || currentDate,
    dateModified: overrides?.dateModified || currentDate,
  };

  const webSite: WebSite = {
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: ORG_NAME,
    description: ORG_DESCRIPTION,
    inLanguage: "en-US",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [breadcrumbList, organization, webPage, webSite],
  };
}

/**
 * Convert schema object to JSON string
 */
export function getSchemaAsJSON(overrides?: Parameters<typeof generateSEOSchema>[0]): string {
  const schema = generateSEOSchema(overrides);
  return JSON.stringify(schema);
}

export type { SEOSchemaGraph, Organization, WebPage, WebSite, BreadcrumbList };
