import logo from './logo.svg';
import './App.css';
import { MiComponente } from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { CuartoComponente } from './CuartoComponente';



function App() {
  const datos = {
    altura:"1.80",
    sexo:"por favor"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo.
        </p>

        <div className='componentes'>
          <CuartoComponente/>
          <hr/>
          <TercerComponente
            datos = {datos}
          />
          <hr/>
          <SegundoComponente/>
          <hr/>
          <MiComponente/>
        </div>
        
        
      </header>
    </div>
  );
}

export default App;
