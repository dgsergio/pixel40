import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CursoSection from "../components/layout/sections/home/Curso";
import ClasesSection from "../components/layout/sections/home/Clases";
import VideosSection from "../components/layout/sections/home/Videos";
import ServiciosSection from "../components/layout/sections/home/Servicios";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Pixel40 - Reviews y Tutoriales</title>
      </Head>
      <Header />
      <main>
        <CursoSection />
        <ClasesSection />
        <VideosSection />
        <ServiciosSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
