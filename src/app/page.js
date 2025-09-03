// import Home from '@/components/Home/Home.jsx';
import ContactUs from '@/components/Home/ContactUs';
import Home from '@/components/Home/Home';
import Industries from '@/components/Home/Industries';
import OurProducts from '@/components/Home/OurProducts';
import Footer from '@/layout/footer';
import Navbar from '@/layout/Navbar';
import React from 'react'
import MobileNavbar from '@/layout/mobileNavbar';

const page = () => {
  return (
    <div>
      <div className="hidden md:block">
    <Navbar />
  </div>
        <div className="md:hidden">
    <MobileNavbar />
  </div>
        <Home/>
        <OurProducts/>
        <Industries/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default page;

