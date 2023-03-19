import NavHeader from "../components/layout/NavBar";
import FormasDePago from "@/components/layout/sections/FormasDePago";
import Footer from "@/components/layout/Footer";
import DonarHero from "@/components/layout/sections/donar/DonarHero";
import DonarMetodos from "@/components/layout/sections/donar/DonarMetodos";

const Donar = () => {
  return (
    <>
    <NavHeader />
    <main className="whitebg">
      <DonarHero />
      <DonarMetodos />
      <FormasDePago />
    </main>
    <Footer />
    </>
  );
};

export default Donar;
