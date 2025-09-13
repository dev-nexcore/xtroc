import SubseaBolt from '@/components/SubseaBolt/SubseaBolt';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <MobileNavbar/>
        <SubseaBolt/>
        <Footer/>
    </div>
  )
}
export default page;