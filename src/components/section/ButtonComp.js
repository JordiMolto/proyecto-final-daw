import React from "react";

const Button = (props) => {
  return (
      <a id={props.id} className={props.className} onClick={props.onClick} href={props.href}>{props.text}</a>
  );
}

export default Button;
