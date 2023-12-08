import React, { useEffect, useState } from "react";
import './style.scss';

function Home() {
    const [usuario, setUsuario] = useState('');

    useEffect(() => {
        const getNome = localStorage.getItem('@Usuario');

        if (!getNome) {
            // Redirect to the login page if no name is found in localStorage
            window.location.href = '/';
        } else {
            setUsuario(getNome);
        }
    }, []);

    return (
        <div className="container">
            <header className="containerHeader">
                <h1>Bem-vindo {usuario}</h1>
                <span>Seus compromissos</span>
            </header>

            <main className="containerMain">
                <ul>
                    <li>
                        <button>
                            <div className="card">
                                <p>Segunda-feira</p>
                                <span>0</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <div className="card">
                                <p>Terça-feira</p>
                                <span>1</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <div className="card">
                                <p>Quarta-feira</p>
                                <span>5</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <div className="card">
                                <p>Quinta-feira</p>
                                <span>0</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <div className="card">
                                <p>Sexta-feira</p>
                                <span>3</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <div className="card">
                                <p>Sábado</p>
                                <span>15</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <div className="card">
                                <p>Domingo</p>
                                <span>10</span>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <div className="card">
                                <p>Extra</p>
                                <span>+</span>
                            </div>
                        </button>
                    </li>
                </ul>
            </main>

            <nav className="containerNav">
                <button>+</button>
            </nav>
        </div>
    );
}

export default Home;
