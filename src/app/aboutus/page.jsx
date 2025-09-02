import AboutSection from '@/components/AboutUs/AboutUs';
import OurValues from '@/components/AboutUs/OurValues';
// import OurValues from '@/components/AboutUs/OurValues';
import ContactUs from '@/components/Home/ContactUs';
import Footer from '@/layout/footer';
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutSection/>
        <OurValues/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
export default page;
