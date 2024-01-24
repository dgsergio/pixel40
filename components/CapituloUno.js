import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Modal from './UI/Modal';
import { ModalContext } from '@/store/modal-context';
import classes from './CapituloUno.module.css';

const CapituloUno = (props) => {
  const router = useRouter();
  const { closeHandler, openHandler } = useContext(ModalContext);
  const mensaje = () =>
    alert(
      'Esta página es solo en concepto de exhibición. Por favor diríjase a la pagina oficial de Pixel40 (www.pixle40.com.ar)'
    );
  const clickHandler = () => {
    if (props.linkBtn === 'PRECIO') {
      // openHandler("PRECIO");
      mensaje();
      return;
    }
    router.push(props.linkBtn);
    closeHandler();
  };

  return (
    <Modal>
      <div className={classes.container}>
        <h3>Capítulo 1</h3>
        <h2>Photoshop de 0 a 100</h2>
        <p>
          Con este curso online vas a aprender todo lo que debes saber para
          dominar Adobe Photoshop. A continuación encontrarás el video
          correspondiente al Capítulo 1.
        </p>
        <div className={classes.body}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1ixbMLQL_Ps"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>

          <h4>¿Quieres el curso completo?</h4>
          <p>
            En el siguiente enlace puedes conocer precios, forma de pago y todos
            los detalles necesarios para adquirir el curso completo.
          </p>
          <button onClick={clickHandler}>{props.txtBtn}</button>
        </div>
      </div>
    </Modal>
  );
};

export default CapituloUno;
