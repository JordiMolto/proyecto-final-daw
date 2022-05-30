import React, { Component } from 'react'
import Header from '../section/Header'
import Icons from '../section/Icons'
import About from '../section/About'
import Footer from '../layouts/FooterComp'
import ContactComp from '../section/ContactComp'
import styledComponents from 'styled-components'
import Skills from '../section/Skills'
import Plans from '../section/Plans'
import Templates from '../section/Templates'
//import MuiBreadcrumbs from '../layouts/MuiBreadcrumbs'

export default class Home extends Component {
  render() {
  //creamos componente con styled-components
  const H1title = styledComponents.h1`
  text-align: center;
  width: 100%;
  color: #000000;
  display: block;
  margin-top: 100px;
  `
    return (
      <div>
        
        <Header></Header>
        {/*<MuiBreadcrumbs></MuiBreadcrumbs>*/}
        <Icons></Icons>
        <About></About>
        <Skills ></Skills>
        <Templates></Templates>
        <Plans></Plans>
        
        <H1title id="id_aa" >Contacta conmigo!</H1title>
        <ContactComp></ContactComp>
        <Footer></Footer>
      </div>
    )
  }
}
