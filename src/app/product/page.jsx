import ChatBoat from '@/components/ChatBoat/ChatBoat';
import Innovations from '@/components/Products/OurInnovation';
import Product from '@/components/Products/Product';
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
        <Product/>
        <Innovations/>
        <WhatsappLogo/>
        <ChatBoat/>
        <Footer/>
    </div>
  )
}
export default page;
