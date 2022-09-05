import React,{useState} from 'react'
import { Alerta } from './Alerta';

export const Contador = () => {

    let cont_0 = 0;
    const [it,setIt] = useState(cont_0);

    const iterar = (accion) =>{
        switch(accion){
            case 1:
                setIt(it + 1);
                break;
            case -1:
                setIt(it - 1);
                break;
            default:
                setIt(0);
                break;

        }
    };

    

    
    

  return (
    <div className={it >=10 ? 'contador green' : 'contador' }>
        <strong>{it}</strong>
        <p>
            <button onClick={e => iterar(1)}>+</button>
            <button onClick={e => iterar(-1)}>-</button>
        </p>

        <p>{it >= 10 && <Alerta clicks={it} /> }</p>
    </div>
  )
}
