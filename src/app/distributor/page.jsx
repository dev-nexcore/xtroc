import ChatBoat from '@/components/ChatBoat/ChatBoat';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import Navbar from '@/layout/Navbar';
import React from 'react'
import DistributorPage from '@/components/Distributor/Distributor';

export const metadata = {
  title: "Distributor Network | XTORC Industrial Bolting Tools",
  description:
    "Explore XTORC's distributor network for hydraulic torque wrenches, flange facing machines, bolt tensioners, and industrial bolting tools. Become a distributor or find authorized suppliers across India.",
  keywords: [
    "XTORC distributors",
    "Industrial bolting tools distributors India",
    "Hydraulic torque wrench distributor",
    "Flange facing machine supplier",
    "Bolt tensioners distributor",
    "Pipe cutting machine supplier",
    "Industrial tools partnership",
    "Become XTORC distributor",
    "Authorized XTORC suppliers",
    "XTORC distribution network"
  ],
  openGraph: {
    title: "XTORC Distributor Network | Industrial Bolting Tools",
    description:
      "Connect with XTORC's authorized distributors for hydraulic torque wrenches, flange facing machines, bolt tensioners, and industrial bolting tools in India.",
    url: "https://xtorcind.com/distributors",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XTORC Distributor Network | Industrial Bolting Tools",
    description:
      "Find XTORC authorized distributors for hydraulic torque wrenches, flange facing machines, bolt tensioners, and industrial bolting tools across India.",
  },
};

const page = () => {
  return (
    <div>
    
      <MobileNavbar/>
       <DistributorPage/>
        <WhatsappLogo/>
        <ChatBoat/>
        <Footer/>
    </div>
  )
}

export default page;
