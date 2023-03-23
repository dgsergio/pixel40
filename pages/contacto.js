import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import Contacto from "@/components/layout/sections/contacto/Contacto";

const ContactPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <Contacto />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
