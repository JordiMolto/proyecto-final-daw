import styled from 'styled-components'
import React, { Component } from 'react'
import Logo from '../../imgs/logo_transparent.png'
import '../css/Footer.css'
import { Link } from "react-router-dom";

/* 
En vez de crear los componentes y darles el estilo directamente, los creo con styled components
divPadre = (props) => {
    return <div style={{padding: '30px'}}{...props}/>
}
*/

const DivPadre = styled.div`
    background-color: rgb(59, 0, 126);
  text-align: center;
  color: white;
  
`
const ImgLogoFooter = styled.img`
height: 100px;
margin: 100px 0px 30px 0px;
`;


export default class Footer extends Component {
    render() {
        return (
            <div >
                <footer >
                    <DivPadre className='footerStyles'>
                        <ImgLogoFooter src={Logo} alt="Logo aplicación" />
                        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                            <p style={{ fontSize: "1.8rem" }}>
                                «Simplicidad, blanco y una buena tipografía.» Michael Bierut
                            </p>
                        </div>
                        <div>
                            <a href="mailto:jordimolto1@gmail.com"><i className="fa fa-envelope-o"></i></a>
                            <a href="https://www.tiktok.com/@codeseo"><i className="fa fa-user-o"></i></a>
                            <a href="https://www.linkedin.com/in/jordi-molto/"><i className="fa fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/codeseo_/"><i className="fa fa-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UCVQx_e1hQQxnocRbnANjX5Q"><i className="fa fa-youtube"></i></a>
                        </div>
                        <p style={{ marginTop: "50px", marginBottom: "0px", }}>Hecha con React ©2022 Jordi Moltó.</p>
                        
                        <Link to="/politicasPrivacidad">Políticas de Privacidad</Link> | <Link to="/avisoLegal">Aviso Legal</Link> | <a href='/politicasCookies'>Política de Cookies</a>
                    </DivPadre>
                </footer>
            </div>
        )
    }
}