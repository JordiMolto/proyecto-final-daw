import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import ButtonComp from '../section/ButtonComp'

//logout() es un método del useAuth0() gancho.
//Redirige a sus usuarios a su punto final de cierre de sesión de Auth0 ( https://YOUR_DOMAIN/v2/logout)
//Luego los redirige inmediatamente a su aplicación.


export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <ButtonComp className="button-general white" text="Logout" onClick={() => logout({ returnTo: window.location.origin })}></ButtonComp>
    );
};
