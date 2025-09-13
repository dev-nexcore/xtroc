import SquareDrive from '@/components/SquareDrive/SquareDrive';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'
const page = () => {
  return (
    <div>
      <MobileNavbar/>
        <SquareDrive/>
        <Footer/>
    </div>
  )
}
export default page;