import validate from '@/function/validate';
import { useEffect, useRef, useState } from 'react';
import classes from './Contacto.module.css';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';

const Contacto = () => {
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const nombre = useRef(),
    pais = useRef(),
    email = useRef(),
    mensaje = useRef();
  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const values = {
      nombre: nombre.current.value,
      pais: pais.current.value,
      email: email.current.value,
      mensaje: mensaje.current.value,
    };
    const errorData = validate(values);
    setErrors(errorData);
    if (errorData.length === 0) {
      setLoading(true);
      emailjs
        .sendForm(
          'service_chap15x',
          'template_5p52z4l',
          form.current,
          'c7Ps966SgSgO6C9Gb'
        )
        .then(
          (result) => {
            // console.log(result.text);
            e.target.reset();
            setSuccess(true);
            setLoading(false);
          },
          (error) => {
            // console.log(error.text);
            setErrors([
              'Hubo un error al enviar el mensaje. Intentelo más tarde o cominiquese por correo a estudiopixel40.gmail.com',
              setLoading(false),
            ]);
          }
        );
    }
  };

  useEffect(() => {
    if (success) {
      const interval = setTimeout(() => {
        router.push('/');
      }, 6000);
      return () => clearTimeout(interval);
    }
  }, [success]);

  return (
    <div className={classes.header}>
      <section className={classes.contacto}>
        <div className={`${classes.margen} container`}>
          <h2>Contacto</h2>
          <form
            ref={form}
            onSubmit={submitHandler}
            className={classes['formulario-principal']}
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
                  type="email"
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
                className={`${classes['mensaje-alerta']} ${classes.ocultar}`}
              ></div>
              <div className={classes.footer}>
                <div className={classes.messages}>
                  {errors.map((e, index) => (
                    <p className={classes['msg-error']} key={index}>
                      {e}
                    </p>
                  ))}
                </div>
                {success ? (
                  <p className={classes['msg-success']}>
                    ¡Mensaje enviado con éxito!
                  </p>
                ) : (
                  <button disabled={loading} type="submit">
                    Enviar
                  </button>
                )}
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
