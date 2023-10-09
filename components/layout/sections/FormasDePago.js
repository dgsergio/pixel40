import classes from './FormasDePago.module.css';

const FormasDePago = ({ padding }) => {
  return (
    <section style={{ padding: padding }} className={classes.section}>
      {!padding && <hr />}
      <div className={`${classes.formas} container`}>
        <img src="img/logos/banco.jpg" alt="transferencia bancaría" />
        <img src="img/logos/visa.jpg" alt="Visa" />
        <img src="img/logos/master.jpg" alt="Master" />
        <img src="img/logos/westernunion.jpg" alt="Western Union" />
        <img src="img/logos/paypal.jpg" alt="PayPal" />
        <img src="img/logos/payoneer.jpg" alt="Payoneer" />
      </div>
    </section>
  );
};

export default FormasDePago;
