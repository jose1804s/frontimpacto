import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', formData.name);
        data.append('description', formData.description);
        data.append('price', formData.price);
        if (formData.image) {
            data.append('image', formData.image);
        }

        try {
            const response = await axios.post('/api/productos', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Producto guardado:', response.data);
        } catch (error) {
            console.error('Error al guardar el producto:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Descripción:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="price">Precio:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="image">Imagen:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Guardar Producto</button>
        </form>
    );
};

export default ProductForm;