import data from './data';
import Pokedex from './componentes/Pokedex';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <main className='container'>
      <div className='position-relative'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png' alt='Imagem Logo Pokemom' className='w-25 mb-5 position-relative top-0 start-50 translate-middle-x'/>
      </div>
      <Pokedex pokemons={ data }/>
    </main>
  );
}

export default App;
