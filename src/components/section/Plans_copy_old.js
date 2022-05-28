import React, { Component } from 'react'
import '../css/Plans.css'
import PlanCard from './PlanCard'
import ButtonComp from './ButtonComp'

export default class Plans extends Component {
  
  render() {
    
    return (
      <>
        <div id='id_plans' className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-3 col-sm-6" align="center">
                <div className="card text-center">
                  <div className="title">
                    <i className="fa fa-paper-plane"></i>
                    <h2>Basic</h2>
                  </div>
                  <div className="price">
                    <h4><sup>€</sup>248</h4>
                  </div>
                  <div className="option">
                    <p className='p_white'>&#10003;	 Auditoría Web</p>
                    <p className='p_white'>&#10003;	 Diseño</p>
                    <p className='p_white'>&#10003;	 Desarrollo web completa</p>
                  </div>
                  <ButtonComp className="button-header" text="Contratar plan"></ButtonComp>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-sm-6" align="center">
                <div className="card text-center">
                  <div className="title">
                    <i className="fa fa-plane"></i>
                    <h2>Standard</h2>
                  </div>
                  <div className="price">
                    <h4><sup>€</sup>342</h4>
                  </div>
                  <div className="option">
                    <p className='p_white'>&#10003;	 Auditoría Web</p>
                    <p className='p_white'>&#10003;	 Diseño</p>
                    <p className='p_white'>&#10003;	 Desarrollo web completa</p>
                    <p className='p_white'>&#10003;	 Mantenimiento</p>
                    <p className='p_white'>&#10003;	 Soporte</p>                    </div>
                  <ButtonComp className="button-header" text="Contratar plan"></ButtonComp>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-sm-6" align="center">
                <div className="card text-center">
                  <div className="title">
                    <i className="fa fa-rocket"></i>
                    <h2>Premium</h2>
                  </div>
                  <div className="price">
                    <h4><sup>€</sup>439</h4>
                  </div>
                  <div className="option">
                    <p className='p_white'>&#10003;	 Auditoría Web</p>
                    <p className='p_white'>&#10003;	 Diseño</p>
                    <p className='p_white'>&#10003;	 Desarrollo web completa</p>
                    <p className='p_white'>&#10003;	 Mantenimiento</p>
                    <p className='p_white'>&#10003;	 Soporte</p>
                    <p className='p_white'>&#10003;	 Hosting</p>
                    <p className='p_white'>&#10003;	 30 dominios</p>
                    <p className='p_white'>&#10003;	 Analytics</p>
                    <p className='p_white'>&#10003;	 eCommerce</p>
                    <p className='p_white'>&#10003;	 Configuración SMTP</p>
                  </div>
                  <ButtonComp className="button-header" text="Contratar plan"></ButtonComp>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-sm-6" align="center">
                <div className="card text-center">
                  <div className="title">
                    <i className="fa fa-rocket"></i>
                    <h2>Personalizado</h2>
                  </div>
                  <div className="price">
                    <h4><sup>€</sup>??</h4>
                  </div>
                  <div className="option">
                    <p className='p_white'>&#10003;	 Auditoría Web</p>
                    <p className='p_white'>&#10003;	 Diseño</p>
                    <p className='p_white'>&#10003;	 Desarrollo web completa</p>
                    <p className='p_white'>&#10003;	 Mantenimiento</p>
                    <p className='p_white'>&#10003;	 Soporte</p>
                    <p className='p_white'>&#10003;	 Hosting</p>
                    <p className='p_white'>&#10003;	 30 dominios</p>
                    <p className='p_white'>&#10003;	 Analytics</p>
                    <p className='p_white'>&#10003;	 eCommerce</p>
                    <p className='p_white'>&#10003;	 Configuración SMTP</p>
                  </div>
                  <ButtonComp className="button-header" text="Contratar plan"></ButtonComp>
                </div>
              </div>
              <PlanCard ></PlanCard>
            </div>
          </div>
        </div>
      </>
    )
  }
}
