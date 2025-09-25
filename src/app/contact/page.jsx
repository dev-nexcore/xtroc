import ChatBoat from "@/components/ChatBoat/ChatBoat";
import ContactPage from "@/components/contact/contact";
import MobileContactPage from "@/components/contact/MobileContact";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import Footer from "@/layout/footer";
import MobileNavbar from "@/layout/mobileNavbar";
import Navbar from "@/layout/Navbar";

export const metadata = {
  title: "Contact Us | XTORC Industrial Bolting Tools Supplier",
  description:
    "Get in touch with XTORC, your trusted supplier of hydraulic torque wrenches, flange facing machines, bolt tensioners, and industrial bolting tools. Contact us for enquiries, quotes, and support.",
  keywords: [
    "Contact XTORC",
    "Hydraulic torque wrench supplier India",
    "Industrial bolting tools contact",
    "Flange facing machine enquiries",
    "Bolt tensioners supplier India",
    "Pipe cutting machine supplier contact",
    "Industrial tools customer support",
    "XTORC India contact info",
    "Get a quote for industrial bolting tools",
    "On-site service requests"
  ],
  openGraph: {
    title: "Contact XTORC | Industrial Bolting Tools Supplier",
    description:
      "Reach out to XTORC for hydraulic torque wrenches, flange facing machines, bolt tensioners, and industrial bolting tools. Get quotes and support.",
    url: "https://xtorcind.com/contact",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact XTORC | Industrial Bolting Tools Supplier",
    description:
      "Contact XTORC for hydraulic torque wrenches, flange facing machines, bolt tensioners, and industrial bolting tools in India.",
  },
};

export default function Page() {
  return (
    <>
      
      <MobileNavbar />
      <ContactPage />
      <WhatsappLogo />
      <ChatBoat />
      <Footer />
    </>
  );
}
