import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://xtorcind.com/"),
 title: {
    default: "XTORC",
    template: "%s | XTORC"
  },
  description: "XTORC provides premium hydraulic torque wrenches, flange facing machines, pipe cutting machines, bolt tensioners, and industrial bolting tools trusted in oil, gas, marine, petrochemical, power plant, and construction industries.",
  keywords: [
    // 🔹 Primary Keywords
    "Hydraulic Torque Wrench",
    "Flange Facing Machine",
    "Pipe Cutting Machine",
    "Bolt Tensioners",
    "Industrial Bolting Tools",
    "Controlled Bolting Equipment",
    "Hydraulic Torque Tools",
    "Flange Facing Equipment",

    // 🔹 Long-Tail Keywords
    "Best hydraulic torque wrench for industrial use",
    "Portable flange facing machine for on-site machining",
    "Pipe cutting machine for heavy-duty applications",
    "Bolt tensioners for high-pressure pipelines",
    "Industrial bolting tools supplier in India",
    "Flange facing equipment for oil & gas industry",
    "Hydraulic torque tools for flange assembly",
    "Flange facing machine rental services",

    // 🔹 Service-Oriented Keywords
    "Flange facing services near me",
    "Hydraulic torque wrench calibration services",
    "On-site bolting services for industrial plants",
    "Pipe cutting and beveling services",
    "Flange facing machine rental in India",
    "Hydraulic torque wrench repair services",

    // 🔹 Industry-Specific Keywords
    "Oil and Gas bolting tools",
    "Petrochemical flange facing equipment",
    "Power plant pipe cutting machines",
    "Marine industry bolting tools",
    "Industrial bolting tools for construction",
    "Flange facing machines for pharmaceutical plants",
  ],
  openGraph: {
    title: "XTORC | Hydraulic Torque Wrenches & Industrial Bolting Tools",
    description:
      "Explore high-quality hydraulic torque wrenches, flange facing machines, bolt tensioners, and pipe cutting machines at XTORC. Serving oil & gas, petrochemical, marine, power plant, and construction industries.",
    url: "https://xtorcind.com/",
    siteName: "XTORC",
    images: [
      {
        url: "/og-image.jpg", // 👈 put this image in /public
        width: 1200,
        height: 630,
        alt: "XTORC Hydraulic Torque Tools and Industrial Bolting Equipment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XTORC | Hydraulic Torque Wrenches & Industrial Bolting Tools",
    description:
      "Buy hydraulic torque wrenches, flange facing machines, bolt tensioners, and pipe cutting machines from XTORC. Trusted supplier for industrial projects in India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://xtorcind.com/",
  },
    icons: {
    icon: [ 
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-clip">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-clip`}
     >
      <Navbar/>
        {children}
     
      </body>
    </html>
  );
}
