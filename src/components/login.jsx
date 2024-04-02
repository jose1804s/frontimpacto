import React, { useState } from 'react';
import '../styles/index.css';
import Encabezado from './encabezado';
import Footer from './footer';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //logica para enviar los datos al servidor

  };

  return (
    <div>
      <Encabezado/>
      <div id='formato1'>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      </div>
      < Footer/>
    </div>
  );
}

export default Login;