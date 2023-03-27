import Link from "next/link";
import { useRouter } from "next/router";
import VideosDownload from "../../VideosDownload";
import classes from "./VideosHeader.module.css";

const VideosHeader = () => {
  const router = useRouter();
  let fileData = {
    desc: "Material anterior al 9/6/2022, buscalo por fecha de subida del video.Formato de nombre AÑO-MES-DIA.",
    img: "img/videos/galeria.jpg",
    url: "https://www.dropbox.com/sh/cszt0dplpfhtqo0/AADvoSobfjIzMVFwCP1SWFg0a?dl=0",
    type: "default",
  };
  const file = Object.keys(router.query)[0];

  if (file) {
    if (file.slice(-3) === "jpg") {
      fileData = {
        desc: "Puedes presionar el boton derecho sobre la imagen y seleccionar Guardar imagen como...",
        img: "img/dl/" + Object.keys(router.query)[0],
        url: undefined,
        type: file.slice(-3),
      };
    } else if (file.slice(-3) === "zip") {
      fileData = {
        desc: "Descarga el material presionando en el enlace disponible más abajo.",
        img: "img/file.png",
        url: "img/dl/" + Object.keys(router.query)[0],
        type: file.slice(-3),
      };
    }
  }

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
      <VideosDownload
        img={fileData.img}
        url={fileData.url}
        desc={fileData.desc}
        type={fileData.type}
      />
    </section>
  );
};

export default VideosHeader;
