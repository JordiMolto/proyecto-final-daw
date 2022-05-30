import React, { Component } from 'react'
import '../css/Plans.css'
import './PlansCard'
import ButtonComp from './ButtonComp'
import { useAuth0 } from '@auth0/auth0-react'

function PlanCard({ idd, icon, nombre, precio, feautures }) {
  const { isAuthenticated } = useAuth0();
  return (
    <div key={idd} className="col-12 col-lg-3 col-sm-6" align="center">
      <div className="card text-center">
        <div className="title">
          <i className={icon}></i>
          <h2>{nombre}</h2>
        </div>
        <div className="price">
          <h4><sup>€</sup>{precio}</h4>
        </div>
        <div className="option">
          {
            //por cada "feature", pintamos un <p> con sus estilos

            feautures.map((feature) => <p className='p_white'>&#10003; {feature}</p>)
          }
        </div>
        {/* si ESTÁ AUTENTICADO nos tiene que mostrar el Perfil y el Logout Button, y sino, el Login Button */}
        {isAuthenticated ? <>
          <ButtonComp className="button-general" text="Contratar plan"></ButtonComp>
          <div className="hide-btn">Próximamente...</div>
        </>
          : <></>}

      </div>
    </div>

  )
}

export default PlanCard
