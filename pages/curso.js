import FormasDePago from "@/components/layout/sections/FormasDePago";
import Footer from "@/components/layout/Footer";
import CursoHero from "@/components/layout/sections/curso/CursoHero";
import CursoModulos from "@/components/layout/sections/curso/CursoModulos";
import CursoDetails from "@/components/layout/sections/curso/CursoDetails";
import CursoCapitulo from "@/components/layout/sections/curso/CursoCapitulo";
import Navigation from "@/components/layout/Navigation";
import Head from "next/head";

const CursoPage = () => {
  return (
    <>
      <Head>
        <title>Pixel40 - Curso Photoshop de 0 a 100</title>
      </Head>
      <Navigation />
      <main className="whitebg">
        <CursoHero />
        <CursoModulos />
        <CursoDetails />
        <CursoCapitulo />
        <FormasDePago />
      </main>
      <Footer />
    </>
  );
};

export default CursoPage;
