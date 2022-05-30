import React, { Component } from 'react'
import '../css/Skills.css'
/*import Mentoricon from '../../imgs/mentor.svg'
import Frontendicon from '../../imgs/frontend.svg'
import Designicon from '../../imgs/designer.svg'*/
import SkillsCard from './SkillsCard'

export default class Skills extends Component {
  render() {
    return (
      <div id='id_skills'>
        <div className="background">
          <div className='descripSkills'>
            <h1>Skills</h1>
            <p>Desde que comencé mi viaje como diseñador web hace casi 5 años, he trabajado de forma remota para agencias, consulté para nuevas empresas y colaboré con personas talentosas para crear proyectos digitales para uso comercial. <br />
              Soy tranquilamente confiado, curioso y trabajo sin pausa para mejorar mis habilidades.</p>
            <p>Fuera del sector de la programación tengo experiencia y Skills en edición de vídeo, SEO y monetización, edición de imagen, gestión de redes.</p>
          </div>
          <div className="containerSkills">
            <div className="panel pricing-table">
              <SkillsCard></SkillsCard>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
