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
            <div className="profile" style={{display:"flex", float:"right", padding:"0 10%", margin:"15px 0"}}>
                <div style={{ margin:"0 15px", marginTop:"10px"}}>
                <h5>Perfil de usuario:</h5>
                <p style={{ fontSize:"16px"}}><b>Nombre:</b> {user.name}</p>
                <p style={{ fontSize:"16px"}}><b>Email:</b> {user.email}</p>
                </div>
                <img style={{width:"auto", height:"100%", marginRight:"15px", marginTop:"10px", marginLeft:"15px"}} src={user.picture} alt={user.name} />
            </div>
        )
    );
};