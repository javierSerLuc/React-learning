import React,{useState} from 'react'

export const MiPrimerEstado = () => {

    const [nombre,setNombre] = useState("Javier")

    const cambiarNombre = (nom) =>{
        setNombre(nom);
    } 

  return (
    <div>
        <h3>Componente: Mi primer estado</h3>



        <strong>{nombre}</strong>
        &nbsp;
        <button onClick={e => cambiarNombre("Manolo")}>Cambiar</button>
        &nbsp;
        <input type="text" onKeyUp={e => cambiarNombre(e.target.value)} placeholder='nombre'/>

    </div>
  )
}
