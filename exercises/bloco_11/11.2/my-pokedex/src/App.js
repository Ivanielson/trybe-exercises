import Pokemon from './componentes/Pokemon';
import data from './data';
import './App.css';

function App() {
  return (
    <main>
      <Pokemon pokemon={data[0]}/>
    </main>
  );
}

export default App;
