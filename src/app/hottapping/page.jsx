
import HotTaping from '@/components/Services_main_dir/Hot_Tapping/Hot_Tapping';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
     <HotTaping/>
        <Footer/>
    </div>
  )
}

export default page;
