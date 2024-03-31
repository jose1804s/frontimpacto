import React from 'react';
import '../styles/home.css';


const Encabezado = () => {
    return (
    <div className="home-container">
        <header className="home-header">
        <img src="/impacto.jpg" alt="Logo" className="logo" />
        <h1 className="impacto">Impacto visual</h1>
        <img src="/impacto.jpg" alt="Logo" className="logo" />
        </header>
        <nav className="menu">
        <a href="#!">Inicio</a>
        <a href="#!">Servicios</a>
        <a href="#!">Contacto</a>
        </nav>
    </div>
    );
};
export default Encabezado;