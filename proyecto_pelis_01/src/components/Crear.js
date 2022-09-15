import React, { useState } from 'react'
import { GuardarEnStorage } from '../Helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const titulo = "Añadir Pelicula";
    const [peliState, setPeli] = useState({
        titulo:'',
        descripcion:''
    });

    const conseguirDatosForm = e=>{
        e.preventDefault();

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        setPeli(peli);

        setListadoState((elementos)=>{
            return[...elementos,peli]
        });
        
        GuardarEnStorage("pelis",peli);
        

    }

    

    return (
        <div className="add">
            <h3 className="title">{titulo}</h3>

            {(peliState.titulo && peliState.descripcion) && peliState.titulo}

            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                        id='titulo'
                        name='titulo'
                        placeholder="Titulo" />

                <textarea
                        id='descripcion'
                        name='descripcion'
                        placeholder="Descripcion"></textarea>

                <input type="submit"
                        id='save'
                        value="guardar" />
            </form>

        </div>
    )
}
