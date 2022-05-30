import React from "react";

const Button = (props) => {
  return (
    //creamos las propiedades que se pueden pedir desde la llamada al componente
    <a id={props.id} className={props.className} onClick={props.onClick} href={props.href}>{props.text}</a>
  );
}

export default Button;
