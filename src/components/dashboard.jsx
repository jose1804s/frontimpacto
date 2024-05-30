import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Encabezado from './encabezado';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/index.css';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if(storedUserData) {
      setUserData(storedUserData);
    } else {
      navigate('/login'); 
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  const renderUserDataTable = (userData) => (
    <div className="user-data-table">
      {Object.entries(userData).map(([key, value]) => (
        key !== 'id' && (
          <React.Fragment key={key}>
            <div className="cell label">{key}</div>
            <div className="cell value">{value}</div>
          </React.Fragment>
        )
      ))}
    </div>
  );

  return (
    <div>
      <Encabezado />
      <h1>Bienvenido: {userData ? userData.firstname : 'Cargando...'}</h1>
      {userData ? renderUserDataTable(userData) : <p>Cargando datos del usuario...</p>}
      <button onClick={logout} style={{marginTop: "20px"}}>Cerrar Sesión</button> 
    </div>
  );
}

export default Dashboard;