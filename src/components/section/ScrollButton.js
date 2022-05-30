import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

//componente creado con styled components
const Button = styled.div`
position: fixed;
bottom: 40px;
right: 20px;
outline: none;
font-size: 3.2rem;
z-index: 99;
cursor: pointer;
color: #7e7e7e;
@media (max-width: 768px) {
    font-size: 2.3rem;
    right: 10px;
    bottom: 20px;
  }

`

const ScrollButton = () => {

    //setVisible es un método predefinido que permite visualizar/no visualizar
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        //scrollTop es una propiedad que obtiene un número de píxeles cuando te desplazas(haces scroll)
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1000) {
            setVisible(true)
        }
        else if (scrolled <= 1000) {
            setVisible(false)
        }
    };

    //función que desplaza hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' //con smooth el scroll es suave
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button>
            <FaArrowCircleUp onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} />
        </Button>
    );
}

export default ScrollButton;
