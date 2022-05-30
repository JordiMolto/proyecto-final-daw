import React, { Component } from 'react'
import ContactComp from '../section/ContactComp'
import FooterComp from '../layouts/FooterComp'
import ButtonComp from '../section/ButtonComp'

export default class Contact extends Component {
  render() {
    return (
      <div >
          <ButtonComp className="button-general" href="/" text="<-- Vovler atrás"></ButtonComp>
          <h2 className='h2contact' style={{padding:"0 20px", textAlign: "center", marginTop: "100px" }}>
            ¡Estoy emocionado por conocer tu proyecto!<br/>¿Listo para comenzar?
          </h2>
        <ContactComp style={{ margin: "0px!important" }}></ContactComp>

        <FooterComp></FooterComp>
      </div>
    )
  }
}
