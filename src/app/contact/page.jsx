import ContactPage from "@/components/contact/contact";
import MobileContactPage from "@/components/contact/MobileContact";
import Footer from "@/layout/footer";
import Navbar from "@/layout/Navbar";

export default function Page() {
  return (
    <>

 <Navbar/>
     <div className="hidden md:block">
              <ContactPage />
            </div>
            <div className="md:hidden">
              <MobileContactPage />
            </div>

   
    <Footer/>
    
    </>
  )
}  


