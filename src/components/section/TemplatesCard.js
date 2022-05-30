import React, { useState } from 'react'
import '../css/Plans.css'
import TemplateCard from './TemplateCard';

//imagenes
import imgRestaurante from '../../imgs/web-restaurante.png'
import imgShop from '../../imgs/web-otavio.jpg'
import imgInnovaction from '../../imgs/web-arreg.png'
import imgShutter from '../../imgs/web-shutter.jpg'
import imgFuture from '../../imgs/web-future.png'
import imgBusiness from '../../imgs/web-bussn.jpg'
import imgDeporte from '../../imgs/web-peaus.png'
import imgMontania from '../../imgs/web-montania.jpg'

const Template = () => {
  const [templates] = useState([
    {
      key: "1",
      imagen: imgRestaurante,
      titulo: "Restaurante Casablanca",
    }, {
      key: "2",
      imagen: imgBusiness,
      titulo: "CreateYour Own Business",
    }, {
      key: "3",
      imagen: imgFuture,
      titulo: "Future devs",
    }, {
      key: "4",
      imagen: imgInnovaction,
      titulo: "Innovaction web",
    }, {
      key: "5",
      imagen: imgShop,
      titulo: "Maquinarias Shop",
    }, {
      key: "6",
      imagen: imgShutter,
      titulo: "Shutter ",
    }, {
      key: "7",
      imagen: imgDeporte,
      titulo: "Deportes ESP",
    }, {
      key: "8",
      imagen: imgMontania,
      titulo: "Excursiones Atalaya",
    },
  ]);

  return (
    <>
      {
        //pintamos los datos del Array con .map
        templates.map((template) => {
          return (
            <TemplateCard keyy={template.key} imagen={template.imagen} titulo={template.titulo}></TemplateCard>
          )
        })
      }
    </>
  )
};

export default Template;
