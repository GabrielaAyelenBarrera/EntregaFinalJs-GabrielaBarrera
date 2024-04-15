import React from "react";

// Componente reutilizable para mostrar los detalles de un producto
const DetalleProducto = ({ producto }) => {
  return (
    <div className="card">
      <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">Precio: ${producto.precio}</p>
        <p className="card-text">Descripción: {producto.descripcion}</p>
      </div>
    </div>
  );
};

// Componente principal que muestra los detalles de varios productos
const CompFn = () => {
  // Definición de los productos
  const productos = [
    {id: 1,
     nombre: "Charlotte",
     imagen: "https://i.pinimg.com/564x/75/75/28/7575289256de0828d367f4e9194d8421.jpg",
     precio: 15000,
     descripcion: "Un conjunto de lencería bordo es una opción sensual y elegante que combina sujetador y braguita en un tono rojo oscuro, aportando un toque de sofisticación y glamour a la intimidad."},

    {id: 2,
     nombre: "Carolaine",
     imagen: "https://i.pinimg.com/736x/bd/f3/94/bdf394ddfa78674c7e36abc7d01223b9.jpg",
     precio: 18900,
     descripcion: "Un conjunto de lencería blanco es una opción clásica y atemporal que combina sujetador y braguita en un tono blanco, evocando pureza y delicadeza para momentos íntimos o especiales."},

    {id: 3,
     nombre: "Aura",
     imagen: "https://i.pinimg.com/564x/b5/50/b7/b550b79956f63e28422eb90d82d17bf5.jpg",
     precio: 10000,
     descripcion: "Un conjunto de lencería amarillo es una elección vibrante y alegre que combina sujetador y braguita en tonos de amarillo, agregando un toque de energía y frescura a la intimidad y resaltando la belleza de quien lo lleva puesto."}
  ];

  return (
    <div className="container">
      <div className="row ">
        <div className="col text-center">
          {<h1>BRA & PANTY SETS</h1>}
        </div>
      </div>
      <div className="row my-0">
        <div className="col-md-6 offset-md-3">
          <div className="card-deck">
            {/* Mapeo de los productos para mostrar sus detalles */}
            {productos.map(producto => (<DetalleProducto key={producto.id} producto={producto} />))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompFn;

