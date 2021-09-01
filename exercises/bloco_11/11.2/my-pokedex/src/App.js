import data from './data';
import Pokedex from './componentes/Pokedex';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <main className='container'>
      <h1 className='text-center display-6'> Lista de Pokemons </h1>
      <Pokedex pokemons={ data }/>
    </main>
  );
}

export default App;
