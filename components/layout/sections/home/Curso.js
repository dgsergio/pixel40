import classes from "./Curso.module.css";
import CapituloUno from "@/components/CapituloUno";
import { ModalContext } from "@/store/modal-context";
import { useContext } from "react";

const CursoSection = () => {
  const {modal, openHandler} = useContext(ModalContext);
  return (
    <section className={classes.curso}>
      <div className={classes.wrapper + " container"}>
        <img data-aos="fade-right"
          src="img/curso/pack.png"
          alt="Curso Photoshop de 0 a 100"
        />
        <div className={classes["curso-desc"]} data-aos="fade-up">
          <h2>Curso Photoshop de 0 a 100</h2>
          <p>
            Aprende a realizar tus propios trabajos con el curso online <em>Photoshop de 0 a 100</em>. Domina en forma gradual el arte del diseño digital. La metodología de estudio será de forma clara y sencilla.
          </p>
          <p>
            No necesitas ningún conocimiento previo, con nuestros <em>Videos Bajo Demanda</em> cualquier persona, sin importar edad, puede comenzar a diseñar en Photoshop sin complicaciones innecesarias ¿Qué estás esperando?
          </p>
          <div className={classes.button}>
          <button onClick={()=>openHandler('CAP1')}>Reproducir el capítulo 1</button>
          {modal === 'CAP1' && <CapituloUno txtBtn='¡ Más información !' linkBtn='/curso'/>}
          </div>
        </div>
        <div className={classes["curso-items"]} data-aos="zoom-in-left">
          <h4>El Curso</h4>
          <ul>
            <li>9:25 horas de video bajo demanda.</li>
            <li>3 módulos de 28 capítulos.</li>
            <li>Material descargable.</li>
            <li>Atención personalizada.</li>
            <li>Acceso de por vida.</li>
          </ul>
        </div>
        <div className={classes["curso-items"]} data-aos="zoom-in-left" data-aos-offset="200">
          <h4>Requisitos</h4>
          <ul>
            <li>Tener Adobe Photoshop, software no incluido en el curso.</li>
            <li>Disponer de una cuenta en YouTube.</li>
            <li>Estar familiarizado con el uso del ordenador.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CursoSection;
