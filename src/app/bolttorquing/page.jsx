import BoltTorquing from '@/components/Services_main_dir/Bolt_Torquing/Bolt_Torquing';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
      <BoltTorquing/>
        <Footer/>
    </div>
  )
}

export default page;
