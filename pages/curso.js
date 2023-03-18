import Footer from "@/components/layout/Footer";
import NavHeader from "../components/layout/NavBar";
import CursoHero from "@/components/layout/sections/curso/CursoHero";
import CursoModulos from "@/components/layout/sections/curso/CursoModulos";
import CursoDetails from "@/components/layout/sections/curso/CursoDetails";

const CursoPage = () => {
  return (
    <>
      <NavHeader />
      <main className='whitebg'>
        <CursoHero />
        <CursoModulos />
        <CursoDetails />
      </main>
      <Footer />
    </>
  );
};

export default CursoPage;
