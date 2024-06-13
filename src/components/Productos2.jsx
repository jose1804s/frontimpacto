import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Encabezado2 from './encabezado2';
import Footer from './footer';
import '../styles/index.css';

export default function Productos2() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/productos`);
        if (response.ok) {
          const data = await response.json();
          setProductos(data);
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

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Encabezado2 />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={33.33}
          dynamicHeight={false}
          showStatus={false}
          showIndicators={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} className="arrow prev">
                &#10094;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} className="arrow next">
                &#10095;
              </button>
            )
          }
        >
          {productos.length === 0 ? (
            <Typography>No hay productos disponibles</Typography>
          ) : (
            productos.map((producto) => (
              <div key={producto.id} className="carousel-slide">
                <Card sx={{ maxWidth: 500, height: '100%', display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
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
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => agregarAlCarrito(producto)}
                    style={{ alignSelf: 'center', marginBottom: '10px' }}
                  >
                    Agregar al carrito
                  </Button>
                </Card>
              </div>
            ))
          )}
        </Carousel>
        <Footer />

      </div>
    </>
  );
}