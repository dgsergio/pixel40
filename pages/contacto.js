import Footer from "@/components/layout/Footer";
import Contacto from "@/components/layout/sections/contacto/Contacto";
import NavHeader from "../components/layout/NavBar";

const ContactPage = () => {
  return (
    <>
      <NavHeader />
      <main>
        <Contacto />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
