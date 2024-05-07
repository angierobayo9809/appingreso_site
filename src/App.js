import './App.css';
import { ComponenteNoticiasClima } from './componentes/ComponenteNoticiasClima';
import { ComponenteHistorial } from './componentes/ComponenteHistorial';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponenteNoticiasClima/>
        <ComponenteHistorial/>
      </header>
    </div>
  );
}

export default App;
