import classes from "./DonarHero.module.css";

const DonarHero = () => {
  return (
    <section className={`${classes.section} container`}>
      <h2 className={classes.title}>Donaciones</h2>
      <div className={classes.container}>
        <div className={classes.info}>
          <p>
            Si has llegado hasta aquí es porque entiendes el esfuerzo que hay
            detrás de la generación de contenido gratuito. Muchas son las horas
            de edición, grabación y dedicación para enocontrar la manera más
            directa y simple de transmitirte mi conocimiento.
          </p>
          <p>
            Adicionalmente, ciertos gastos (como microfonos, cámaras, hosting y
            más) son necesarios costear para entregarte el contenido de calidad
            que mereces. Es por esto, que
            <strong>el canal se mantiene gracias a tus donaciones</strong>.
          </p>
          <p>
            Si te gustaría ayudarme a mantener el canal vivo aquí
            <strong>tienes cuatro formas de hacerlo:</strong>
          </p>
        </div>
        <div className={classes.image}>
          <img src="img/donando.jpg" />
        </div>
      </div>
    </section>
  );
};

export default DonarHero;
