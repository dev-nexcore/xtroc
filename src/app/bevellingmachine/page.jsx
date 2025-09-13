import BevellingMachine from '@/components/BevellingMachine/BevellingMachine';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <MobileNavbar/>
        <BevellingMachine/>
        <Footer/>
        </div>
  )
}
export default page;
