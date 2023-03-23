import Modal from "./UI/Modal";
import classes from "./PrecioCurso.module.css";
import FormasDePago from "./layout/sections/FormasDePago";
import PrecioCursoUsd from "./PrecioCursoUsd";
import PrecioCursoArs from "./PrecioCursoArs";
import { useState } from "react";

const PrecioCurso = () => {
  const [currency, setCurrency] = useState("usd");
  const submitHandler = (e) => {
    if (e.target.value !== "ars" && e.target.value !== "usd") return;
    setCurrency(e.target.value);
  };

  return (
    <Modal>
      <div className={classes.region}>
        <select id="region" onChange={submitHandler}>
          <option disabled>Selecciona tu región</option>
          <option value="usd">Internacional</option>
          <option value="ars"> Argentina</option>
        </select>
      </div>
      <div className={classes.packs}>
        {currency === "usd" ? <PrecioCursoUsd /> : <PrecioCursoArs />}
      </div>

      <div className={classes.payment}>Formas de Pago</div>
      <FormasDePago padding="0" />
    </Modal>
  );
};

export default PrecioCurso;
