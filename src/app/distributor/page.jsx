import ChatBoat from '@/components/ChatBoat/ChatBoat';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import Navbar from '@/layout/Navbar';
import React from 'react'
import DistributorPage from '@/components/Distributor/Distributor';

const page = () => {
  return (
    <div>
      <Navbar/>
      <MobileNavbar/>
       <DistributorPage/>
        <WhatsappLogo/>
        <ChatBoat/>
        <Footer/>
    </div>
  )
}

export default page;
