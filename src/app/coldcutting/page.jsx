
import ColdCutting from '@/components/Services_main_dir/Cold_Cutting/Cold_Cutting';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
      <ColdCutting/>
        <Footer/>
    </div>
  )
}

export default page;
