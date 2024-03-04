// Referencia a el boton de enviar
const enviarBtn = document.getElementById('enviarBtn');

// Agregue event listener para el botón de enviar
enviarBtn.addEventListener('click', validarForm);

// Función de validación del formulario
function validarForm() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let consulta = document.getElementById("consulta");

    // Agregando funcion asincronica setTimeout
    if (nombre.value.trim() === "") {
        console.log("Esperando 1 segundo antes de mostrar el mensaje de error...");
        setTimeout(function() {
            console.log("Mostrando mensaje de error...");
            Swal.fire({
                position: "center",
                icon: "error",
                text: "¡Complete los campos obligatorios!",
                showConfirmButton: false,
                timer: 1500
            });
        }, 1000); // 1000 milisegundos = 1 segundo
    
    
    
        return false;
    } else {
        Swal.fire({
            title: "¿La información del usuario se encuentra correcta?",
            text: "Por favor, confirme.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "No, eliminar",
            cancelButtonText: "Si, guardar Datos!"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarDatosLS();
                Swal.fire({
                    title: "Eliminado!",
                    text: "¡Los datos de la LocalStorage fueron eliminados correctamente!",
                    icon: "success"
                });
            } else {
                guardarDatosLS();
                Swal.fire({
                    title: "Guardado!",
                    text: "¡Los datos fueron guardados correctamente en la LocalStorage!",
                    icon: "success"
                });
            }
        });
    }
}

// Agregue promesas en la Función para guardar datos en Local Storage
function guardarDatosLS() {
    return new Promise((resolve, reject) => {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;
        let consulta = document.getElementById("consulta").value;

        const datosFormulario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            pass: pass,
            consulta: consulta
        };

        try {
            localStorage.setItem("datosForm", JSON.stringify(datosFormulario));
            console.log("Datos guardados en Local Storage correctamente.");
            resolve("Datos guardados en Local Storage correctamente.");
        } catch (error) {
            console.error("Error al guardar datos en Local Storage: ", error);
            reject("Error al guardar datos en Local Storage: " + error.message);
        }
    });
}

// Función para eliminar datos de Local Storage
function eliminarDatosLS() {
    return new Promise((resolve, reject) => {
        try {
            localStorage.removeItem("datosForm");
            console.log("Datos eliminados de Local Storage correctamente.");
            resolve("Datos eliminados de Local Storage correctamente.");
        } catch (error) {
            console.error("Error al eliminar datos de Local Storage: ", error);
            reject("Error al eliminar datos de Local Storage: " + error.message);
        }
    });
}
// Utilice then para capturar el valor de retorno de la promesa
guardarDatosLS()
    .then((mensaje) => {
        console.log(mensaje);
    })

// Utilice catch para capturar el valor si la promesa es rechazada
    .catch((error) => {
        console.error(error);
    });

eliminarDatosLS()
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });


// Utilice una solicitud POST a JSON Placeholder

    const url = 'https://jsonplaceholder.typicode.com/posts';

    const data = {
      title: 'Visión de la Empresa',
      body: `
        <h2>Visión</h2>
        <p>La visión en una empresa es una declaración a futuro que articula la imagen aspiracional de la organización. A diferencia de la misión, que se enfoca en el presente y en el propósito fundamental, la visión proyecta a dónde la empresa aspira estar en el futuro y cómo visualiza su impacto en el mundo. Esta declaración a menudo se formula en términos ambiciosos y inspiradores, sirviendo como un faro para guiar la estrategia a largo plazo y motivar a los empleados. La visión debería pintar un cuadro claro y emocionante de cómo la empresa visualiza su éxito y contribución al mundo, brindando dirección a medida que la organización avanza hacia sus metas. La visión proporciona un marco que trasciende las operaciones diarias y desafía a la empresa a alcanzar metas más elevadas. Puede incluir metas cuantitativas, como alcanzar un determinado nivel de liderazgo en el mercado, así como aspiraciones más cualitativas, como ser un agente de cambio positivo en la sociedad o innovar de manera revolucionaria en su industria. Una visión eficaz inspira la creatividad y la innovación al presentar un futuro que vale la pena perseguir. También sirve como un punto de referencia para evaluar el progreso y tomar decisiones estratégicas. Las empresas exitosas a menudo alinean su visión con sus valores fundamentales, asegurándose de que la búsqueda de logros esté en armonía con sus principios rectores. Es importante que la visión sea realista y alcanzable, pero al mismo tiempo desafiante. Debe movilizar a los empleados y proporcionar un propósito significativo que trascienda la rutina diaria. Al igual que la misión, la visión puede evolucionar con el tiempo, especialmente en respuesta a cambios en el entorno empresarial o en la estrategia corporativa. En conclusión, la visión en una empresa es una declaración de inspiración que proyecta el destino deseado y el impacto futuro. Al proporcionar una guía a largo plazo y motivar a todos los niveles de la organización, la visión se convierte en una herramienta esencial para impulsar el éxito sostenible y significativo de la empresa.</p>
      `,
      userId: 1
    };
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.json())
    .then(json => console.log(json));
    