import ManualTorque from '@/components/ManualTorque/ManualTorque';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
    <ManualTorque/>
        <Footer/>
    </div>
  )
}

export default page;
