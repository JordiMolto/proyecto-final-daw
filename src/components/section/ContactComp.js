import { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactComp() {
  // setDatos rellenará los datos cada vez que el usuario escriba algo en el formulario
  const [datos, setDatos] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    select: '',
    mensaje: '',
  })
  //con esta funcion haremos que cada vez quese escriba algo, se ejecute algo
  function handleChange(event) {
    //creamos copia de los datos
    const newData = { ...datos }
    //cogemos el nombre del input y lo relacionamos con su valor
    newData[event.target.name] = event.target.value;
    setDatos(newData)
    console.log(newData)
  }

  function enviarEmail(event) {
    event.preventDefault();
    //conexión/configuración con EmailJS
    emailjs.init('HEsYcEtJac7K7X0la'); //ID publica
    //conectamos con el servicio y el template
    emailjs.sendForm('service_lqm13s1', 'template_gqgypgm', event.target,).then(res => {
      console.log(res);
    })

    //una vez se envíe, limpiamos los campos del form y enviamos alerta de "success"
    document.getElementById('nombreForm').value = "";
    document.getElementById('apellidosForm').value = "";
    document.getElementById('emailForm').value = "";
    document.getElementById('selectForm').value = "";
    document.getElementById('mensajeForm').value = "";
    alert("Mensaje enviado correctamente!")
  }


  return (

    <div  >
      <form onSubmit={enviarEmail} className='numero bodyContact'>
        <div className='containerContact'>
          <div className='row100'>
            <div className='col1'>
              <div className='inputBox nameForm'>
                <input id="nombreForm" type="text" name="nombre" value={datos.nombre} onChange={handleChange} required="required" />
                <span className='text'>Nombre</span>
                <span className='line'></span>
              </div>
              <div className='inputBox lastnamesForm'>
                <input id="apellidosForm" type="text" name="apellidos" value={datos.apellidos} onChange={handleChange} required="required" />
                <span className='text'>Apellidos</span>
                <span className='line'></span>
              </div>
            </div>
            <div className='col'>
              <div className='inputBox'>
                <input id="emailForm" type="text" name="email" value={datos.email} onChange={handleChange} required="required" />
                <span className='text'>Email</span>
                <span className='line'></span>
              </div>
            </div>
            <div className='col'>
              <div className='select'>
                <select id="selectForm" onChange={handleChange} value={datos.select} name="select">
                  <option value="">{"-"} Seleccionar Plan {"-"}</option>
                  <option value="basic">Plan Basic</option>
                  <option value="advanced">Plan Advanced</option>
                  <option value="premium">Plan Premium</option>
                </select>
              </div>
            </div>
            <div className='col'>
              <div className='inputBox textarea'>
                <textarea id="mensajeForm" type="text" name="mensaje" value={datos.mensaje} onChange={handleChange} required="required"></textarea>
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
      </form>


    </div>
  )
}

export default ContactComp;