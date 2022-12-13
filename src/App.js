import './App.css';
import { NavBar } from './components/NavBar';
import { Pokedex } from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container'>
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
