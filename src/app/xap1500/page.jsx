
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Xap1500 from '@/components/XAP1500/Xap1500';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
        <Xap1500/>
        <Footer/>
    </div>
  )
}
export default page;
