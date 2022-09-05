import React,{useEffect} from 'react'

export const Alerta = ({clicks}) => {

    useEffect(()=>{
        alert("Se ha cargado la alerta");

        return() =>{
            alert("Ya no sale la alerta");
        }
    },[]/**Una vez porque el array esta vacio */)

  return (
    <div>
        <h3>Genial has conseguido: {clicks} clicks!!</h3>
        
    </div>
  )
}
