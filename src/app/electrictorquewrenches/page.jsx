import ElectricTorqueWrenches from '@/components/ElectricTorqueWrenches/ElectricTorqueWrenches';
import LinedBox from '@/components/ElectricTorqueWrenches/LinedBox';
import Footer from '@/layout/footer';
import React from 'react'

const page = () => {
  return (
    <div>
        <ElectricTorqueWrenches/>
        <LinedBox/>
        <Footer/>
    </div>
  )
}
export default page;