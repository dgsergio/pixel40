import Link from "next/link";
import classes from "./Videos.module.css";

const VideosSection = () => {
  return (
    <section className={classes["videos"]} data-aos="slide-right" data-aos-duration='1000'>
      <div className="container">
        <Link className={classes.link} href="/videos">
          <img src="img/youtube.jpg" alt="Imagen YouTube" />
          <h2>Videos tutoriales</h2>
        </Link>
        <p>
          Lecciones de Adobe Photoshop completamente gratis en mi canal de YouTube. En @Pixel40 subo más de 1 video por semana y ya creamos más de ¡500 videos!
        </p>
      </div>
    </section>
  );
};

export default VideosSection;
