import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import ButtonComp from '../section/ButtonComp'

//loginWithRedirect() es un método del useAuth0() gancho.
//Redirige a los usuarios a la página de inicio de sesión de Auth0, donde Auth0 puede autenticarlos. 

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <ButtonComp className="button-general white" text="Login/Register" onClick={ () => loginWithRedirect() }></ButtonComp>
}
