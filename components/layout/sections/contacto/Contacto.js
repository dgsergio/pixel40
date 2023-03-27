// 1. Make it works

import validate from "@/function/validate";
import { useRef, useState } from "react";
import classes from "./Contacto.module.css";

const Contacto = () => {
  const [errors, setErrors] = useState([])
  const nombre = useRef(),
    pais = useRef(),
    email = useRef(),
    mensaje = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const values = {
      nombre: nombre.current.value,
      pais: pais.current.value,
      email: email.current.value,
      mensaje: mensaje.current.value,
    };
    setErrors(validate(values));
  };

  return (
    <div className={classes.header}>
      <section className={classes.contacto}>
        <div className={`${classes.margen} container`}>
          <h2>Contacto</h2>
          <form
            onSubmit={submitHandler}
            className={classes["formulario-principal"]}
          >
            <fieldset>
              <legend>
                Dejanos tu mensaje a continuación o al correo:
                <br />
                estudiopixel40@gmail.com
              </legend>
              <div className={classes.campos}>
                <input
                  type="text"
                  placeholder="Nombre"
                  id="nombre"
                  name="nombre"
                  ref={nombre}
                />
                <input
                  type="text"
                  placeholder="País"
                  id="pais"
                  name="pais"
                  ref={pais}
                />
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                  ref={email}
                />
                <textarea
                  placeholder="Mensaje"
                  id="mensaje"
                  name="mensaje"
                  ref={mensaje}
                ></textarea>
              </div>
              <div
                className={`${classes["mensaje-alerta"]} ${classes.ocultar}`}
              ></div>
              <div className={classes.footer}>
                <div>
                  {errors.map( (e, index) =>
                    <p key={index}>{e}</p>
                  )}
                </div>
                <button>Enviar</button>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
