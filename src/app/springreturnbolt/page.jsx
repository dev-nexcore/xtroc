import SpringReturnBolt from '@/components/SpringReturnBolt/SpringReturnBolt';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <MobileNavbar/>
        <SpringReturnBolt/>
        <Footer/>
    </div>
  )
}
export default page;
