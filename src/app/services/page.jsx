import ChatBoat from "@/components/ChatBoat/ChatBoat";
import Services from "@/components/Services/Services";
import OurServices from "@/components/Services/OurServiceMobile";
import OurServicessMobile from "@/components/Services/OurServices";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import Footer from "@/layout/footer";
import MobileNavbar from "@/layout/mobileNavbar";
import Navbar from "@/layout/Navbar";

export default function Page() {
  return (
    <>
 <Navbar/>
<MobileNavbar/>
 <Services/>
     <div className="hidden md:block">
          
            <OurServicessMobile/>
            </div>
            <div className="md:hidden">
              <OurServices/>
            </div>
           
         
<WhatsappLogo/>
         <ChatBoat/>
        <Footer/>
   
  
    
    </>
  )
}  



