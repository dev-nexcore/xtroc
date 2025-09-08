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

const page = () => {
  return (
    <div>
      <Navbar/>
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
