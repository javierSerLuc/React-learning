import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './componentes/MiPrimerEstado';
import { Ejercicio } from './componentes/Ejercicio';



function App() {
  let fecha = new Date();
  let year = fecha.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El hook useState</h1>
        <div>
          <Ejercicio fecha = {year}/>
          <hr/>
          <MiPrimerEstado/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
