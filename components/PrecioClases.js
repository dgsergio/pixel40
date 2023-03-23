import Modal from "./UI/Modal";
import classes from "./PrecioCurso.module.css";
import FormasDePago from "./layout/sections/FormasDePago";
import PrecioClasesUsd from "./PrecioClasesUsd";

const PrecioClases = () => {
  return (
    <Modal>
      <div className={classes.packs}>
        <PrecioClasesUsd />
      </div>
      <div className={classes.payment}>Formas de Pago</div>
      <FormasDePago padding="0" />
    </Modal>
  );
};

export default PrecioClases;
