
import FlangeFacingMachine from '@/components/FlangeFacing/FlangeFacing';
import PipeCutting from '@/components/PipeCutting/PipeCutting';
import FlangeFacing from '@/components/Services_main_dir/Flange_Facing/Flange_Facing';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
   <FlangeFacing/>
        <Footer/>
    </div>
  )
}

export default page;
