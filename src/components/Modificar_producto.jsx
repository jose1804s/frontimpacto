import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './footer';

function ModificarProductoForm() {
  const [productId, setProductId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    if (image) {
      formData.append('image', image);
    }

    const token = localStorage.getItem('authToken');
    console.log('Token almacenado:', token);
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/productos/update/${productId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
        withCredentials: true,
      });

      console.log('Respuesta del servidor:', response);

      if (response.status === 200) {
        setMessage('Producto actualizado exitosamente');
      } else {
        setMessage('Error al actualizar el producto');
      }
    } catch (error) {
      setMessage('Error al actualizar el producto');
      console.error('Error al actualizar el producto:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

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
          <li><Link className="menu-link" to="/NewProduct">Nuevo Producto</Link></li>
          <li><Link className="menu-link" to="/Modificar">Modificar Producto</Link></li>
        </ul>
      </nav>
      <h1>Modificar Producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productId">ID del Producto:</label>
          <input
            type="text"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Imagen:</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Actualizar Producto</button>
      </form>
      {message && <p>{message}</p>}
      <Footer />
    </div>
  );
}

export default ModificarProductoForm;