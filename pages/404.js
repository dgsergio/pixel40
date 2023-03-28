import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import Link from "next/link";

const FourOhFour = () => {
  return (
    <>
      <Navigation />
      <main className="whitebg">
        <div className="container not-found">
          <h3>No encontramos la página</h3>
          <p>
            Pongase en <Link href={"/contacto"}>contacto</Link> con nosotros o
            vuelva al <Link href={"/"}>Inicio</Link>{" "}
          </p>
        </div>
        <div className="error-404">404</div>
      </main>
      <Footer />
    </>
  );
};

export default FourOhFour;
