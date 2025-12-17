import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;

  /** Optional */
  keywords?: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  noIndex?: boolean;

  /** Schema options */
  schemaType?: "MedicalOrganization" | "Article";
  publishedAt?: string;
  updatedAt?: string;
}

const SITE_NAME = "Veramed Health Solutions";
const DEFAULT_URL = "https://veramedhealthsolutions.com";
const DEFAULT_IMAGE = "https://veramedhealthsolutions.com/og-image.jpg";
const LOGO = "https://veramedhealthsolutions.com/logo.png";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  noIndex = false,
  schemaType = "MedicalOrganization",
  publishedAt,
  updatedAt,
}: SEOProps) => {
  const pageUrl = canonical || DEFAULT_URL;

  // ----------------- Structured Data -----------------
  const schema =
    schemaType === "Article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          image: ogImage,
          author: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: {
              "@type": "ImageObject",
              url: LOGO,
            },
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: {
              "@type": "ImageObject",
              url: LOGO,
            },
          },
          mainEntityOfPage: pageUrl,
          datePublished: publishedAt,
          dateModified: updatedAt || publishedAt,
        }
      : {
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          name: SITE_NAME,
          url: DEFAULT_URL,
          logo: LOGO,
          description,
          sameAs: [
            "https://www.facebook.com/veramedhealthsolutions",
            "https://www.linkedin.com/company/veramed-health-solutions",
            "https://twitter.com/veramedhealthsolutions",
          ],
        };

  return (
    <Helmet>
      {/* =================== BASIC SEO =================== */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SITE_NAME} />

      {/* =================== ROBOTS =================== */}
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      {/* =================== CANONICAL =================== */}
      <link rel="canonical" href={pageUrl} />

      {/* =================== OPEN GRAPH =================== */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* =================== TWITTER =================== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* =================== STRUCTURED DATA =================== */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEO;
