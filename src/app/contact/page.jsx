import ChatBoat from "@/components/ChatBoat/ChatBoat";
import ContactPage from "@/components/contact/contact";
import MobileContactPage from "@/components/contact/MobileContact";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import Footer from "@/layout/footer";
import MobileNavbar from "@/layout/mobileNavbar";
import Navbar from "@/layout/Navbar";

export default function Page() {
  return (
    <>
      
      <MobileNavbar />
      <ContactPage />
      <WhatsappLogo />
      <ChatBoat />
      <Footer />
    </>
  );
}
