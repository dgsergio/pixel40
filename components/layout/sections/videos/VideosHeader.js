import Link from "next/link";
import classes from "./VideosHeader.module.css";

const VideosHeader = () => {
  return (
    <section className={`container ${classes.section}`}>
      <div className={`${classes.card} ${classes.cursoAd}`}>
        <div className={classes.body}>
          <div className={classes.imageAd}>
            <img
              src="img/videos/packmini.png"
              alt="Curso Photoshop de 0 a 100"
            />
          </div>

          <div>
            <h4>Curso Online</h4>
            <p>
              Aprende hoy mismo Photoshop de forma fácil y sencilla. Con nuestra
              exitosa metodología de estudio podrás alcanzar tu meta.
            </p>
          </div>
          
        </div>
        <div className={classes.footer}>
          <p>
            <Link href="/curso">
              <b>¡El Primer Capítulo es GRATIS!</b>
            </Link>
          </p>
        </div>
      </div>
      <div className={`${classes.card} ${classes.descarga}`}>
        <div className={classes.header}>
          <h3>Descarga Media</h3>
        </div>
        <div className={classes.body}>
          <p>
            Material anterior al 9/6/2022, buscalo por fecha de subida del
            video.Formato de nombre AÑO-MES-DIA.
          </p>
          <a
            target="_blank"
            href="https://www.dropbox.com/sh/cszt0dplpfhtqo0/AADvoSobfjIzMVFwCP1SWFg0a?dl=0"
          >
            <img src="img/videos/galeria.jpg" alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.dropbox.com/sh/cszt0dplpfhtqo0/AADvoSobfjIzMVFwCP1SWFg0a?dl=0"
          >
            <button>Descargar</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideosHeader;
