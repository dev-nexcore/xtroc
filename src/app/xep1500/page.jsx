import Socket from '@/components/Sockets/Sockets';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
       <Xep1500/>
        <Footer/>
    </div>
  )
}
export default page;
