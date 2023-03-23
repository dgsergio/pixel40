import Link from "next/link";
import classes from "./Card.module.css";
import { ModalContext } from "@/store/modal-context";
import { useContext } from "react";

const CardTransfer = (props) => {
  const { closeHandler } = useContext(ModalContext);
  return (
    <div className={`${classes.card} ${classes.paypal}`}>
      <h5>Transferencia Bancaria</h5>
      <div class={classes.bank}>
        <p>
          <b>Banco:</b> Brubank
        </p>
        <p>
          <b>Alias:</b> estudiopixel40
        </p>
        <p>
          <b>CBU:</b> 14300017130 20446250014
        </p>
        <div className={classes.priceTransfer}>
          $
          {props.price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
      </div>
      <div className={classes.asterisk}>*Precio expresado en dólares ARS.</div>

      <div className={`${classes.description} ${classes.contactoDesc}`}>
        <Link href="/contacto" onClick={closeHandler}>
          Contáctame
        </Link>{" "}
        luego de abonar.
      </div>
      <a className={classes.back} onClick={() => props.onClose(props.id)}>
        « volver
      </a>
    </div>
  );
};

export default CardTransfer;
