
import './style.scss';
import { SlLayers } from "react-icons/sl";
import { useState, useEffect } from 'react';

function PageLogin() {

  const [name, setName] = useState('')

  useEffect(() => {

    const getUsuario = localStorage.getItem('@Usuario')

    if (getUsuario) {
      window.location.href = `/Home`
    }
  }, [])

  function ColetarNome() {

    if (!name) {
      alert('Insira seu nome')
      return
    }

    localStorage.setItem('@Usuario', name)
    window.location.href = `/Home`
    

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

export default PageLogin;
