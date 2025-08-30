import Home from '@/components/Home/Home.jsx';
import OurProducts from '@/components/Home/OurProducts';
import Footer from '@/layout/footer';
import React from 'react'

const page = () => {
  return (
    <div>
        <Home/>
        <OurProducts/>
        <Footer/>
    </div>
  )
}

export default page;

