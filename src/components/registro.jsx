import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState } from 'react';
import '../styles/registro.css';
import Encabezado from './encabezado';
import Footer from './footer';

function RegistroForm() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [persontype, setpersontype] = useState('');
    const [documenttype, setdocumenttype] = useState('');
    const [documentnumber, setdocumentnumber] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Datos del formulario que se van a enviar
        const datosFormulario = {
            username,
            password,
            persontype,
            documenttype,
            documentnumber,
            firstname,
            lastname,
            address,
            email,
            phone
        };

        console.log('Enviando datos del formulario:', datosFormulario);

        try {
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosFormulario),
            });

            if (!response.ok) {
                // Si la respuesta no es satisfactoria
                throw new Error('La solicitud falló');
            }

            //mostrar un mensaje de éxito
            const responseData = await response.json();
            console.log('Respuesta del servidor:', responseData);
            alert('Registro completado con éxito');
        } catch (error) {
            // Manejo de errores en la solicitud o en la respuesta
            console.error('Error al enviar el formulario:', error);
            alert('Error al enviar el formulario');
        }
    };

    return (
        <div>
            <Encabezado />
            <form onSubmit={handleSubmit}>
                <label>
                    Usuario:
                    <input type="text" value={username} onChange={(e) => setusername(e.target.value)} />
                </label>
                <br />
                <label>
                    Contraseña:
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                </label>
                <br />
                <label>
                    Tipo de persona:
                    <select value={persontype} onChange={(e) => setpersontype(e.target.value)}>
                        <option value="">Seleccione...</option>
                        <option value="natural">Natural</option>
                        <option value="juridica">Jurídica</option>
                    </select>
                </label>
                <br />
                <label>
                    Tipo de documento:
                    <select value={documenttype} onChange={(e) => setdocumenttype(e.target.value)}>
                        <option value="">Seleccione...</option>
                        <option value="cc">CC</option>
                        <option value="ce">CE</option>
                        <option value="pa">PA</option>
                    </select>
                </label>
                <br />
                <label>
                    Número de documento:
                    <input type="text" value={documentnumber} onChange={(e) => setdocumentnumber(e.target.value)} />
                </label>
                <br />
                <label>
                    Nombres:
                    <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                </label>
                <br />
                <label>
                    Apellidos:
                    <input type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} />
                </label>
                <br />
                <label>
                    Dirección:
                    <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} />
                </label>
                <br />
                <label>
                    email:
                    <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
                </label>
                <br />
                <label>
                    Teléfono:
                    <input type="tel" value={phone} onChange={(e) => setphone(e.target.value)} />
                </label>
                <br />
                <button type="submit">Registrarse</button>
            </form>
            <Footer />
        </div>
    );
}

export default RegistroForm;