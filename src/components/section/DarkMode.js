import React from "react";
import "../css/DarkMode.css";

const DarkMode = () => {
//clase del botón when click
  let clickedClass = "clicked";
  //document’s body element
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    //Si encontramos un valor, agregaremos esa clase CSS al document.body
    body.classList.add(theme);
  } else {
    //Sino, por defecto usaremos el tema claro
    body.classList.add(lightTheme);
  }

  //con esta función chequeo el tema que está activo
  const switchTheme = (e) => {
      //cuando clicamos, si el tema está en oscuro, reemplazamos la clase del theme body por el claro
      //si no, alrevés
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    ></button>
  );
};

export default DarkMode;