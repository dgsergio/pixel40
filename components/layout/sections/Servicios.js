import classes from "./Servicios.module.css";
import SERVICIOS_LIST from "./SERVICIOS_LIST";

// Hacer un array con los servicios
const ServiciosSection = () => {
  return (
    <section className={classes.servicios + " container"}>
      <h2>Servicios</h2>
      <p className={classes.subtitulo}>
        Te ofrecemos todo tipo de soluciones digitales
      </p>
      <div className={classes["servicios-cuerpo"]}>
        {SERVICIOS_LIST.map((e) => (
          <div key={e.id} className={classes.card}>
            <img src={e.imgUrl} alt={e.title} />
            <h3>{e.title}</h3>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiciosSection;
