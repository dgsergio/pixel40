import Link from 'next/link';
import classes from './Card.module.css';
import { ModalContext } from '@/store/modal-context';
import { useContext } from 'react';

const CardPaypal = (props) => {
  const { closeHandler } = useContext(ModalContext);
  return (
    <div className={`${classes.card} ${classes.paypal}`}>
      <h4>PayPal</h4>
      <a
        className={`${classes.paypalBtn} button`}
        href={`https://paypal.me/sergiopixel40/${props.price}/`}
        target="_blank"
      >
        Pagar ${props.price}
      </a>
      <div className={classes.asterisk}>*Precio expresado en dólares USD.</div>
      <div className={classes.description}>
        Por favor,{' '}
        <Link href="/contacto" onClick={closeHandler}>
          contáctame
        </Link>{' '}
        luego de abonar o bien si deseas pagar por <b>Western Union</b>.
      </div>
      <a className={classes.back} onClick={() => props.onClose(props.id)}>
        « volver
      </a>
    </div>
  );
};

export default CardPaypal;
