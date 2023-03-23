import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { ModalContext } from "@/store/modal-context";
import { useContext } from "react";

const Backdrop = () => {
  const { closeHandler } = useContext(ModalContext);
  return <div onClick={closeHandler} className={classes.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  const { closeHandler } = useContext(ModalContext);

  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <button onClick={closeHandler}>x</button>
      </div>
      <div className={classes.body}>
        {children}
        <div className={classes.footer}>
        <button onClick={closeHandler}>Cerrar</button>
        </div>
      </div>
      
    </div>
  );
};

const Modal = ({ children }) => {
  const portalModal = document.getElementById("modal-overlay");
  const portalBackDrop = document.getElementById("backdrop-overlay");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalBackDrop)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalModal
      )}
    </>
  );
};

export default Modal;
