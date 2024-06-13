import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/index.css';

const Footer = () => {
    return (
        <div className="container-footer">
            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Ubicación</h3>
                        <p>carrera 16 14-24, Santa Rosa, Risaralda</p>
                    </div>
                    <div className="footer-section">
                        <h3>Redes Sociales</h3>
                        <p>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </p>
                        <p>
                            <a href="https://www.facebook.com/profile.php?id=61551393119288" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3>Contacto</h3>
                        <p>Teléfonos: 3174836224 / 3153363588</p>
                        <p>Correo: soporte@impactovisual.com.co</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;