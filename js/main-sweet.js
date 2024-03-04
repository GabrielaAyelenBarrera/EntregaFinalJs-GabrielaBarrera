// Referencia a los botones
const enviarBtn = document.getElementById('enviarBtn');

// Agregar event listener para el botón de enviar
enviarBtn.addEventListener('click', validarForm);

// Función de validación del formulario
function validarForm() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    let consulta = document.getElementById("consulta");

    if (nombre.value.trim() === "") {
        Swal.fire({
            position: "center",
            icon: "error",
            text: "¡Complete los campos obligatorios!",
            showConfirmButton: false,
            timer: 1500
        });
    
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

// Función para guardar datos en Local Storage
function guardarDatosLS() {
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

    localStorage.setItem("datosForm", JSON.stringify(datosFormulario));
}

// Función para eliminar datos de Local Storage
function eliminarDatosLS() {
    localStorage.removeItem("datosForm");
}
