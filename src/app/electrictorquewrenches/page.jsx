import ElectricTorqueWrenches from '@/components/ElectricTorqueWrenches/ElectricTorqueWrenches';
import LinedBox from '@/components/ElectricTorqueWrenches/LinedBox';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
        <ElectricTorqueWrenches/>
        <LinedBox/>
        <Footer/>
    </div>
  )
}
export default page;