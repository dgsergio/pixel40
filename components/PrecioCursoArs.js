import Card from "./UI/Card";
import { useState } from "react";
import CardTransfer from "./UI/CardTransfer";
import pricesStored from '../store/prices';

const PrecioCursoArs = () => {
  const [card1, setCard1] = useState(true);
  const [card2, setCard2] = useState(true);
  const prices = {
    module: pricesStored.ars.modulo,
    course: pricesStored.ars.curso,
    oldPrice: pricesStored.ars.cursoStriked
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
          title="Módulo 1"
          price={prices.module}
          description="(cada módulo)"
          asterisk="*Precio expresado en dólares ARS."
        />
      ) : (
        <CardTransfer price={prices.module} id={1} onClose={toggleCard} />
      )}

      {card2 ? (
        <Card
          id="2"
          onBuyHandler={toggleCard}
          promo="3 MÓDULOS 50% off"
          oldPrice={prices.oldPrice}
          price={prices.course}
          description="(curso completo)"
          asterisk="*Precio expresado en dólares ARS."
          currency='ARS'
        />
      ) : (
        <CardTransfer price={prices.course} id={2} onClose={toggleCard} />
      )}
    </>
  );
};

export default PrecioCursoArs;
