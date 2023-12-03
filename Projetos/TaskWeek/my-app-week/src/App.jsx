
import './App.scss';
import { SlLayers } from "react-icons/sl";
import { useState } from 'react';

function App() {

  const [name, setName] = useState('')

  function ColetarNome() {
    if(!name){
      alert('Insira seu nome')
      return
    }

    alert(name)
  }

  return (
    <div className="App">

      <section className='logo'>
        <h1>TASKWEEK</h1>
        <SlLayers className='iconLogo' />
      </section>

      <input
        onChange={e => { setName(e.target.value) }}
        type="text" placeholder='Digite seu nome' />

      <button
        onClick={() => ColetarNome()}> Acessas </button>
    </div>
  );
}

export default App;
