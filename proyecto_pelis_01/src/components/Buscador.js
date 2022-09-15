import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState,setnoEncontradoBusqueda}) => {

    const [busqueda,setBusqueda] = useState('');
    //const [noEncontrado, setnoEncontrado] = useState(false)

    const buscarPeli = (e) => {
        //Crear estado y actualizarlo
        setBusqueda(e.target.value);

        //listado de pelis con el filtro de coincidencia
        let listados_pelis = listadoState.filter(peli =>{
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
            
        });

        //Si no hay almenos 2 caracteres no hace la busqueda y sale el listado completo
        if(busqueda.length <= 1){
            listados_pelis = JSON.parse(localStorage.getItem("pelis"));
        }
        //Si no encuentra pelis cambia el estado
        if(listados_pelis <= 0){
            setnoEncontradoBusqueda(true);
        }else{
            setnoEncontradoBusqueda(false);
        }

        //cambia el listado que se muestra
        setListadoState(listados_pelis);

    }

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            <form>
                <input type="text" 
                        id='search_field'
                        name='busqueda'
                        autoComplete='off'
                        onChange={buscarPeli}
                />
                <button>Buscar</button>
            </form>
        </div>
    )
}
