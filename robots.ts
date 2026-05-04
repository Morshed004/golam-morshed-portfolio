import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/admin", "/admin/*"],
      },
    ],
    sitemap: "https://golam-morshed-portfolio.vercel.app/sitemap.xml",
  };
}