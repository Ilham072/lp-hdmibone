import { siteConfig } from "@/config/site";

export function buildTitle(title?: string) {
  return title ? `${title} | HDMI Kabupaten Bone` : "HDMI Kabupaten Bone | Himpunan Dai Muda Indonesia";
}

export function buildCanonical(pathname = "/") {
  return new URL(pathname, siteConfig.domain).toString();
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.domain,
    logo: new URL(siteConfig.logo, siteConfig.domain).toString(),
    email: siteConfig.email,
    sameAs: [siteConfig.instagramUrl]
  };
}
