import logo from './logo.svg';
import './App.css';
import { Contador } from './Contador';
import { PeticionAjax } from './PeticionAjax';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <PeticionAjax/>
          <hr/>
          <Contador />
        </div>
        
      </header>
    </div>
  );
}

export default App;
