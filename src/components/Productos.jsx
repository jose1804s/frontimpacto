import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import Encabezado from './encabezado';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/productos`);
        if (response.ok) {
          const data = await response.json();
          setProductos(data); // Establecer todos los productos en el estado
        } else {
          throw new Error('No se pudieron obtener los productos');
        }
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Encabezado />
      <Grid container spacing={1}>
        {productos.length === 0 ? (
          <Typography>No hay productos disponibles</Typography>
        ) : (
          productos.map((producto) => (
            <Grid item xs={12} sm={4} md={4} key={producto.id}>
              <Card sx={{ maxWidth: 500, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  sx={{ width: '100%', height: 200, objectFit: 'cover' }}
                  image={`data:image/jpeg;base64,${producto.image}`}
                  alt={producto.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {producto.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontSize='1rem'>
                    {producto.description}
                  </Typography>
                  <Typography variant="body2" style={{ fontWeight: 'bold' }} fontSize='1.5rem'>
                    {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP' }).format(producto.price)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
}
