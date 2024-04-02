import React from 'react';
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
                <li><Link className="menu-link" to="/login">Productos</Link></li>
                <li><Link className="menu-link" to="/register">Servicios</Link></li>
                <li><Link className="menu-link" to="/register">Sobre Nosotros</Link></li>
                <li><Link className="menu-link" to="/register">Sigue tu pedido</Link></li>
            </ul>
        </nav>
    </div>
    );
};
export default Encabezado;