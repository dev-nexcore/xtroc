import AboutSection from '@/components/AboutUs/AboutUs';
import OurValues from '@/components/AboutUs/OurValues';
import ChatBoat from '@/components/ChatBoat/ChatBoat';
// import OurValues from '@/components/AboutUs/OurValues';
import ContactUs from '@/components/Home/ContactUs';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import Navbar from '@/layout/Navbar';
import React from 'react'

export const metadata = {
  title: "About Us | XTORC Industrial Bolting Solutions",
  description:
    "Learn more about XTORC, a trusted provider of hydraulic torque wrenches, flange facing machines, bolt tensioners, and industrial bolting solutions for oil, gas, power, and construction industries.",
  keywords: [
    "About XTORC",
    "Industrial bolting tools company",
    "Hydraulic torque wrench supplier India",
    "Flange facing machine manufacturer",
    "Bolt tensioners supplier",
    "Industrial tools company",
    "On-site bolting solutions",
    "Pipe cutting machine provider",
    "Oil and Gas bolting tools supplier",
    "Power plant bolting equipment"
  ],
  openGraph: {
    title: "About XTORC | Industrial Bolting Experts",
    description:
      "Discover XTORC’s mission, values, and expertise in hydraulic torque tools, bolt tensioners, and flange facing equipment for global industries.",
    url: "https://xtorcind.com/about",
    siteName: "XTORC Industrial Solutions",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      
      <MobileNavbar/>
      <WhatsappLogo/>
      <ChatBoat/>
        <AboutSection/>
        <OurValues/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
export default page;
