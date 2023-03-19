import { useState } from "react";
import classes from "./DonarMetodos.module.css";

const DonarMetodos = () => {
  const [showBankBtn, setShowBankBtn] = useState(true);
  const bankDate = (
    <div className={classes.bankData}>
      <p>
        <b>Banco:</b> Brubank Alias:{" "}
      </p>
      <p>
        <b>Alias:</b>estudiopixel40{" "}
      </p>
      <p>
        <b>CBU:</b> 1430001713020446250014
      </p>
    </div>
  );
  const showBankHandler = () => {
    setShowBankBtn(false);
  };
  return (
    <section className={`${classes.section} container`}>
      <div className={classes.row}>
        <h3>Patreon</h3>
        <p>
          Se hace con tarjeta de crédito y se cobra mensualmente, el monto es en
          dólares, <strong>pesificándose al momento de cobro</strong>:
        </p>
        <a href="https://www.patreon.com/pixel40" target="_blank">
          <button>Volverse patreon</button>
        </a>
      </div>
      <div className={classes.row}>
        <h3>Paypal</h3>
        <p>
          También es posible realizar una <b>donación única</b> con PayPal:
        </p>

        <a href="https://paypal.me/estudiopixel40/" target="_blank">
          <button>Donacion Única</button>
        </a>
      </div>
      <div className={classes.row}>
        <h3>Mercado Pago</h3>
        <p>
          Por MercadoPago <strong>puedes suscribirte mensualmente</strong> en
          las siguientes categorías.
        </p>
        <div className={classes.btnOpt}>
          <a
            className={`${classes["btn-s"]} ${classes.secondary}`}
            target="_blank"
            href="http://mpago.la/2cxtH2Q"
          >
            $300 /mes
          </a>
          <a
            className={`${classes["btn-s"]} ${classes.secondary}`}
            target="_blank"
            href="http://mpago.la/1Znyv4L"
          >
            $500 /mes
          </a>
          <a
            className={`${classes["btn-s"]} ${classes.secondary}`}
            target="_blank"
            href="http://mpago.la/1FZeumn"
          >
            $1000 /mes
          </a>
          <a
            className={`${classes["btn-s"]} ${classes.primary}`}
            target="_blank"
            href="http://mpago.la/1yvPhka"
          >
            $5000 /mes
          </a>
        </div>
        <p>...o elije el monto mensual que consideres más apropiado:</p>
        <div className={classes.btnOpt}>
          <a
            className={`${classes["btn-s"]} ${classes.secondary}`}
            target="_blank"
            href="https://www.mercadopago.com/mla/debits/new?preapproval_plan_id=2c9380847726c5fe017753767f483200"
          >
            $X /mes
          </a>
        </div>
      </div>

      <div className={classes.row}>
        <h3>Transferencia Bancaria</h3>
        <p>
          Si tienes una cuenta bancaria en Argentina puedes enviar el monto que
          quieras por transferencia o depósito. A continuación te dejo la
          información necesaria:
        </p>

        {showBankBtn && (
          <button onClick={showBankHandler}>Datos para la Transferencia</button>
        )}
        {!showBankBtn && bankDate}
      </div>
    </section>
  );
};

export default DonarMetodos;
