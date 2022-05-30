import React, { Component } from 'react'
import ButtonComp from './ButtonComp'

export default class Header extends Component {
  render() {
    return (
      <div>
        <section className='sectionHeader'>
          <div className='content'>
            <div className='zoom holamundo'>
              <h2><span style={{ color: "#a678ff" }}>&#123;</span> Hola Mundo <span style={{ color: "#a678ff" }}>; &#125;</span> </h2>
            </div>
            <p>
              Me llamo Jordi, soy desarrollador web y este es mi portfolio!<br />
              Además, trabajo como FREELANCE:
            </p>
            <div className='contenedorULyBUTTON'>
              <div className='contenedorUL'>
                <ul>
                  <li>WEBS PERSONALIZADAS/CÓDIGO</li>
                  <li>WORDPRESS PERSONALIZADO</li>
                  <li>PRESTASHOP PERSONALIZADO</li>
                  <li>MANTENIMIENTO</li>
                  <li>ASESORAMIENTO</li>
                </ul>
              </div>
              <ButtonComp className="button-general zoom" href="#id_plans" text="Trabajemos juntos!"></ButtonComp>
            </div>
          </div>
        </section>
      </div>
    )
  }
}