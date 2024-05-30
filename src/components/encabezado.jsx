import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/index.css';
import { Link } from 'react-router-dom';


const Encabezado = () => {
    return (
    <div>
        <header>
        <img src="/impacto.jpg" alt="Logo" className="logo" />
        <h1 className="impacto">Impacto visual</h1>
        <img src="/impacto.jpg" alt="Logo" className="logo" />
        </header>
        <nav className="menu">
            <ul className='menu-lista'>
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/Productos">Productos</Link></li>
                <li><Link className="menu-link" to="/register">Servicios</Link></li>
                <li><Link className="menu-link" to="/register">Sobre Nosotros</Link></li>
            </ul>
        </nav>
    </div>
    );
};
export default Encabezado; 