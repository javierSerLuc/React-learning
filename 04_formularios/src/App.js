import logo from './logo.svg';
import './App.css';
import { Formularios } from './Formularios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formularios/>
      </header>
    </div>
  );
}

export default App;
