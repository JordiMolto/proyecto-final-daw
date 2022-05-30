import React, { useState } from 'react'
import '../css/Plans.css'
import PlanCard from './PlanCard';

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
        //pintamos los datos del Array con .map
        planes.map((plan) => {
          return (
            <PlanCard  idd={plan.id} icon={plan.icon}nombre={plan.nombre} precio={plan.precio} feautures={plan.feautures}></PlanCard>
          )
        })
      }
    </div>
  )
};

export default Plan;
