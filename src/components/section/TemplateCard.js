import React, { Component } from 'react'
import '../css/Templates.css'
import './TemplatesCard';


function TemplateCard({ keyy, imagen, titulo }) {
  return (
    <>
      <a key={keyy} className="card-template" href="#">
        <div className="card__background" style={{ backgroundImage: `url(${imagen})` }} ></div>
        <div className="card__content">
          <p className="card__category">Visitar web</p>
          <h3 className="card__heading">{titulo}</h3>
        </div>
      </a>
    </>

  )
}

export default TemplateCard
