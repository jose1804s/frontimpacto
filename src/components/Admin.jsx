import React, { useState, useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom'; 
import '../styles/index.css';



function Administrador() {
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
        <header>
        <img src="/impacto.jpg" alt="Logo" className="logo" />
        <h1 className="impacto">Impacto visual</h1>
        <img src="/impacto.jpg" alt="Logo" className="logo" />
        </header>
        <nav className="menu">
            <ul className='menu-lista'>
                <li><Link className="menu-link" to="/Admin">Dashboard</Link></li>
                <li><Link className="menu-link" to="/Admin">Pedidos</Link></li>
                <li><Link className="menu-link" to="/NewProduct">Nuevo Producto</Link></li>
                <li><Link className="menu-link" to="/Modificar">Modificar Producto</Link></li>
            </ul>
        </nav>
        <h1>Bienvenido: Administrador Impacto Visual</h1>
        {userData ? renderUserDataTable(userData) : <p>Cargando datos del usuario...</p>}
        <button onClick={logout} style={{marginTop: "20px"}}>Cerrar Sesión</button> 
      </div>
      
    );
  }
  
  export default Administrador;