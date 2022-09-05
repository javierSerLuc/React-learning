import React,{useState} from 'react'
import Proptypes from "prop-types";

export const Ejercicio = ({fecha}) => {

    const [year,setYear] = useState(fecha);

    const cambiarYear = (direc) => {
        switch(direc){
            case 1:
                setYear(year + 1);
                break;
            case -1:
                setYear(year -1);
                break;
            default:
                console.log("Error");
                break;

        }
    }

    const escribirYear = e =>{
        let dato = parseInt(e.target.value);
        
        if(Number.isInteger(dato)){
            setYear(dato);
        }
        else{
            setYear(fecha);
        }
    }

  return (
    <div>
        <strong>{year}</strong>
        <p>
            <button onClick={e => cambiarYear(1)}>+</button>
            <button onClick={e => cambiarYear(-1)}>-</button>

        </p>
        <p>
            <input type="text" onChange={e=> escribirYear(e)}></input>
        </p>
    </div>
  )
}

Ejercicio.propTypes ={
    fecha: Proptypes.number.isRequired
}
