import classes from "./CursoHero.module.css";

const CursoHero = () => {
  return (
    <section className={`${classes.section} container`}>
      <img src="img/curso/pack.png" alt="Curso Photoshop 0 a 100" />
      <div>
        <h2>Adobe Photoshop de 0 a 100</h2>
        <p>
          Domina este poderoso software de edición de la mano de Sergio del
          canal de{" "}
          <a target="_blank" href="https://youtube.com/@pixel40">
            YouTube Pixel40
          </a>
          . A través de Videos Bajo Demanda podrás manejar tus tiempos y
          aprender a manipular imágenes desde un nivel principiante a avanzado.
        </p>
        <button>Precio y Forma de Pago</button>
        <p>El curso incluye:</p>
        <ul>
          <li>9:25 horas de videos bajo demanda.</li>
          <li>
            3 módulos<strong>(*)</strong> de 28 capítulos.
          </li>
          <li>Material descargable.</li>
          <li>Atención personalizada.</li>
          <li>Acceso de por vida.</li>
        </ul>
        <p>
          <strong>(*)</strong> Puedes adquirir los módulos por separado o el
          curso completo.
        </p>
        <hr />
        <p>
          No necesitas conocimiento previo, solo debes estar familiarizado con
          el uso del ordenador. La venta del curso ayuda a seguir brindando
          contenido gratuito en mi canal de Youtube.
        </p>
      </div>
    </section>
  );
};

export default CursoHero;
