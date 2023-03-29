import FormasDePago from "@/components/layout/sections/FormasDePago";
import Footer from "@/components/layout/Footer";
import DonarHero from "@/components/layout/sections/donar/DonarHero";
import DonarMetodos from "@/components/layout/sections/donar/DonarMetodos";
import Navigation from "@/components/layout/Navigation";
import Head from "next/head";

const Donar = () => {
  return (
    <>
      <Head>
        <title>Pixel40 - Donaciones</title>
      </Head>
      <Navigation />
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
