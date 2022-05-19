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
export default class Home extends Component {
  render() {
  const H2title = styledComponents.h2`
  text-align: center;
  width: 100%;
  color: #000000;
  display: block;
  margin-top: 100px;
  `
    return (
      <div>
        <Header></Header>
        <Icons></Icons>
        <About></About>
        <Skills ></Skills>
        <Templates></Templates>
        <Plans></Plans>
        
        <H2title>Contacta conmigo!</H2title>
        <ContactComp></ContactComp>
        <Footer></Footer>
      </div>
    )
  }
}
