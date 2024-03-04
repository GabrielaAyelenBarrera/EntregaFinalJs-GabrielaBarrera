
  // Defini un Array de Productos
const productos = [
  // Contiene Propiedad y Valor
  { id: 1, nombre: "Graphic Levi´s", color: "blue", precio: 19490 },
  { id: 2, nombre: "Striped Tee", color: "yellow", precio: 24500 },
  { id: 3, nombre: "SS STRIPED TEE RED", color: "grey", precio: 30700 },
  { id: 4, nombre: "White Levi´s", color: "white", precio: 27000 },
  { id: 5, nombre: "Graphic Set in Neck 501", color: "grey", precio: 48200 },
  { id: 6, nombre: "Graphic Button Your Fly", color: "black", precio: 39000 },
  {
    id: 7, nombre: "Graphic Set Light blue Levi´s",color: "lightBlue",precio: 35000},
  { id: 8, nombre: "Levi´s Polo Snorkel", color: "white", precio: 48000 },
  { id: 9, nombre: "501 Blues", color: "white", precio: 18390 },
  { id: 10, nombre: "Yellow Levi´s", color: "yellow", precio: 25000 },
  { id: 11, nombre: "My life is good", color: "grey", precio: 45000 },
  { id: 12, nombre: "Relaxed Fit Tee", color: "black", precio: 45000 },
  { id: 13, nombre: "Striped Tee Red", color: "red", precio: 25000 },
  { id: 14, nombre: "Graphic Set in neck Huckleberry",color: "brown", precio: 35000 },
];

// Converti el array de productos a JSON
const productosJSON = JSON.stringify(productos);

// Almacene el JSON en el localStorage con una clave específica
localStorage.setItem("productos", productosJSON);


// Veo en consola mi Array con los 15 productos
console.log(productos);

