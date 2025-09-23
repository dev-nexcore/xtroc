// const BASE_URL = "https://xtorcind.com";

// export async function GET() {
//   // Static pages
//   const staticPages = [
//     "",
//     "aboutus",
//     "product",
//     "distributor",
//     "industry",
//     "contact",
//     "Joinus",
//     "download"
//   ];

//   // Product categories
//   const productCategories = [
//     "Insitu-machine",
//     "Pipe-cutting-machine",
//     "ID Bevelling",
//     "Flange Facing machine",
//     "Bolting Tools",
//     "Hydraulic Torque Wrench",
//     "Square Drive",
//     "Hex Drive",
//     "Bolt Tensioners",
//     "Top Side Bolt Tensioners",
//     "Multi Stage Bolt Tensioner",
//     "Subsea Bolt Tensioner",
//     "Hydraulic Torquing Power Packs",
//     "XEP 700",
//     "XEP 1500",
//     "XAP 700",
//     "XAP 1500",
//     "Accessories",
//     "Jacks/Cylinders",
//     "HandPumps",
//     "Flange Spreaders",
//     "Impact Sockets",
//     "Nut Splitters",
//     "Socket",
//     "Reducers"
//   ];

//   // Service categories
//   const serviceCategories = [
//     "Bolt Torquing",
//     "Cold Cutting & Bevelling",
//     "Flange Facing",
//     "Hot Tapping",
//     "Calibration",
//     "Water Jet Cutting"
//   ];

//   // Combine all URLs and encode spaces/special characters
//   const allPages = [
//     ...staticPages.map((page) => `${BASE_URL}/${encodeURIComponent(page)}`),
//     ...productCategories.map((slug) => `${BASE_URL}/products/${encodeURIComponent(slug)}`),
//     ...serviceCategories.map((slug) => `${BASE_URL}/services/${encodeURIComponent(slug)}`)
//   ];

//   // Generate XML sitemap
//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   ${allPages
//     .map(
//       (url) => `
//   <url>
//     <loc>${url}</loc>
//     <lastmod>${new Date().toISOString()}</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>0.8</priority>
//   </url>`
//     )
//     .join("")}
// </urlset>`;

//   return new Response(sitemap, {
//     headers: {
//       "Content-Type": "application/xml",
//     },
//   });
// }
const BASE_URL = "https://xtorcind.com";

export async function GET() {
  const staticPages = ["", "aboutus", "product", "distributor", "industry", "contact", "Joinus", "download"];
  const productCategories = ["Insitu-machine", "Pipe-cutting-machine", "ID Bevelling", "Flange Facing machine", "Bolting Tools", "Hydraulic Torque Wrench", "Square Drive", "Hex Drive", "Bolt Tensioners", "Top Side Bolt Tensioners", "Multi Stage Bolt Tensioner", "Subsea Bolt Tensioner", "Hydraulic Torquing Power Packs", "XEP 700", "XEP 1500", "XAP 700", "XAP 1500", "Accessories", "Jacks/Cylinders", "HandPumps", "Flange Spreaders", "Impact Sockets", "Nut Splitters", "Socket", "Reducers"];
  const serviceCategories = ["Bolt Torquing", "Cold Cutting & Bevelling", "Flange Facing", "Hot Tapping", "Calibration", "Water Jet Cutting"];

  const allPages = [
    ...staticPages.map(page => `${BASE_URL}/${encodeURIComponent(page)}`),
    ...productCategories.map(slug => `${BASE_URL}/products/${encodeURIComponent(slug)}`),
    ...serviceCategories.map(slug => `${BASE_URL}/services/${encodeURIComponent(slug)}`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" }
  });
}
