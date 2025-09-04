import OurServices from '@/components/Services/OurServices';
import Services from '@/components/Services/Services';
import Footer from '@/layout/footer';
import Navbar from '@/layout/Navbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
        <Services/>
        <OurServices/>
        <Footer/>
    </div>
  )
}

export default page;
