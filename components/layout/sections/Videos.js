import classes from "./Videos.module.css";

const VideosSection = () => {
  return (
    <section className={classes["videos"]}>
      <div className="container">
        <a href="#">
          <img
            src="img/youtube.jpg"
            alt="Imagen YouTube"
          />
          <h2>Video tutoriales</h2>
        </a>
        <p>
          Lecciones de Adobe Photoshop completamente gratis. En mi canal de
          YouTube llamado Pixel40 subo más de 1 video por semana y acabo de
          superar los ¡500 videos!
        </p>
      </div>
    </section>
  );
};

export default VideosSection;
