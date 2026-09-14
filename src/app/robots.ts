export default function robots() {
  const base = process.env.AUTH_URL ?? "https://mauromaio.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/auth"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
