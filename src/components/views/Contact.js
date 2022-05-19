import React, { Component } from 'react'
import ContactComp from '../section/ContactComp'
import FooterComp from '../layouts/FooterComp'

export default class Contact extends Component {
  render() {
    return (
      <div>
          <h2 style={{ textAlign: "center", marginTop: "100px" }}>
            ¡Estoy emocionado por conocer tu proyecto!<br/>¿Listo para comenzar?
          </h2>
        <ContactComp style={{ margin: "0px!important" }}></ContactComp>
        <FooterComp></FooterComp>
      </div>
    )
  }
}
