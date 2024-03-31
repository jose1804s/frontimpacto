import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Encabezado from './encabezado';

const Home = () => {
    return (
        <div className="home-container">
            <Encabezado/>
            <div className="content">
                <div className="column">
                    <img src="/cocina.jpg" alt="cocina" className="column-img" />
                    <Link className="registro" to="/register">
                        <button button type="button">registrarse</button>
                    </Link>
                </div>
                <div className="column">
                    <img src="/biblioteca.jpg" alt="Second" className="column-img" />
                    <Link className="login" to="/login">
                        <button button type="button">Ingresar</button>
                    </Link>
                </div>
            </div>
            <footer className="home-footer">
                <p>Texto grande en el pie de página</p>
            </footer>
        </div>
    );
};

export default Home;