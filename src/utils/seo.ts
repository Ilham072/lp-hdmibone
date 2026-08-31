import { siteConfig } from "@/config/site";

export function buildTitle(title?: string) {
  return title ? `${title} | HDMI Kabupaten Bone` : "HDMI Kabupaten Bone | Himpunan Dai Muda Indonesia";
}

export function buildCanonical(pathname = "/") {
  const normalizedPath = pathname === "/" ? "/" : pathname.endsWith("/") ? pathname : `${pathname}/`;
  return new URL(normalizedPath, siteConfig.domain).toString();
}

export function buildAbsoluteUrl(path = "/") {
  return new URL(path, siteConfig.domain).toString();
}

export function buildPublisherSchema() {
  return {
    "@type": "Organization",
    name: siteConfig.name,
    logo: {
      "@type": "ImageObject",
      url: buildAbsoluteUrl(siteConfig.logo)
    }
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.domain,
    logo: buildAbsoluteUrl(siteConfig.logo),
    email: siteConfig.email,
    sameAs: [siteConfig.instagramUrl]
  };
}
