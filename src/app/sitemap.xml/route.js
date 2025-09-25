const BASE_URL = "https://xtorcind.com";

export async function GET() {
  // Static pages
  const staticPages = [
    "home",
    "about",
    "products",
    "contact",
    "services",
    "industry",
    "joinus",
    "downloads",
    
  ];

  // Product categories (add more if new products are introduced)
  const productCategories = [
    "hydraulic-torque-wrenches",
    "bolt-tensioners",
    "cold-cutting-machines",
    "pipe-beveling",
    "hydraulic-power-packs",
    "flange-spreaders",
    
  ];

  // Combine all URLs
  const allPages = [
    ...staticPages.map((page) => `${BASE_URL}/${page}`),
    ...productCategories.map((slug) => `${BASE_URL}/products/${slug}`),
  ];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
