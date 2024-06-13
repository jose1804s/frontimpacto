import React from 'react';
import '../styles/index.css';
import Encabezado from './encabezado';
import Footer from './footer';

const SobreNosotros = () => {
    return (
        <div>
            <Encabezado/>
            <div className="sobre-nosotros">
                <h1>Sobre Nosotros</h1>
                <p>
                    Nuestra empresa nació del deseo de convertir los sueños de nuestros clientes en realidad. Creemos que cada hogar debe ser un reflejo de los sueños y aspiraciones de quienes lo habitan, y nos dedicamos a brindar las herramientas necesarias para el diseño e instalación de interiores.
                </p>
                <p>
                    Con años de experiencia en el sector, nuestro equipo de expertos trabaja incansablemente para ofrecer soluciones personalizadas que se adaptan a las necesidades y gustos individuales de cada cliente. Desde el concepto inicial hasta la instalación final, estamos comprometidos con la excelencia en cada paso del proceso.
                </p>
                <p>
                    Nuestro objetivo es no solo satisfacer, sino superar las expectativas de nuestros clientes, transformando espacios comunes en lugares extraordinarios donde vivir y disfrutar. 
                </p>
                <p>
                    Gracias por confiar en nosotros para hacer realidad sus sueños de un hogar perfecto. Estamos aquí para acompañarlos en cada paso del camino.
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default SobreNosotros;