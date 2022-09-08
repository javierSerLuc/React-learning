import React, { useEffect,useState } from 'react'

export const Tarjeta_tiempo_pueblo = ({p,i}) => {

  const [datos, setDatos] = useState();
  const [cargando,setCargando] = useState(true);

  const generadorCODP = () =>{
    let code = p.CODPROV;
    let tmp_index_pueblo = i;
    code +='0';
    
    if(parseInt(tmp_index_pueblo / 10)< 1){
      code+='0'+tmp_index_pueblo;
    }
    else{
      code+=tmp_index_pueblo;
    }
    
    return code;


  };

  const rellenaDatosPueblo = async()=>{

    let code = generadorCODP();
    //console.log(code);
    let url = 'https://www.el-tiempo.net/api/json/v2/provincias/'+ p.CODPROV+'/municipios/'+code;
    console.log(url);

    try {
      const peticion = await fetch(url);
      const data = await peticion.json();

      setDatos(data);
      setCargando(false);
    } catch (error) {
      
    }
    

    
    
  }

  useEffect(() =>{
    setCargando(true);
    rellenaDatosPueblo();
    
  },[]);

  if(cargando){
    return(
      <h3>Cargando datos...</h3>
    )
    
  }
  else{
    return (
      <div className='tarjeta_pueblo'>
        
        {/* <ul>
          <li>TEMPERATURA: {datos.temperatura_actual}</li>
          <li>Cielo: {datos.stateSky.description}</li>
          <li>T. MAX: {datos.temperaturas.max}</li>
          <li>T. MIN: {datos.temperaturas.min}</li>
          <li>Registrado: {datos.fecha}</li>
        </ul> */}
        <span>TEMPERATURA: {datos.temperatura_actual}</span>
        <span>Cielo: {datos.stateSky.description}</span>
        <span>T. MAX: {datos.temperaturas.max}</span>
        <span>T. MIN: {datos.temperaturas.min}</span>
        <span>Registrado: {datos.fecha} </span>
        
          
      </div>
    )
  }
}
