import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import '../styles/index.css';
import Encabezado from './encabezado';
import Footer from './footer';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = { username, password };

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const { token, id, role } = await response.json();
      const userDataResponse = await fetch(`http://localhost:8080/api/v1/user/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!userDataResponse.ok) {
        throw new Error('No se pudieron obtener los datos del usuario');
      }

      const userData = await userDataResponse.json();

      localStorage.setItem('authToken', token);
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('role', role);
      if (role === 'ADMIN') {
        navigate('/Admin');
      } else if (role === 'USER') {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <Encabezado />
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
          <Button variant="contained" type="submit">Login</Button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;