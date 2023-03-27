import PrecioClases from "@/components/PrecioClases";
import { ModalContext } from "@/store/modal-context";
import { useContext } from "react";
import classes from "./Clases.module.css";

const ClasesSection = () => {
  const { modal, openHandler } = useContext(ModalContext);

  return (
    <div className="whitebg" id="clases">
      <section className={classes.clases + " container"}>
        <div data-aos="fade-up">
          <h2>Clases online</h2>
          <p className={classes["subtitulo"]}>
            Coordina una videollamada con Sergio para tu clase personal
          </p>
        </div>
        <div className={classes["clases-contenido"]}>
          <img
            data-aos="zoom-in-right"
            className={classes["clases-img"]}
            src="img/clases.jpg"
            alt="Imagen de Clases"
          />
          <div
            className={classes["clases-info"]}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <p>
              Las mejores clases online individuales ¡Anímate! No importa si no
              tienes ningún conocimiento de Photoshop o deseas aprender un tema
              específico. Nostros prepararemos la clase para tí.
            </p>
            <p>
              Solo necesitarás micrófono, auriculares y una buena conexión a
              internet. Es recomendable (aunque no obligatorio) que conectes tu
              cámara y tengas instalado Skype.
            </p>
            <p>
              ¡Aprovechar la promoción 4 clases en 30 días obteniendo un super
              descuento!
            </p>
          </div>
          <div className={classes["btn-clases"]}>
            <button onClick={() => openHandler("CLASES")}>
              Precio y forma de pago
            </button>
            {modal === "CLASES" && <PrecioClases />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClasesSection;
