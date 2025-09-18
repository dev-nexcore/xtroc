import IndustryPage from "@/components/industry/industry";
import ImageSection from "@/components/industry/ImageSection";
import Footer from "@/layout/footer";
import Navbar from "@/layout/Navbar";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import ChatBoat from "@/components/ChatBoat/ChatBoat";
import MobileNavbar from "@/layout/mobileNavbar";

export default function Page() {
  return (
    <>
    
   
    <MobileNavbar/>
    <IndustryPage/>
    <ImageSection/>
    <WhatsappLogo/>
    <ChatBoat/>
    <Footer/>
    
    </>
  )
}  