import Card from "./UI/Card";
import CardPaypal from "./UI/CardPaypal";
import { useState } from "react";

const PrecioClasesUsd = () => {
  const [card1, setCard1] = useState(true);
  const [card2, setCard2] = useState(true);
  const prices = {
    dia: 19.99,
    mes: 64,
    oldPrice: undefined
  }

  const toggleCard = (card) => {
    if (card === 1) {
      setCard1((pV) => !pV);
    } else if (card === 2) {
      setCard2((pV) => !pV);
    }
  };


  return (
    <>
      {card1 ? (
        <Card
          id="1"
          onBuyHandler={toggleCard}
          title="1 Día"
          price={prices.dia}
          description="(1 clase)"
          asterisk="*Cada clase tiene una duración de 45 minutos y tiene un vencimiento de 30 días. Precio expresado en dólares USD."
        />
      ) : (
        <CardPaypal price={prices.dia} id={1} onClose={toggleCard} />
      )}

      {card2 ? (
        <Card
          id="2"
          onBuyHandler={toggleCard}
          promo="20% de descuento"
          title="1 Mes"
          price={prices.mes}
          description="(4 clases)"
          asterisk="*4 clases de 45 minutos c/u. Tiene un vencimiento de 30 días a partir del día de pago. Precio expresado en dólares USD.."
          currency='USD'
        />
      ) : (
        <CardPaypal price={prices.mes} id={2} onClose={toggleCard} />
      )}
    </>
  );
};

export default PrecioClasesUsd;
