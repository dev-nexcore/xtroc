import MultiStageBolt from '@/components/MultiStageBolt/MultiStageBolt';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
        <MultiStageBolt/>
        <Footer/>
    </div>
  )
}
export default page;
