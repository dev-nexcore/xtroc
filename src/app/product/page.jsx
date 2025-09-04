import Innovations from '@/components/Products/OurInnovation';
import Product from '@/components/Products/Product';
import Footer from '@/layout/footer';
import Navbar from '@/layout/Navbar';
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
        <Product/>
        <Innovations/>
        <Footer/>
    </div>
  )
}
export default page;
