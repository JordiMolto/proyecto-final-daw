import React, { Component } from 'react'
import '../css/Plans.css'
import planes from '../store/planes_array'
import ButtonComp from './ButtonComp'

export default class Plan extends Component {
  render() {
    
    return (
      <>
        <div id='id_plans' className="container-fluid">
          <div className="container">
            <div className="row">
              {     
                planes.map((plan, index) => {
                  return (
                    <div key={index} className="col-12 col-lg-3 col-sm-6" align="center">
                      <div className="card text-center">
                        <div className="title">
                          <i className="fa fa-paper-plane"></i>
                          <h2>{plan.nombre}</h2>
                        </div>
                        <div className="price">
                          <h4><sup>€</sup>{plan.precio}</h4>
                        </div>
                        <div className="option">
                          {
                            plan.features.map((feature) => <p className='p_white'>&#10003; {feature}</p>)
                          }
                        </div>
                        <ButtonComp className="button-header" text="Contratar plan"></ButtonComp>
                      </div>
                    </div>
                  )
                })
              }     
            </div>
          </div>
        </div>
      </>
    )
  }
}
