import NavHeader from "../components/layout/NavBar";
import FormasDePago from "@/components/layout/sections/FormasDePago";
import Footer from "@/components/layout/Footer";
import CursoHero from "@/components/layout/sections/curso/CursoHero";
import CursoModulos from "@/components/layout/sections/curso/CursoModulos";
import CursoDetails from "@/components/layout/sections/curso/CursoDetails";
import CursoCapitulo from "@/components/layout/sections/curso/CursoCapitulo";

const CursoPage = () => {
  return (
    <>
      <NavHeader />
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
