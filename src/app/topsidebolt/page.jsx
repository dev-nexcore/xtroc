import TopSideBolt from '@/components/TopSideBolt/TopSideBolt';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <MobileNavbar/>
        <TopSideBolt/>
        <Footer/>
    </div>
  )
}
export default page;
