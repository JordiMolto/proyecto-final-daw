import React, { Component } from 'react'

export default class ContactComp extends Component {
  render() {
    return (
      <div className='bodyContact'>
        <div className='containerContact'>
          <div className='row100'>
            <div className='col1'>
              <div className='inputBox nameForm'>
                <input type="text" name="name" required="required" />
                <span className='text'>Nombre</span>
                <span className='line'></span>
              </div>
              <div className='inputBox lastnamesForm'>
                <input type="text" name="lastnames" required="required" />
                <span className='text'>Apellidos</span>
                <span className='line'></span>
              </div>
            </div>
            <div className='col'>
              <div className='inputBox'>
                <input type="text" name="email" required="required"/>
                <span className='text'>Email</span>
                <span className='line'></span>
              </div>
            </div>
            <div className='col'>
              <div className='select'>
                <select name="select">
                  <option value="">{"-"} Seleccionar Plan {"-"}</option>
                  <option value="basic">Plan Basic</option>
                  <option value="advanced">Plan Advanced</option>
                  <option value="premium">Plan Premium</option>
                </select>
              </div>
            </div>
            <div className='col'>
              <div className='inputBox textarea'>
                <textarea type="text" name="message" required="required"></textarea>
                <span className='text'>Mensaje</span>
                <span className='line'></span>
              </div>
            </div>
          </div>
          <div className='row100'>
            <div className='col'>
              <input type="submit" value="Enviar" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
