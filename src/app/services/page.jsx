import ChatBoat from '@/components/ChatBoat/ChatBoat';
import OurServices from '@/components/Services/OurServices';
import Services from '@/components/Services/Services';
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
        <Services/>
        <OurServices/>
        <WhatsappLogo/>
        <ChatBoat/>
        <Footer/>
    </div>
  )
}

export default page;
