import ChatBoat from '@/components/ChatBoat/ChatBoat';
import DownloadSection from '@/components/Download/Download';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import Navbar from '@/layout/Navbar';


export default function Page() {
  return (
    <>  
    <Navbar/> 
    <MobileNavbar/>   
    <DownloadSection/>
    <WhatsappLogo/>
    <ChatBoat/>
    <Footer/>   
    </>
  )
}