import React, { useState } from "react";

const PropYstates = ({ titulo, parrafo }) => {
  const [productoIndex, setProductoIndex] = useState(0);

  const productos = [
    {nombre: "Less",
     descripcion: "Descubre una amplia variedad de colales sexys que realzan la figura con detalles sensuales y diseños provocativos, ideales para sentirte sexy y segura en cualquier ocasión.",
     imagen: "https://i.pinimg.com/564x/2e/f3/1e/2ef31e024312263a9bad847d88ce9e42.jpg"},
   
    {nombre: "Gabriella",
     descripcion: "Colales de encaje bordó adornada con delicadas perlas, fusionando elegancia y sensualidad en una prenda íntima exquisita. Deslumbra con Estilo",
     imagen: "https://i.pinimg.com/564x/b9/4d/2b/b94d2bb4a4dc7713f0fbb0ec306a1126.jpg"},

    {nombre: "Camila",
     descripcion: "Encaje gris, elegante y sutil, perfecta para agregar un toque de sofisticación a tu colección de lencería.",
     imagen: "https://i.pinimg.com/564x/d1/08/7f/d1087f07dccc54524f476699be1054f6.jpg"},

    {nombre: "Bruma",
     descripcion: "Delicados bordados que combina elegancia y sensualidad para realzar tu feminidad con un toque de sofisticación.",
     imagen: "https://i.pinimg.com/564x/88/bc/ba/88bcba1ba9ee71889938ba52947cbb6a.jpg"},

    {nombre: "Butterfly",
     descripcion: "Una mariposa bordada que evoca la delicadeza y la belleza de la naturaleza, añadiendo un toque de encanto a tu lencería.",
     imagen: "https://i.pinimg.com/564x/0b/66/80/0b6680820e02bfe5049e553198c87ef4.jpg"},

    {nombre: "Milett",
     descripcion: "Una les de encaje negro con apertura en el centro, que combina sensualidad y sofisticación para un toque seductor y elegante en tu lencería.",
     imagen: "https://i.pinimg.com/564x/4a/ed/47/4aed47a1cd98615d199185326a34ec2d.jpg"}];

  const aumentar = () => { const nextIndex = (productoIndex + 1) % productos.length;
    setProductoIndex(nextIndex); };

  const productoActual = productos[productoIndex];
    
// En "titulo" y "parrafo" retorno los cambios aplicados en App.jsx
 
return (
    <div className="container">
      <div className="row my-5">
        <div className="col text-center"><img src="src/assets/images/conjunto-negro-encaje.jpg" alt="Pink" className="img-fluid" /></div>
      </div>
      <div className="row "><div className="col text-center colorNegro p-4">

          <h2 className="text-white">{titulo}</h2>
          <p>{parrafo}</p>
   </div>

  <div className="container">
    <div className="row my-5">
      <div className="col-md-6 offset-md-3">
        <h1 className="text-center mb-4">ROMANTIC PANTIES</h1>
        <img src={productoActual.imagen} alt="Colales Sexys" className="img-fluid mb-3" />
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-primary me-3" onClick={aumentar}>Explorar</button>
          <button className="btn btn-secondary">Comprar</button>
        </div>
        <p className="text-center mb-0">Nombre: {productoActual.nombre}</p>
        <p className="text-center">Descripción: {productoActual.descripcion}</p>
      </div>
    </div>
  </div>


      </div>
      </div>
   
  );
};

export default PropYstates;
