import HydraulicBoltTensioners from '@/components/HydraulicBoltTensioners/HydraulicBoltTensioners';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const  page= () => {
  return (
    <div>
      <MobileNavbar/>
      <WhatsappLogo/>
        <HydraulicBoltTensioners/>
        <Footer/>
    </div>
  )
}
export default page;
