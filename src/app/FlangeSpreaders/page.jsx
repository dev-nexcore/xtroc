import ChatBoat from "@/components/ChatBoat/ChatBoat";
import ContactPage from "@/components/contact/contact";
import MobileContactPage from "@/components/contact/MobileContact";
import FlangeSpreaders from "@/components/FlangeSpreaders/FlangeSpreaders";
import FlangeSpreadersmobile from "@/components/FlangeSpreaders/mobileView";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import Footer from "@/layout/footer";
import Navbar from "@/layout/Navbar";

export default function Page() {
  return (
    <>

 <Navbar/>
     <div className="hidden md:block">
              <FlangeSpreaders />
            </div>
            <div className="md:hidden">
              <FlangeSpreadersmobile />
            </div>
           
         

   
    <Footer/>
    
    </>
  )
}  


