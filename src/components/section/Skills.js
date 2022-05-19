import React, { Component } from 'react'
import '../css/Skills.css'
import Mentoricon from '../../imgs/mentor.svg'
import Frontendicon from '../../imgs/frontend.svg'
import Designicon from '../../imgs/designer.svg'

export default class Conocimientos extends Component {
  render() {
    return (
      <div id='id_skills'>
        <div className="background">
          <div className='descripSkills'>
            <h1>Skills</h1>
            <p>Desde que comencé mi viaje como diseñador web hace casi 5 años, he trabajado de forma remota para agencias, consulté para nuevas empresas y colaboré con personas talentosas para crear proyectos digitales para uso comercial. <br />
              Soy tranquilamente confiado, curioso y trabajo sin pausa para mejorar mis habilidades.</p>
            <p>Fuera del sector de la programación tengo experiencia y conocimientos en edición de vídeo, SEO y monetización, edición de imagen, gestión de redes.</p>
          </div>
          <div className="containerSkills">
            <div className="panel pricing-table">
              <div className="pricing-plan">
                <img src={Designicon} alt="" className="pricing-img" />
                <h3 className="pricing-header">Diseño</h3>
                <p>Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones bien pensadas.
                </p>
                <ul className="pricing-features">
                  <li className="pricing-features-item">Edición de vídeo: Sony Vegas, Camtasia Studio, DaVinci</li>
                  <li className="pricing-features-item">UX, UI</li>
                  <li className="pricing-features-item">Web, Mobile, Apps</li>
                  <li className="pricing-features-item">Photoshop</li>
                  <li className="pricing-features-item">Pixlr, Gimp, Paint, Canva</li>
                  <li className="pricing-features-item">Figma, Wireframe</li>
                </ul>
              </div>

              <div className="pricing-plan">
                <img src={Frontendicon} alt="" className="pricing-img" />
                <h3 className="pricing-header">Front-end Developer</h3>
                <p>Me mantengo en constante formación, y me apasiona trasladar las ideas de cualquier persona o proyecto a un navegador.
                </p>
                <ul className="pricing-features">
                  <li className="pricing-features-item">Lenguajes: JavaScript, VUE, React, PHP, Laravel, HTML, CSS & SCSS</li>
                  <li className="pricing-features-item">Gitlab/Github</li>
                  <li className="pricing-features-item">Wordpress</li>
                  <li className="pricing-features-item">Prestashop</li>
                  <li className="pricing-features-item">SEO y monetización</li>
                  <li className="pricing-features-item">Visual Studio Code, Sublime Text, Brackets, Terminal</li>
                  <li className="pricing-features-item">Bootstrap</li>
                </ul>
              </div>

              <div className="pricing-plan">
                <img src={Mentoricon} alt="" className="pricing-img" />
                <h3 className="pricing-header">Experiencia</h3>
                <p>Realmente me preocupo por las personas y sus proyectos, me gusta empatizar con ellas para entender mejor sus ideas/proyectos.
                </p>
                <ul className="pricing-features">
                  <li className="pricing-features-item">B2 inglés</li>
                  <li className="pricing-features-item">6 cursos online</li>
                  <li className="pricing-features-item">Titulación Grado Superiror DAW</li>
                  <li className="pricing-features-item">2 años de experiencia</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    )
  }
}
