import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    //los parámetros que queremos del usuario los debemos coger
    const { user, isAuthenticated, isLoading } = useAuth0();

    //si está cargando, que nos devuelva el siguiente código
    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        //si está autenticado, entonces que nos devuelva los datos que yo quiera coger:
        //en este caso su img, su nombre y su email
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
            </div>
        )
    );
};