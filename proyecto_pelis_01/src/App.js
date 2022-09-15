
import { useState } from 'react';
import './App.css';
import { Buscador } from './components/Buscador';
import { Crear } from './components/Crear';
import { Listado } from './components/Listado';

function App() {

    const [listadoState,setListadoState] = useState([]);
    const [noEncontradoBusqueda, setnoEncontradoBusqueda] = useState(false)
    



  return (
    <div className="layout">

        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis Pelis</h1>
        </header>

        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>/
        </nav>

        {/* <button onClick={()=>{console.log(listadoState)}}>Stado listado</button> */}

        <section className="content" id='content'>
        
        {noEncontradoBusqueda ?(
            <h3 className='no-encontrado'>No se han encontrado coincidencias</h3>
        )
        :(
            <Listado listadoState={listadoState} setListadoState={setListadoState}/>

        )}
        {/* <Listado listadoState={listadoState} setListadoState={setListadoState}/> */}

        </section>

        <aside className="lateral">
            <Buscador listadoState={listadoState} setListadoState={setListadoState} setnoEncontradoBusqueda={setnoEncontradoBusqueda}/>

            <Crear setListadoState={setListadoState}/>
        </aside>

        <footer className="footer">
            &copy; Proyecto curso en React por Javier Serrano
        </footer>

    </div>
  );
}

export default App;
