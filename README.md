📌 **Nombre:** SERGIO ALEJANDRO ARIAS MAYTA
# 📌 Backend con Node.js, Express.js y MongoDB Atlas

Este es un backend desarrollado con **Node.js, Express.js y MongoDB Atlas** que permite gestionar usuarios y productos con operaciones CRUD.

---

## 🚀 **Instalación y Configuración**

### **1️⃣ Clonar el repositorio**
```sh
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
```

### **2️⃣ Instalar dependencias**
Ejecuta el siguiente comando para instalar los paquetes necesarios:
```sh
npm install
```

### **3️⃣ Configurar las variables de entorno**
Crea un archivo **`.env`** en la raíz del proyecto y coloca lo siguiente:
```plaintext
MONGO_URI=mongodb+srv://TU_USUARIO:TU_CONTRASEÑA@cluster0.i6ouj.mongodb.net/sample?retryWrites=true&w=majority
PORT=5000
```
🔹 **Reemplaza `TU_USUARIO` y `TU_CONTRASEÑA` con las credenciales correctas de MongoDB Atlas.**  
🔹 **Si tu contraseña tiene caracteres especiales (`@, $, &, #`), usa [URL Encoding](https://www.w3schools.com/tags/ref_urlencode.ASP).**

---

## 🚀 **Ejecutar el servidor**
Para iniciar el backend, usa el siguiente comando:
```sh
npm start
```
📌 **El servidor se ejecutará en:** `http://localhost:5000`

---

## 📌 **Estructura del Proyecto**
```plaintext
📦 TU_PROYECTO
├── 📂 models
│   ├── User.js (Modelo de Usuario)
│   ├── Product.js (Modelo de Producto)
    ├── Counter.js (Modelo de Producto)
├── 📂 controllers
│   ├── counterController.js (Lógica de usuarios)
├── 📂 middlewares
│   ├── counterMiddleware.js (Middleware para registrar solicitudes)
├── 📂 routes
│   ├── userRoutes.js (Rutas de usuarios)
│   ├── productRoutes.js (Rutas de productos)
├── .env (Variables de entorno)
├── app.js (Configuración del servidor)
├── server.js (Punto de entrada del servidor)
├── package.json (Dependencias y scripts)
├── db.js (Configuración de la base de datos)
└── README.md (Documentación)

```

---

## 📌 **Endpoints Disponibles**
### 🔹 **Usuarios (`/usuarios`)**
- `POST /usuarios` → Crea un usuario
- `GET /usuarios` → Obtiene todos los usuarios
- `PUT /usuarios/:id` → Actualiza un usuario por ID
- `DELETE /usuarios/:id` → Elimina un usuario por ID

### 🔹 **Productos (`/productos`)**
- `POST /productos` → Crea un producto
- `GET /productos` → Obtiene todos los productos
- `PUT /productos/:id` → Actualiza un producto por ID
- `DELETE /productos/:id` → Elimina un producto por ID

### 🔹 **Contadores (`/contadores`)**
- `GET /contadores` → Muestra el total de registros en Usuarios y Productos

### 🔹 **Operaciones (`/operaciones`)**
- `GET /operaciones` → Muestra el total de operaciones realizadas en el backend

---

## 📌 **Ejemplo de Peticiones en Postman**
### 🔹 **Crear un Usuario (`POST /usuarios`)**
📌 **URL:** `http://localhost:5000/usuarios`  
📌 **Body (JSON)**:
```json
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "edad": 30
}
```
📌 **Respuesta esperada (JSON)**:
```json
{
  "_id": "6543210987654321",
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "edad": 30
}
```

### 🔹 **Obtener todos los usuarios (`GET /usuarios`)**
📌 **URL:** `http://localhost:5000/usuarios`
📌 **Respuesta esperada (JSON)**:
```json
[
  {
    "_id": "6543210987654321",
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "edad": 30
  }
]
```

### 🔹 **Actualizar un Usuario (`PUT /usuarios/:id`)**
📌 **URL:** `http://localhost:5000/usuarios/6543210987654321`  
📌 **Body (JSON)**:
```json
{
  "nombre": "Juan Actualizado",
  "email": "juan.new@example.com",
  "edad": 35
}
```
📌 **Respuesta esperada (JSON)**:
```json
{
  "_id": "6543210987654321",
  "nombre": "Juan Actualizado",
  "email": "juan.new@example.com",
  "edad": 35
}
```

### 🔹 **Eliminar un Usuario (`DELETE /usuarios/:id`)**
📌 **URL:** `http://localhost:5000/usuarios/6543210987654321`  
📌 **Respuesta esperada (JSON)**:
```json
{
  "message": "Usuario eliminado"
}
```

### 🔹 **Ver Total de Registros (`GET /contadores`)**
📌 **URL:** `http://localhost:5000/contadores`
📌 **Respuesta esperada (JSON)**:
```json
{
  "totalUsuarios": 10,
  "totalProductos": 15
}
```

### 🔹 **Ver Total de Operaciones (`GET /operaciones`)**
📌 **URL:** `http://localhost:5000/operaciones`
📌 **Respuesta esperada (JSON)**:
```json
{
  "totalOperaciones": 25
}
```

---

## 📷 **Capturas de Pruebas en Postman**


📌 **Lista de pruebas a realizar:**
1️⃣ **Captura de `POST /usuarios`** → Creando un usuario exitosamente. 
![Screenshot (3913)](https://github.com/user-attachments/assets/fb83e0f0-2715-49b6-9ca6-000e4958d572)
2️⃣ **Captura de `GET /usuarios`** → Mostrando usuarios existentes. 
![Screenshot (3915)](https://github.com/user-attachments/assets/e0a2f42c-dbda-4b70-a83f-755be5226e93)
3️⃣ **Captura de `PUT /usuarios/:id`** → Actualizando un usuario.
![Screenshot (3918)](https://github.com/user-attachments/assets/ca3c9890-da55-41a9-b564-336ca80bc087)
4️⃣ **Captura de `DELETE /usuarios/:id`** → Eliminando un usuario.
![Screenshot (3916)](https://github.com/user-attachments/assets/1370b67c-961a-49b2-a2d5-e82468321f86)
5️⃣ **Captura de `POST /productos`** 
![Screenshot (3919)](https://github.com/user-attachments/assets/1eaa297a-8ef7-4bd0-aa85-e7cbeb0e8d24)
6️⃣ **Captura de `GET /productos`**
![Screenshot (3921)](https://github.com/user-attachments/assets/063f3139-b31c-4fa4-8871-ce64dad897f8)
5️⃣ **Captura de `PUT /productos`**
![Screenshot (3922)](https://github.com/user-attachments/assets/1b0da503-cfe2-4add-a23b-59a80436f432)
6️⃣ **Captura de `DELETE /productos`** 
![Screenshot (3923)](https://github.com/user-attachments/assets/5bb32c60-3c27-4ea3-bbb5-3704e4133202)
7️⃣ **Captura de `GET /contadores`** → Mostrando número total de registros.
![Screenshot (3925)](https://github.com/user-attachments/assets/3331c9a1-5c6e-4c40-92ed-e8931591126b)
8️⃣ **Captura de `GET /operaciones`** → Mostrando número total de operaciones.
![Screenshot (3926)](https://github.com/user-attachments/assets/56c968b1-ed5e-4eb7-b274-c4a08176362a)

## **📌 Tecnologías Utilizadas**
✅ **Node.js**  
✅ **Express.js**  
✅ **MongoDB Atlas**  
✅ **Mongoose**  
✅ **Postman / Insomnia**  

---

## 🛠 **Autor**
📌 **Nombre:** SERGIO ALEJANDRO ARIAS MAYTA
📌 **GitHub:** https://github.com/SaiPlusSai/Tecnologias_Web_2_-Evaluacion-/

---

🚀 **¡Listo! Ahora puedes copiar y pegar todo este bloque en tu `README.md` y estará completamente documentado.** 😃📄



