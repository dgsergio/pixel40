// 1. Make it works

import classes from './Contacto.module.css';

const Contacto = () => {
  return (
    <div className={classes.header}>
    <section className={classes.contacto}>
      <div className={`${classes.margen} container`}>
        <h2>Contacto</h2>
        <form className={classes["formulario-principal"]}>
          <fieldset>
            <legend>
              Dejanos tu mensaje a continuación o al correo:
              <br />
              estudiopixel40@gmail.com
            </legend>
            <div className={classes.campos}>
              <input type="text" placeholder="Nombre*" id="nombre" />
              <input type="text" placeholder="País*" id="pais" />
              <input type="text" placeholder="Email*" id="email" />
              <textarea placeholder="Mensaje*" id="mensaje"></textarea>
            </div>
            <div className={`${classes['mensaje-alerta']} ${classes.ocultar}`}></div>
            <button type="submit" value="Enviar" className={classes.enviar}>
              Enviar
            </button>
          </fieldset>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Contacto;
