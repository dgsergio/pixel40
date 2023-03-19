import classes from "./CursoCapitulo.module.css";

const CursoCapitulo = () => {
  return (
    <section className={`${classes.section} container`}>
      <div className={classes.body}>
        <div className={classes.info}>
          <h3>Capítulo 1 Gratis</h3>
          <p>
            Aprovecha esta oportunidad de obtener el primer capítulo{" "}
            <strong>GRATIS</strong> del curso Photoshop de 0 a 100. El mismo
            incluye lo siguiente:
          </p>
          <ul>
            <li>Clase de 26 minutos.</li>
            <li>Breve introducción al curso.</li>
            <li>Presentación de las herramientas.</li>
            <li>Espacio de trabajo y configuración.</li>
            <li>Guardar un proyecto.</li>
            <li>Configuración de ajustes de color.</li>
            <li>Suscripción a novedades.</li>
          </ul>
        </div>
        <div className={classes.infoFooter}>
          <img src="img/curso/cap1p.jpg" alt="Capítulo 1 en video" />
          <button>Reproducir el capítulo 1</button>
        </div>
      </div>
      <hr />

      <div className={classes.footer}>
        <p>
          La venta del curso ayuda a seguir brindando contenido gratuito en mi
          canal de Youtube. Si quieres adquirir el curso estás solo a un clic de
          distancia...
        </p>
        <button>¡ Quiero el Curso !</button>
      </div>
    </section>
  );
};

export default CursoCapitulo;
