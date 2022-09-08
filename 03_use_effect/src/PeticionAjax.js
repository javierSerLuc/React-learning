import React, { useEffect,useState } from 'react'
import { Tarjeta_tiempo_pueblo } from './Tarjeta_tiempo_pueblo';

export const PeticionAjax = () => {
    
    const [disponibles, setDisponibles] = useState([]);
    const [pueblos,setPueblos] = useState([]);
    const [info,setInfo] = useState(0);
    const [index_municipio,setIndex] = useState(68);

    const rellenar = async() =>{
        let url = 'https://www.el-tiempo.net/api/json/v2/provincias';
        
         const peticion = await fetch(url);
         const {provincias} = await peticion.json();

         setDisponibles(disponibles.concat(provincias));

        
    }

    const cargarMunicipios = async(val) =>{
        let url = 'https://www.el-tiempo.net/api/json/v2/provincias/'+val+'/municipios';
        //console.log(url);
        
         const peticion = await fetch(url);
         const {municipios} = await peticion.json();
         const pueb_bien = [];


         Object.keys(municipios).forEach(function(key, index) {
            pueb_bien.push(municipios[key]);
          });
          setPueblos(pueb_bien);
          setInfo(0);
         

    };

    const mostrarInfo = (val) =>{

        let encontrado = false;
        let ident= 0;
        if(val !==""){
            console.log(val);
            for(let i = 0; i < pueblos.length && !encontrado;i++){
                console.log(pueblos[i].CODIGOINE);
                if(pueblos[i].CODIGOINE == parseInt(val)){
                    console.log("encontrado");
                    encontrado=true;
                    ident = i; 
                    console.log(i);
                    console.log(ident);
                }
            }
            if(encontrado){
                setInfo(pueblos[ident]);
               // index_municipio=parseInt(ident) + 1 ;
                setIndex(ident + 1);
                //console.log(ident);
                //console.log(index_municipio);
                //console.log(index_municipio);
                

            }
            else{
                setInfo(-1);
            }
        }
    };




    useEffect(() =>{
        rellenar();
    },[]);
    

  return (
    <div>
        <h2>Estacion Meteorologica Montegramo</h2>
          {/* <button onClick={e => rellenar()}>Rellenar</button>
          <button onClick={e => console.log(disponibles)}></button> */}

        {/* <button onClick={e => console.log(pueblos)}>ve Pueblos</button>
        <button onClick={e => console.log(disponibles)}>Ver DIS</button>
        <button onClick={e => console.log(info)}>Ver INFO</button> */}
          
        <select onChange={e => cargarMunicipios(e.target.value)}>
        <option value=""   hidden></option>
            {
                disponibles.map((pr) =>{
                    //return <li key={indice}>{libro}</li>
                    return <option value={pr.CODPROV} key={pr.CODPROV}>{pr.NOMBRE_PROVINCIA}</option>
                })
            }
        </select>

        {pueblos.length > 0 || info == 0 ?
            (   <select onChange={e => mostrarInfo(e.target.value)}>
                { <option value=""   hidden></option> }
                {
                   pueblos.map((pr) =>{
                    return <option value={pr.CODIGOINE} key={pr.CODIGOINE}>{pr.NOMBRE}</option>
                    }) 
                }
                </select>
                
                // {!Number.isInteger(info) ? 
                //     (
                //         <Tarjeta_tiempo_pueblo p={info} l={pueblos.length} i={index_municipio}/>
                //     ) 
                //     : (<p>error</p>)}
                
            )
            :(<p>Ha ocurrido un error</p>)
        
        } 

        
        {!Number.isInteger(info) && <Tarjeta_tiempo_pueblo p={info}  i={index_municipio} key={info.NOMBRE}/>}
        
        

       
        
        
        
        
    </div>
  )
}
