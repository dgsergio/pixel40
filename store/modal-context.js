import React, { useState } from "react";

export const ModalContext = React.createContext({});

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const closeHandler = () => {
    setModal(null);
  };
  const openHandler = (selected) => {
    if (selected !== "PRECIO" && selected !== "CAP1" && selected !== "CLASES")
      return;
    setModal(selected);
  };

  return (
    <ModalContext.Provider value={{ modal, closeHandler, openHandler }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
