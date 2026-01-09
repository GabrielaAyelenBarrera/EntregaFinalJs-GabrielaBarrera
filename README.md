# Bella Aura (Makeup Page)

Aplicación web para mostrar productos de maquillaje con:
- Vista principal con listado de productos
- Vista **Real Time Products** para agregar/eliminar productos
- Endpoint API que devuelve productos en formato JSON

---

## 🧩 Tecnologías usadas
- Node.js
- Express
- Handlebars (vistas)
- Socket.IO (si aplica real time)
- Bootstrap (estilos)

---

## 🚀 Cómo correr el proyecto
### 1️⃣ Clonar el repositorio

- git clone https://github.com/GabrielaAyelenBarrera/GabrielaBarrera-ProyectoCoderHouse-JavaScript.git
- cd GabrielaBarrera-ProyectoCoderHouse-JavaScript

### 2️⃣ Instalar dependencias

`npm install `

### 3️⃣ Levantar servidor
`npm run dev`

El servidor corre en la URL:

`http://localhost:8080/`

En la terminal deberías ver algo como:

`Server escuchando en puerto 8080`

---

## 🌐 Rutas disponibles

🏠 Home
http://localhost:8080/

⚡ Real time products
http://localhost:8080/realTimeProducts

📦 API products (JSON)
http://localhost:8080/api/products

🌐 Consultar productos desde la API

---

## 🏠 Home

GET /
- Muestra el listado de productos en formato de tarjetas
- Página principal del sitio

---

## ⚡ Productos en tiempo real
GET /realTimeProducts
Vista interactiva con:
- Listado de productos
- Formulario para agregar productos
- Formulario para eliminar productos por ID
- Los cambios se reflejan en tiempo real sin recargar la página

---

## 📦 API de productos
GET /api/products

Devuelve todos los productos en formato JSON
Ideal para pruebas con Postman o consumo desde frontend

Ejemplo de respuesta:

json


    [
    { "id": 1,
    "name": "Paleta de sombras Desnuda",
    "marca": "Urban Decay",
    "categoria": "Ojos",
    "precio": 54.99
    }
    ]
---

## ✅ Funcionalidades principales
- Visualización de productos de maquillaje
- Agregar productos mediante formulario
- Eliminar productos por ID
- Actualización de productos en tiempo real
- Exposición de datos mediante API REST
- Diseño responsive con Bootstrap

---

## 🧪 Cómo probar la aplicación
➕ Agregar un producto
Ingresar a:
/realTimeProducts

Completar el formulario con:
- ID
- Nombre
- Marca
- Categoría
- Precio
- Presionar Agregar producto
Verificar que:
- Aparezca en la vista
- Se refleje en /api/products

❌ Eliminar un producto
- En la sección Eliminar Producto
- Ingresar el ID del producto
- Presionar Eliminar producto
- Verificar que desaparezca del listado y de la API

---

## 🖼️ Vista previa

🏠 Home

<img width="1264" src="https://github.com/user-attachments/assets/34f194c5-3963-4c03-919c-306d9404d9af" />

<img width="1231" src="https://github.com/user-attachments/assets/936bc9b9-3d11-43f5-b2a2-87d800cc3b12" />

---

⚡ Real Time Products

<img width="1132" src="https://github.com/user-attachments/assets/73f84f40-d38a-4943-9f54-f4565c2f81d0" />

<img width="1045" src="https://github.com/user-attachments/assets/f41b038c-b045-4c86-b938-b5d2b11bdc73" /> 

<img width="652" src="https://github.com/user-attachments/assets/f108b5ad-3e0a-4a24-b917-df468a543337" />


---

📦 API Products

 <img width="553" src="https://github.com/user-attachments/assets/71b2fa3a-d2e9-49bc-882f-b40c535a77fa" />


---

## 👩‍💻 Autora
**Gabriela Ayelén Barrera**  
📫 Contacto: gabrielaayelenbarrera1145@gmail.com  
🔗 LinkedIn: www.linkedin.com/in/gabrielabarrera-

---

