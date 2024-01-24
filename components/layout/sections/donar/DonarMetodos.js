import { useState } from 'react';
import classes from './DonarMetodos.module.css';

const DonarMetodos = () => {
  const [showBankBtn, setShowBankBtn] = useState(true);
  const mensaje = () =>
    alert(
      'Esta página es solo en concepto de exhibición. Por favor diríjase a la pagina oficial de Pixel40 (www.pixle40.com.ar)'
    );

  const bankDate = (
    <div className={classes.bankData}>
      <p>
        <i>
          Esta página es solo en concepto de exhibición. Por favor diríjase a la
          pagina oficial de Pixel40 (www.pixle40.com.ar)
        </i>
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

        <button onClick={mensaje}>Volverse patreon</button>
      </div>
      <div className={classes.row}>
        <h3>Paypal</h3>
        <p>
          También es posible realizar una <b>donación única</b> con PayPal:
        </p>

        <button onClick={mensaje}>Donacion Única</button>
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
