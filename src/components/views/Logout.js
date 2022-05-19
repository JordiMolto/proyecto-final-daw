import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import ButtonComp from '../section/ButtonComp'

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <ButtonComp className="button-nav" text="Logout" onClick={() => logout({ returnTo: window.location.origin })}></ButtonComp>
    );
};
