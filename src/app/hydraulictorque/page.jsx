import HydraulicTorque from '@/components/HydraulicTorque/HydraulicTorque';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <MobileNavbar/>
      <WhatsappLogo/>
        <HydraulicTorque/>
        <Footer/>
    </div>
  )
}
export default page;