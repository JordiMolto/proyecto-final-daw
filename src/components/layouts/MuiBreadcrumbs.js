import React from 'react';
import styled from 'styled-components'
import { Component } from 'react'
//componentes creados con styled-components
const DivPadre = styled.div`
    background-color: rgb(59, 0, 126);
  text-align: center;
  color: white;
  
`
const ImgLogoFooter = styled.img`
height: 100px;
margin: 100px 0px 30px 0px;
`;



export default class Breadcrumb extends Component {
  render() {
    return (
      <div>
      <button style="font-size:16px">Volver atrás </button>
      </div>
    )
  }
}