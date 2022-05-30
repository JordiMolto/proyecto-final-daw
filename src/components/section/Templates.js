import React, { Component } from 'react'
import '../css/Templates.css'
import TemplatesCard from './TemplatesCard'
import ButtonComp from './ButtonComp'
import { Link } from "react-router-dom";

export default class Templates extends Component {
  render() {
    return (
      
      <div id='id_templates' >
        <div className='templates_descrip'>
          <h1>Templates</h1>
          <p style={{fontWeight:"400", fontSize:"22px"}}>Aquí adjunto algunos proyectos y webs que he realizado recientemente. ¿Quieres saber más? Envíeme un <ButtonComp href="/#id_aa" text="correo electrónico"></ButtonComp></p>
            </div>
        <section className="hero-section">
          <div className="card-grid">
            <TemplatesCard></TemplatesCard>
          </div>
        </section>
        <div className='center'>
            <ButtonComp className="button-general white btn-templates" href="/contact" text="Ver más trabajos >"></ButtonComp>
            </div>
      </div>
    )
  }
}
