import React from 'react'

export const Editar = ({peli,conseguirPeliculas,setEditar,setListadoState}) => {
    const titulo_componente = "Editar Pelicula";
    const guardarEdicion = (e,id) =>{
        e.preventDefault();
        let form = e.target;

        //Conseguir las pelis almacenadas y el indice de la peli a editar
        let listado = conseguirPeliculas();
       

        
        let indice = listado.findIndex(p => p.id === id);

        let peli_editada ={
            id,
            titulo: form.titulo.value,
            descripcion: form.descripcion.value
        };
        // actualizo el listado
        listado[indice] = peli_editada;


        //guardar en el localStorage y actualizar estados
        localStorage.setItem("pelis", JSON.stringify(listado));
        setListadoState(listado);
        setEditar(0);
    }

  return (
    <div className='edit_form'>
        <hr/>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e,peli.id)}>
            <input  type="text"
                    name='titulo'
                    className='titulo_editado'
                    placeholder='titulo'
                    defaultValue={peli.titulo} />

            <textarea 
                    name='descripcion'
                    defaultValue={peli.descripcion}
                    placeholder='descripcion'
                    className='descripcion_editada' />

            <input type="submit" className='editar' value="actualizar"  />

        </form>
    </div>
  )
}
