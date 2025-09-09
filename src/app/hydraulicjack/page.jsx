import HydraulicJack from '@/components/HydraulicJack/HydraulicJack';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <MobileNavbar/>
      <WhatsappLogo/>
      <HydraulicJack/>
        <Footer/>
    </div>
  )
}

export default page;
