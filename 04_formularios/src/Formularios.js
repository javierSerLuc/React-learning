import React, { useState } from 'react'

export const Formularios = () => {

    const [user, setUser] = useState({});

    const mostrarDatosForm = e =>{
        e.preventDefault();
        let datos = e.target;
        let usuario = {
            name: datos.nom.value,
            surname : datos.surname.value,
            gender : datos.gender.value,
            bio : datos.bio.value
        };

        console.log(usuario);
        setUser(usuario);
    }

  return (
    <div>
        <h3>Formularios con React</h3>
        {user.bio && user.bio.length >=1 && (<div className='userData gray'>
            {user.name} has rellenado correctamente todo
        </div>)}
        

        <form onSubmit={mostrarDatosForm}>
            <input type="text" placeholder='Nombre' name='nom'></input>
            <input type="text" placeholder='Apellidos'  name='surname'></input>
            <select placeholder='Genero'  name='gender'>
                <option value="notSelected"  hidden>Género</option>
                <option value="hombre">hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>
            </select>
            <textarea placeholder='Biografía'  name='bio'></textarea>
            <input type='submit' value="enviar" ></input>
        </form>
    </div>
  )
}
