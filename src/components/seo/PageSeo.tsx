import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface PageSeoProps {
  title: string;
  description: string;
  path?: string;
  breadcrumbs?: BreadcrumbItem[];
  noIndex?: boolean;
  image?: string;
}

export const PageSeo = ({
  title,
  description,
  path,
  breadcrumbs,
  noIndex = false,
  image = "/og-logo.png",
}: PageSeoProps) => {
  const location = useLocation();
  const baseDomain = "https://agentsvista.com";

  // Determine the final canonical URL for metadata
  const currentPath = path || location.pathname;
  const cleanedPath = currentPath !== "/" && currentPath.endsWith("/") ? currentPath.slice(0, -1) : currentPath;
  const pageUrl = `${baseDomain}${cleanedPath}`;
  const fullTitle = `${title} | AgentVista`;

  // Construct JSON-LD breadcrumb structured data if breadcrumbs are passed
  let breadcrumbSchema = null;
  if (breadcrumbs && breadcrumbs.length > 0) {
    const itemListElement = breadcrumbs.map((crumb, index) => {
      const crumbPath = crumb.path.startsWith("/") ? crumb.path : `/${crumb.path}`;
      const absoluteUrl = `${baseDomain}${crumbPath === "/" ? "" : crumbPath}`;
      return {
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": absoluteUrl,
      };
    });

    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement,
    };
  }

  return (
    <Helmet>
      {/* Title & Meta Description */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Page-Specific Robots Indexing Override */}
      {noIndex && <meta name="robots" content="noindex" />}

      {/* Breadcrumb List Structured Data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default PageSeo;
