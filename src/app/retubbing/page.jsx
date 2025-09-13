
import ReTubbing from '@/components/Services_main_dir/Re_Tubbing/Re_Tubbing';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
      <ReTubbing/>
        <Footer/>
    </div>
  )
}

export default page;
