import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Encabezado from './encabezado';

function TarjetaProducto({ imagen, titulo, descripcion }) {
  return (
    <Card sx={{ maxWidth: 500, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="200"
          image={imagen}
          alt={titulo}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}

export default function Productos() {
  const productos = [
    {
      imagen: "/cocina.jpg",
      titulo: "COCINA",
      descripcion: "Hermosa cocina, mezcla elegancia y modernidad haciendo de tu cocina un espacio agradable donde podran surgir grandes platos."
    },
    {
      imagen: "/biblioteca.jpg",
      titulo: "Biblioteca principal",
      descripcion: "Ideal para guardar tus colecciones mas preciadas."
    },
  ];

  return (
    <>
      <Encabezado />
      <Grid container spacing={1}>
        {productos.map((producto, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <TarjetaProducto 
              imagen={producto.imagen}
              titulo={producto.titulo}
              descripcion={producto.descripcion}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
