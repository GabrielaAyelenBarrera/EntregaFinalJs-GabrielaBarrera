// Obtuve el primer elemento <p> por su etiqueta utilizando querySelector
let parrafo = document.querySelector("p");

// Modifique el contenido del párrafo HTML desde JS
parrafo.textContent =
  "La misión de una empresa es una declaración concisa que define el propósito fundamental y la razón de ser de la organización. Este enunciado va más allá de la simple búsqueda de beneficios económicos y se sumerge en la esencia de lo que la empresa aspira lograr en el mundo. Es una guía que establece los valores centrales, los objetivos y la filosofía que orientan todas las actividades de la empresa.La misión actúa como un faro, proporcionando dirección y coherencia a todas las iniciativas. No solo es una declaración interna para alinear a los empleados con un propósito común, sino que también es una herramienta externa que comunica a clientes, proveedores y otras partes interesadas sobre la identidad y los compromisos fundamentales de la empresa.En esencia, la misión responde a preguntas fundamentales como ¿quiénes somos?, ¿qué hacemos? y ¿por qué lo hacemos? Debe ser inspiradora y motivadora, capturando la esencia de la empresa de una manera que genere orgullo y compromiso entre sus miembros.Una misión efectiva va más allá de simplemente vender productos o servicios; se trata de contribuir a la sociedad de manera significativa. Puede abordar cuestiones sociales, medioambientales o éticas, reflejando el compromiso de la empresa con la responsabilidad corporativa. Este enfoque más amplio no solo resuena con los consumidores conscientes, sino que también puede generar una cultura interna sólida y atraer talento comprometido con una visión más amplia.A medida que las empresas evolucionan en un entorno dinámico, la misión puede revisarse y ajustarse para reflejar cambios en la estrategia, valores o enfoques. Sin embargo, la esencia de la misión suele permanecer constante, sirviendo como el núcleo que impulsa la identidad y la dirección a largo plazo de la empresa.En resumen, la misión de una empresa es una brújula estratégica que proporciona orientación y propósito. Al comunicar los valores centrales y los objetivos fundamentales, la misión crea un marco que inspira a los empleados y conecta a la empresa con la comunidad más amplia en la que opera.";


// Agregue el evento submit al id="formulario" de HTML

  document.addEventListener("DOMContentLoaded", function() {
    let miFormulario = document.getElementById("formulario");
 
    miFormulario.addEventListener("submit", validarFormulario);
    
    function validarFormulario(e) {
        e.preventDefault();
        console.log("Formulario enviado");
    }
});




// Guarde los datos ingresados por el usuario en storage
document.addEventListener('DOMContentLoaded', function() {
    let formulario = document.getElementById('formulario');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario
  
      // Obtener los valores del formulario
      let nombre = document.getElementById('nombre').value;
      let apellido = document.getElementById('apellido').value;
      let email = document.getElementById('email').value;
      let pass = document.getElementById('pass').value;
      let consulta = document.getElementById('consulta').value;
  
      // Almacenar los valores en localStorage
      localStorage.setItem('nombre', nombre);
      localStorage.setItem('apellido', apellido);
      localStorage.setItem('email', email);
      localStorage.setItem('pass', pass);
      localStorage.setItem('consulta', consulta);
  
      // Limpiar el formulario
      formulario.reset();
  
      // Mostrar mensaje de confirmación
      alert('Datos del formulario almacenados en el almacenamiento local.');
    });
  
    // Cargar los datos del almacenamiento local al cargar la página
    let nombre = localStorage.getItem('nombre');
    let apellido = localStorage.getItem('apellido');
    let email = localStorage.getItem('email');
    let pass = localStorage.getItem('pass');
    let consulta = localStorage.getItem('consulta');
  
    // Completar los campos del formulario con los datos almacenados
    document.getElementById('nombre').value = nombre || '';
    document.getElementById('apellido').value = apellido || '';
    document.getElementById('email').value = email || '';
    document.getElementById('pass').value = pass || '';
    document.getElementById('consulta').value = consulta || '';
  });
  