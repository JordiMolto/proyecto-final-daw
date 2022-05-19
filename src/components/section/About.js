import React, { Component } from 'react'
import ButtonComp from './ButtonComp'
import Avatar from '../../imgs/avatar-sin-fondo.png'

export default class About extends Component {
  render() {
    return (
      <div >
        <section id="id_about" className='about'>
          <div className='content'>
              <img src={Avatar} className="slide-up imageAbout2" alt="Profile2" />
            <div className='about-text'>
              <h2>Me presento :)</h2>
              
              <h5>FRONT-END Developer & Designer</h5>
              <p>
                Me llamo Jordi y soy un apasionado del desarrollo FRONTEND. Empecé a crear mis primeras páginas web y a formarme en este sector a los 14 años, actualmente estoy trabajando en acceseo como Desarrollador y Técnico SEO.
                <br/><br/>
                Soy muy creativo, y genero ideas constantemente. Mi pasión por este mundo vino a causa de estos dos factores, ya que, en el mundo del FRONTEND yo era capaz de trasladar cualquiera de mis ideas a un navegador.
                <br/><br/>
                Mi prioridad sin lugar a dudas es la formación. Invierto la mayoría de mi tiempo libre en el aprendizaje y formación autodidacta. Algunas de mis skills principales son: VUE, REACT, CSS/SCSS, Wordpress avanzado, nivel de inglés B2.
                <br/><br/>
                He trabajado con decenas de clientes y páginas web, y me encanta afrontar nuevos retos.

              </p>
              <ButtonComp className="button-header" text="Trabajemos juntos!"></ButtonComp>
            </div>
          </div>
        </section>
      </div>

    )
  }
}
