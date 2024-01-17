// Declaración de variables:
// let unNombre = "Gabriela" //Esto es una asignación
// let nombreEmpresa = "Glamit"

// Concateno variables y les agrego un espacio entre palabras
// let concatenarConEspacio = unNombre + " " + nombreEmpresa
// console.log (concatenarConEspacio)

// Muestro un cuadro de diálogo con la función prompt
let nombreUsuario = prompt("Ingrese su nombre: ");
console.log(nombreUsuario); //Guardo en consola el dato ingresado

// Muestro un cuadro de diálogo con la función prompt
let empresaUsuario = prompt("Ingrese el nombre de su empresa: ");
console.log(empresaUsuario); //Guardo en consola el dato ingresado

// Con Alert muestro un cuadro de diálogo concatenado
alert(
  "Bienvenida/o a GLS: " + nombreUsuario + " de la empresa " + empresaUsuario
);

let volverAlMenu = true;

while (volverAlMenu) {
  let opcionServicio;

  // Pido al usuario que ingrese una opción válida del 1 al 4
  while (true) {
    opcionServicio = prompt(
      "¿Qué servicio desea adquirir?\n1- Capacitación en logística.\n2- Administración logística de sus productos en nuestras instalaciones.\n3- Infraestructura de venta ecommerce.\n4- Otros."
    );
    console.log(opcionServicio); // Guardo en consola el dato ingresado

    // Valida que la opción sea un número entre 1 y 4
    if (/^[1-4]$/.test(opcionServicio)) {
      break; // Sale del bucle si la opción es válida
    } else {
      alert(
        "Lo siento, la opción ingresada es incorrecta. Por favor, digite un número del 1 al 4."
      );
    }
  }

  // Convierte la opción a minúsculas para hacer la comparación insensible a mayúsculas/minúsculas
  opcionServicio = opcionServicio.toLowerCase();
  // Defini variables para almacenar información adicional
  let opcionEspecialista, opcionProductos, opcionExperiencia, detallesAyuda;

  // Realiza acciones basadas en la opción del servicio seleccionado
  if (opcionServicio === "1") {
    opcionEspecialista = prompt(
      "Usted seleccionó la opción 1. Puede elegir a uno de nuestros especialistas:\nA- Gabriel.\nB- Esteban.\nC- Sebastian."
    );
    console.log(opcionEspecialista); // Guardar en consola el dato ingresado

    // Establecer el costo por hora del especialista
    const costoHoraEspecialista = 100;

    // Preguntar al usuario cuántas horas precisa de asesoría
    let horasAsesoria = parseFloat(
      prompt(
        `El costo por hora de consultoría es de ${costoHoraEspecialista} USD.\n¿Cuántas horas precisa de asesoramiento para su empresa con ${opcionEspecialista}?`
      )
    );

    // Validar que el número de horas sea válido
    if (!isNaN(horasAsesoria) && horasAsesoria > 0) {
      // Calcular el costo total
      const costoTotal = costoHoraEspecialista * horasAsesoria;

      // Mostrar el costo total por las horas seleccionadas de asesoramiento
      alert(
        `El costo total por las ${horasAsesoria} horas de asesoramiento que tu empresa necesita es de ${costoTotal} USD.`
      );
    } else {
      alert(
        "El número de horas ingresado no es válido. Por favor, ingrese un número mayor a cero."
      );
    }

    // Salir del bucle
    volverAlMenu = false;
  } else if (opcionServicio === "2") {
    const opcionesProductos = {
      a: "Bienes de consumo.",
      b: "Productos perecederos.",
      c: "Materias primas.",
      d: "Productos farmacéuticos.",
      e: "Productos industriales.",
      f: "Productos químicos.",
      g: "Electrónicos.",
    };

    opcionProductos = prompt(
      `Usted seleccionó la opción 2. ¿Qué productos desea almacenar?\n${Object.keys(
        opcionesProductos
      )
        .map((key) => key.toUpperCase() + "- " + opcionesProductos[key])
        .join("\n")}`
    );

    // Converti la opción a mayúsculas para comparar con las claves del objeto
    opcionProductos = opcionProductos.toLowerCase();

    // Solicite información adicional basada en la opción de productos seleccionada
    if (opcionesProductos[opcionProductos]) {
      const subOpciones = {
        a: { 1: "Electrodomésticos", 2: "Electrónicos", 3: "Ropa", 4: "Otros" },
        b: { 1: "Alimentos frescos", 2: "Congelados", 3: "Otros" },
        c: { 1: "Insumos textiles", 2: "Insumos metálicos", 3: "Otros" },
        d: { 1: "Medicamentos", 2: "Productos relacionados", 3: "Otros" },
        e: { 1: "Equipos", 2: "Maquinaria", 3: "Otros productos industriales" },
        f: { 1: "Sustancias químicas", 2: "Otros productos químicos" },
        g: {
          1: "Componentes electrónicos",
          2: "Dispositivos",
          3: "Accesorios",
        },
      };

      if (subOpciones[opcionProductos]) {
        const opcionEspecifica = prompt(
          `Usted seleccionó la opción: ${opcionProductos.toUpperCase()}- ${
            opcionesProductos[opcionProductos]
          }. Especifique qué ${
            opcionesProductos[opcionProductos]
          } sería:\n${Object.keys(subOpciones[opcionProductos])
            .map(
              (key) =>
                key.toUpperCase() + "- " + subOpciones[opcionProductos][key]
            )
            .join("\n")}`
        );
        // Aca el usuario puede realizar acciones adicionales según la opción específica
      }
    }
  } else if (opcionServicio === "3") {
    opcionExperiencia = prompt(
      "Usted seleccionó la opción 3. Seleccione una opción a continuación:\nA- Tengo experiencia previa en este rubro.\nB- No tengo experiencia previa en este rubro."
    );
  } else if (opcionServicio === "4") {
    detallesAyuda = prompt(
      "Usted seleccionó la opción 4. Por favor, detalle a continuación en qué podemos ayudarte:"
    );
    console.log(detallesAyuda); //Guardo en consola el dato ingresado
  } else {
    console.log(
      "Opción no válida. Por favor, seleccione una opción del 1 al 4."
    );
    // Si la opción no es válida, no se ejecuta el bloque siguiente y volverAlMenu permanece true
    continue;
  }

  // Solicita email y teléfono al final de todas las opciones
  let email = prompt("Ingrese su email:");
  console.log(email); //Guardo en consola el dato ingresado

  let telefono = prompt("Ingrese su teléfono:");
  console.log(telefono); //Guardo en consola el dato ingresado

  // Mostrar mensaje de agradecimiento
  const confirmacion = confirm(
    "A la brevedad desde GLServicios nos contactaremos con usted para brindarle mayor información sobre el servicio solicitado.\n¿Desea volver al menú inicial?"
  );

  // Si el usuario elige "Cancelar" en la confirmación, no vuelve al menú inicial
  volverAlMenu = confirmacion;
}
