import classes from "./Card.module.css";

const Card = (props) => {
  let cardClasses = classes.card;
  let moduleClasses = classes.module;
  let moduleContent = props.title;
  switch (props.currency) {
    case "USD":
      cardClasses = classes.card + " " + classes.usd;
      break;
    case "ARS":
      cardClasses = classes.card + " " + classes.ars;
      break;
    default:
      break;
  }

  if (props.oldPrice) {
    moduleClasses = classes.module + " " + classes.oldPrice;
    moduleContent =
      "$" +
      props.oldPrice.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }

  const buyHandler = () => {
    props.onBuyHandler(parseInt(props.id));
  };

  return (
    <div className={cardClasses}>
      {props.promo && <div className={classes.promo}>{props.promo}</div>}
      <div className={classes.body}>
        <h5 className={moduleClasses}>{moduleContent}</h5>
        <div className={classes.price}>
          $
          {props.price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.asterisk}>{props.asterisk}</div>
        <button onClick={buyHandler}>Comprar</button>
      </div>
    </div>
  );
};

export default Card;
