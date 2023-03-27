import classes from "./Servicios.module.css";
import SERVICIOS_LIST from "./SERVICIOS_LIST";

const ServiciosSection = () => {
  return (
    <div className="whitebg">
      <section className={classes.servicios + " container"}>
        <div data-aos="fade-right">
          <h2>Servicios</h2>
          <p className={classes.subtitulo}>
            Te ofrecemos todo tipo de soluciones digitales
          </p>
        </div>
        <div className={classes["servicios-cuerpo"]} data-aos="fade-up">
          {SERVICIOS_LIST.map((e) => (
            <div key={e.id} className={classes.card}>
              <img src={e.imgUrl} alt={e.title} />
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiciosSection;
