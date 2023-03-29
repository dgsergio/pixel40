import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import Contacto from "@/components/layout/sections/contacto/Contacto";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Pixel40 - Contacto</title>
      </Head>
      <Navigation />
      <main>
        <Contacto />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
