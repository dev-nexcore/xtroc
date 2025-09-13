import HexDrive from '@/components/HexDrive/HexDrive';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <MobileNavbar/>
        <HexDrive/>
        <Footer/>
    </div>
  )
}
export default page;
