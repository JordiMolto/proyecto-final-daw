import React, { useState } from 'react'
import '../css/Plans.css'
import ButtonComp from '../section/ButtonComp'
const Plan = () => {
  const [planes] = useState([
    {
      id: "1",
      icon: "fa fa-paper-plane",
      nombre: "Basic",
      precio: "248",
      feautures: [
        "Auditoría Web",
        "Diseño",
        "Desarrollo web completa",
      ]
    }, {
      id: "2",
      icon: "fa fa-plane",
      nombre: "Standard",
      precio: "342",
      feautures: [
        "Auditoría Web",
        "Diseño",
        "Desarrollo web completa",
        "Mantenimiento",
        "Soporte",
      ]
    }, {
      id: "3",
      icon: "fa fa-rocket",
      nombre: "Premium",
      precio: "439",
      feautures: [
        "Auditoría Web",
        "Diseño",
        "Desarrollo web completa",
        "Mantenimiento",
        "Soporte",
        "Hosting",
        "30 dominios",
        "Analytics",
        "eCommerce",
        "Configuración SMTP",
      ]
    }, {
      id: "4",
      icon: "fa fa-paperclip",
      nombre: "Personalizado",
      precio: "??",
      feautures: [
        "Auditoría Web",
        "Diseño",
        "Desarrollo web completa",
        "Mantenimiento",
        "Soporte",
        "Hosting",
        "30 dominios",
        "Analytics",
        "eCommerce",
        "Configuración SMTP",
      ]
    },
  ]);
  return (
    <div className="row">
      {
        planes.map((plan) => {
          return (
            <div key={plan.id} className="col-12 col-lg-3 col-sm-6" align="center">
              <div className="card text-center">
                <div className="title">
                  <i className={plan.icon}></i>
                  <h2>{plan.nombre}</h2>
                </div>
                <div className="price">
                  <h4><sup>€</sup>{plan.precio}</h4>
                </div>
                <div className="option">
                  {
                    plan.feautures.map((feature) => <p className='p_white'>&#10003; {feature}</p>)
                  }
                </div>
                <ButtonComp className="button-header" text="Contratar plan"></ButtonComp>
              </div>
            </div>
          )
        })
      }
    </div>
  )
};
export default Plan;
