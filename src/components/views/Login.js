import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import ButtonComp from '../section/ButtonComp'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <ButtonComp className="button-nav" text="Login/Register" onClick={ () => loginWithRedirect() }></ButtonComp>
}
