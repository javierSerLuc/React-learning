import React from 'react'

export const CuartoComponente = () => {

 
  const handlersEvent = (e,estado) => {
    
        
    switch(estado){
        case 0:
            console.log("Has dado click");
            break;
        case 1:
            console.log("Has dado Dobleclick");
            break;
        case 2:
            document.getElementById("pasar").innerHTML =" Sal ya anda"
            break;
        case 3:
            document.getElementById("pasar").innerHTML =" Era bromi"
            break;


    }
  }

  return (
    <div>
        <h1>Eventos en React</h1>
        <p>
            <button onClick={ e => handlersEvent(e,0)} onDoubleClick={e => handlersEvent(e,1)}>dame click</button>
        </p>

        <div id="caja" onMouseEnter={ e => handlersEvent(e,2)} onMouseLeave={e => handlersEvent(e,3)}>
            <span id="pasar">Pasa dentro de mi</span>
        </div>
    </div>
  )
}
