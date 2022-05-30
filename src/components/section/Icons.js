import React, { Component } from 'react'
import { FaPencilRuler } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

export default class Icons extends Component {
  render() {
    return (
      <div>
        <section id="icons">
          <div className="icons-center">
            <article className="icons">
              <div className=" slide-up icons-text">
                <div className="icons-icon"><FaNetworkWired className='fas' /></div>
                <h2 className="icons-subtitle">Pruebas y testing</h2>
                <p className=" icons-info">Nos aseguramos de que tu web sea de excelente calidad mediante pruebas exhaustivas utilizando múltiples enfoques.</p>
              </div>
            </article>
            <article className="icons">
              <div className="slide-up icons-text">
                <div className="icons-icon"><FaMobile className='fas' /></div>
                <h2 className="icons-subtitle">Mobile First</h2>
                <p className=" icons-info">Nos enfocamos en Mobile First. Con diseños modernos, optimizados y minimalistas.</p>
              </div>
            </article>
            <article className="icons">
              <div className="slide-up icons-text">
                <div className="icons-icon"><FaPencilRuler className='fas' /></div>
                <h2 className="icons-subtitle">Diseño y Estructura</h2>
                <p className=" icons-info">Diseñamos tu web para que sea lo más fácil posible de usar, mientras guío a los usuarios hacia el objetivo final.</p>
              </div>
            </article>
            <article className="icons">
              <div className="slide-up icons-text">
                <div className="icons-icon"><FaHandsHelping className='fas' /></div>
                <h2 className="icons-subtitle">Business Strategy</h2>
                <p className=" icons-info">Discutimos lo que se está tratando de conseguir y planificamos cómo lograrlo.</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    )
  }
}
