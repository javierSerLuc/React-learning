import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

    //const [listadoState,setListadoState] = useState([]);
    const [editar, setEditar] = useState(0);
    useEffect(() =>{
        conseguirPeliculas();
    },[])



    const toggleEditar = (id) =>{
        if(editar === id){
            setEditar(0);
        }
        else{
            setEditar(id);
        }
    }

    const conseguirPeliculas = () =>{
        let peliculas = JSON.parse(localStorage.getItem("pelis"));
        
        setListadoState(peliculas);
        return peliculas;
    }

    const borrarPeli = (id) =>{
        let nuevoListado = listadoState.filter( p => p.id !== parseInt(id) );
        console.log(nuevoListado);
        setListadoState(nuevoListado);
        localStorage.setItem("pelis",JSON.stringify(nuevoListado));
    }

    
    return (
        <>
        {listadoState != null && listadoState.length !== 0 ?
        listadoState.map(p =>{
            return(
                <article key={p.id} className="peli-item">
                    <h3 className="title">{p.titulo}</h3>
                    <p className="description">{p.descripcion}</p>

                    <button className="edit" onClick={() => toggleEditar(p.id)}>Editar</button>
                    <button className="delete" onClick={() =>borrarPeli(p.id)}>Borrar</button>

                    {editar === p.id &&(
                        <Editar peli={p} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListadoState={setListadoState}/>
                    )}
                </article>
            );
        })
        : <h2>No hay pelis uwu</h2>
        
        }
            

            
        </>
    )
}
