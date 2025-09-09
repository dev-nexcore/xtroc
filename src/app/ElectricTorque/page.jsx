
import ElectricTorque from '@/components/ElectricTorque/ElectricTorque';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <MobileNavbar/>
      <WhatsappLogo/>
       <ElectricTorque/>
        <Footer/>
    </div>
  )
}

export default page;
