import React from 'react'

export const MiComponente = () => {

 

  let usuario = {
    nombre: "Javier",
    rango: "dios"
  };


  return (
    <div className='micomponente'>
      <h2>Datos del usuario</h2>
      <ul>
        <li>Nombre: {usuario.nombre}</li>
        <li>Rango : {usuario.rango}</li>
      </ul>
    </div>
  )
}
