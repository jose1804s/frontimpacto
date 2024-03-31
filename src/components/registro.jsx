import React from 'react';
import { useState } from 'react';
import '../styles/registro.css';
import Encabezado from './encabezado';



function RegistroForm() {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [tipoPersona, setTipoPersona] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [direccion, setDireccion] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar las acciones necesarias con los datos del formulario
        console.log('Datos del formulario:', {
            usuario,
            contrasena,
            tipoPersona,
            tipoDocumento,
            numeroDocumento,
            nombres,
            apellidos,
            direccion,
            correo,
            telefono
        });
    };

    return (
        <div>
        <Encabezado/>
        <form onSubmit={handleSubmit}>
            <label>
                Usuario:
                <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            </label>
            <br />
            <label>
                Contraseña:
                <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
            </label>
            <br />
            <label>
                Tipo de persona:
                <select value={tipoPersona} onChange={(e) => setTipoPersona(e.target.value)}>
                    <option value="">Seleccione...</option>
                    <option value="natural">Natural</option>
                    <option value="juridica">Jurídica</option>
                </select>
            </label>
            <br />
            <label>
                Tipo de documento:
                <select value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
                    <option value="">Seleccione...</option>
                    <option value="cc">CC</option>
                    <option value="ce">CE</option>
                    <option value="pa">PA</option>
                </select>
            </label>
            <br />
            <label>
                Número de documento:
                <input type="text" value={numeroDocumento} onChange={(e) => setNumeroDocumento(e.target.value)} />
            </label>
            <br />
            <label>
                Nombres:
                <input type="text" value={nombres} onChange={(e) => setNombres(e.target.value)} />
            </label>
            <br />
            <label>
                Apellidos:
                <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
            </label>
            <br />
            <label>
                Dirección:
                <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            </label>
            <br />
            <label>
                Correo:
                <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
            </label>
            <br />
            <label>
                Teléfono:
                <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </label>
            <br />
            <button type="submit">Registrarse</button>
        </form>
    </div>
    );
}

export default RegistroForm;