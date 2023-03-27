const validate = (data) => {
  let messages = [];
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (data.nombre.trim().length === 0)
    messages.push("Completa el campo Nombre");
  if (data.pais.trim().length === 0) messages.push("Completa el campo Pais.");
  if (data.mensaje.trim().length === 0) messages.push("Completa el Mensaje.");
  if (messages.length > 2) messages = ['Faltan completar campos'];  
  if (data.email.trim().length === 0) {
    messages.push("Completa el Email.");
    if (messages.length > 2) messages = ['Faltan completar campos'];
  } else if (!validEmail.test(data.email)) {
    messages.push("El email no es válido");
    if (messages.length > 2) messages = ['Faltan completar campos','El email no es válido'];
  }

  return messages;
};

export default validate;
