import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CursoSection from "../components/layout/sections/home/Curso";
import ClasesSection from "../components/layout/sections/home/Clases";
import VideosSection from "../components/layout/sections/home/Videos";
import ServiciosSection from "../components/layout/sections/home/Servicios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Pixel40 - Reviews y Tutoriales</title>
      </Head>
      <Header />
      <main className="whitebg">
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
