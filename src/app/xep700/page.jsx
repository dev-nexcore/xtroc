import Socket from '@/components/Sockets/Sockets';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Xep700 from '@/components/XEP700/Xep700';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
       <Xep700/>
        <Footer/>
    </div>
  )
}
export default page;
