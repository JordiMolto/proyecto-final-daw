import React, { Component } from 'react'
import '../css/Plans.css'
import PlansCard from './PlansCard'
import { useAuth0 } from '@auth0/auth0-react'
import ButtonComp from './ButtonComp'

function Plans() {

    const { isAuthenticated } = useAuth0();
    //función
    const { loginWithRedirect } = useAuth0();

    return (
      <>
        <div id='id_plans' className="container-fluid">
          <div className="container">
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <h1 style={{ color: "black" }}>Planes</h1>
              {/* si ESTÁ AUTENTICADO NO tiene que mostrar nada y sino, el parrafo */}
              {isAuthenticated ? <>
                <></>
              </>
                : <p style={{ color: "white" }}>( Para contratar plan es necesario <ButtonComp className="aa" text="iniciar sesión" onClick={ () => loginWithRedirect() }></ButtonComp> )</p>
              }
            </div>
            <PlansCard ></PlansCard>

          </div>
        </div>
      </>
    )
  
}
export default Plans
