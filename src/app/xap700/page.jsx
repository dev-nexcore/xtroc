import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Xap700 from '@/components/XAP700/Xap700';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
       <Xap700/>
        <Footer/>
    </div>
  )
}
export default page;
