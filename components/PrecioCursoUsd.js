import Card from './UI/Card';
import CardPaypal from './UI/CardPaypal';
import { useState } from 'react';
import pricesStored from '../store/prices';

const PrecioCursoUsd = () => {
  const [card1, setCard1] = useState(true);
  const [card2, setCard2] = useState(true);
  const prices = {
    module: pricesStored.usd.modulo,
    course: pricesStored.usd.curso,
    oldPrice: pricesStored.usd.cursoStriked,
  };

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
          asterisk="*Precio expresado en dólares USD."
        />
      ) : (
        <CardPaypal price={prices.module} id={1} onClose={toggleCard} />
      )}

      {card2 ? (
        <Card
          id="2"
          onBuyHandler={toggleCard}
          promo="3 MÓDULOS 50% off"
          oldPrice={prices.oldPrice}
          price={prices.course}
          description="(curso completo)"
          asterisk="*Precio expresado en dólares USD."
          currency="USD"
        />
      ) : (
        <CardPaypal price={prices.course} id={2} onClose={toggleCard} />
      )}
    </>
  );
};

export default PrecioCursoUsd;
