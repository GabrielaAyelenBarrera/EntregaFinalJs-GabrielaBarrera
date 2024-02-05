// Declare una funcion y use return
function solicitarNombre() {
  let nombreUsuario = prompt("Ingrese su nombre: ");
  return nombreUsuario;
}

// Llame a la función y guarde el resultado en la variable
let nombreUsuario = solicitarNombre();
console.log(nombreUsuario); // Guardo en consola el dato ingresado

// Con Alert muestro un cuadro de diálogo concatenado
alert("Bienvenido/a a GLS: " + nombreUsuario);

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
    id: 7,
    nombre: "Graphic Set Light blue Levi´s",
    color: "lightBlue",
    precio: 35000,
  },
  { id: 8, nombre: "Levi´s Polo Snorkel", color: "white", precio: 48000 },
  { id: 9, nombre: "501 Blues", color: "white", precio: 18390 },
  { id: 10, nombre: "Yellow Levi´s", color: "yellow", precio: 25000 },
  { id: 11, nombre: "My life is good", color: "grey", precio: 45000 },
  { id: 12, nombre: "Relaxed Fit Tee", color: "black", precio: 45000 },
  { id: 13, nombre: "Striped Tee Red", color: "red", precio: 25000 },
  {
    id: 14,
    nombre: "Graphic Set in neck Huckleberry",
    color: "brown",
    precio: 35000,
  },
];

// Veo en consola mi Array con los 15 productos
console.log(productos);

// Busco un elemento en mi Array
let producto = productos.find((item) => item.id === 3);
console.log(producto.nombre + " (" + producto.color + " Colors)");

// Defini la clase Carrito
class Carrito {
  constructor() {
    this.productos = [];
    this.descuento = 15;
    this.maxProductosParaDescuento = 3;
    this.totalPagar = 0;
  }

  agregarProducto(id) {
    let producto = productos.find((prod) => prod.id === id);
    console.log(producto);

    if (producto) {
      this.productos.push(producto);
      console.log("Agregaste el Producto #" + id + " al Carrito!");
    } else {
      console.log("No se encontró el Producto con #" + id + "!");
    }
  }

  // Listo todos los elementos que tenga en el carrito
  listarCarrito() {
    let salida = "";
    // foEach o forOf recorre una vez cada elemento del Array
    this.productos.forEach((item) => {
      salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
    });

    return salida;
  }

  calcularTotalProductos() {
    return this.productos.length;
  }
  // Si tengo 3 o más productos en mi Carrito, aplico un descuento
  aplicarDescuento() {
    if (this.calcularTotalProductos() >= this.maxProductosParaDescuento) {
      // Con math round redondeo el resultado
      return Math.round((this.calcularTotalPagar() * this.descuento) / 100);
    } else {
      return 0;
    }
  }

  calcularTotalPagar() {
    let total = 0;

    this.productos.forEach((item) => {
      total += item.precio;
    });
    return total;
  }
}
// Agregue un nuevo producto
let nuevoProducto = {
  id: 15,
  nombre: "Graphic set in neck Multi Levi´s",
  color: "blue",
  precio: 24000,
};
productos.push(nuevoProducto);
console.log(nuevoProducto);

/*
// Elimino productos del final con pop 
let productoEliminado = productos.pop();
console.log(productos);
console.log(productoEliminado); */

function listarProductos() {
  let salida = "";

  productos.forEach((item) => {
    salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
  });

  return salida;
}

// Ejecuto mi Programa
const carrito = new Carrito();
let opcionSeleccionada = 10;

while (opcionSeleccionada != 0) {
  opcionSeleccionada = parseInt(
    prompt(
      "Seleccione el producto a agregar al Carrito: (0 para Salir)\n\n" +
        listarProductos()
    )
  );

  if (opcionSeleccionada == 0) {
    break;
  }

  carrito.agregarProducto(opcionSeleccionada);
}
// Con productosCarrito veo en el importe los productos seleccionados
let productosCarrito = "Detalle:\n" + carrito.listarCarrito();
let salidaSubTotal = "Subtotal: $" + carrito.calcularTotalPagar();
let salidaDescuento = "Descuento: $" + carrito.aplicarDescuento();
let montoFinal =
  "Total: $" +
  Math.round(carrito.calcularTotalPagar() - carrito.aplicarDescuento());
alert(
  productosCarrito +
    "\n" +
    salidaSubTotal +
    "\n" +
    salidaDescuento +
    "\n" +
    montoFinal
);

// Defini la función para solicitar datos de contacto
function solicitarDatosContacto(email, telefono) {
  console.log("Email ingresado: " + email);
  console.log("Teléfono ingresado: " + telefono);

  // Muestro mensaje de agradecimiento
  const confirmacion = confirm(
    "A la brevedad desde GLServicios nos contactaremos con usted para brindarle mayor información sobre descuentos.\n¿Desea volver al carrito de compras?"
  );
}

// Llamamos a la función con los valores obtenidos de los cuadros de diálogo prompt
let email = prompt("Ingrese su email:");
let telefono = prompt("Ingrese su teléfono:");

// Llamamos a la función con los valores obtenidos de los cuadros de diálogo prompt
solicitarDatosContacto(email, telefono);
