// import Home from '@/components/Home/Home.jsx';
import ContactUs from '@/components/Home/ContactUs';
import Home from '@/components/Home/Home';
import Industries from '@/components/Home/Industries';
import OurProducts from '@/components/Home/OurProducts';
import Footer from '@/layout/footer';
import React from 'react'

const page = () => {
  return (
    <div>
        <Home/>
        <OurProducts/>
        <Industries/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default page;

