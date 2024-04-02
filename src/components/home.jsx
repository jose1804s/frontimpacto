import React from 'react';
import '../styles/index.css';
import { Link } from 'react-router-dom';
import Encabezado from './encabezado';
import Footer from './footer';

const Home = () => {
    return (
        <div>
            <Encabezado/>
            <div className="content">
                <div className="column">
                    <img src="/cocina.jpg" alt="cocina" className="column-img" />
                    <Link to="/register">
                        <button type="button">registrarse</button>
                    </Link>
                </div>
                <div className="column">
                    <img src="/biblioteca.jpg" alt="Second" className="column-img" />
                    <Link to="/login">
                        <button type="button">Ingresar</button>
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;