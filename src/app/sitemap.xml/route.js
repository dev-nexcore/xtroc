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
    "pipe-Cutting",
    "bevellingmachine",
    "flangefacing",
    "squaredrive",
    "topsidebolt",
    "multistagebolt",
    "subseabolt",
    "xep700",
    "xap700",
    "xep1500",
    "xap1500",
    "hydraulicjack",
    "handPumps",
    "FlangeSpreaders",
    "hydralicnut",
    "socket",
    "reducer"

  ];
  const serviceCategories=[
    "Bolt-Torquing-Tensioning",
    "Cold-Cutting-Beveling",
    "Flange-Facing-Machining",
    "Hot-Tapping-Line-Stopple",
    "Calibration",
    "Water-jet-Cutting"
  ]

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
