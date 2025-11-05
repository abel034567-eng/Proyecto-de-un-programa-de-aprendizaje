# 🧠 Quiz App con Panel de Administración

![Imagen del proyecto](./public/img/Quiz_Educativo.png)

## Índice
- [Descripción](#descripción-del-proyecto)
- [Características](#Características-Principales-)
- [Estructura](#Estructura-del-Proyecto-)
- [Instalación](#instalación-y-configuración-️)
- [Funcionalidades](#funcionalidades-clave-)
- [Estilos](#estilos-)

---

## Descripción del proyecto

Este proyecto es una aplicación web de cuestionarios (quiz) desarrollada con **Node.js**, **Express**, **EJS** y **MongoDB**.  
Incluye tanto la parte pública del quiz como un panel de administración para gestionar las preguntas.

**Categoría de SSAT del proyecto**: Aplicación Educativa Interactiva (AEI).

---

## Características Principales 🚀 

- Sistema de preguntas dinámico con MongoDB.
- Vista del quiz con navegación por preguntas tipo paginación.
- Pantalla de resultados con desglose de respuestas correctas e incorrectas.
- Panel de administración protegido (CRUD de preguntas).
- Diseño moderno y limpio con CSS puro.

---

## Estructura del Proyecto 📂 

```
quiz-app/
├── models/
│   └── Question.js
├── public/
│   └── css/
│       ├── style.css
│       └── admin.css
├── routes/
│   ├── quizRoutes.js
│   └── adminRoutes.js
├── views/
│   ├── quiz.ejs
│   ├── result.ejs
│   └── dashboard/
│       ├── admin.ejs
│       ├── newQuestion.ejs
│       └── editQuestion.ejs
├── server.js
└── README.md
```

---

## Instalación y Configuración ⚙️ 

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/usuario/quiz-app.git
cd quiz-app
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar la base de datos
Asegúrate de tener una instancia de **MongoDB Atlas** o local, y actualiza tu cadena de conexión en `server.js`:

```js
mongoose.connect('mongodb+srv://usuario:password@cluster.mongodb.net/quizDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
```

### 4️⃣ Ejecutar el servidor
```bash
npm run dev
```
o
```bash
node server.js
```

El servidor estará disponible en:
```
http://localhost:3000
```
---

## Funcionalidades Clave 💡 

### 🎯 Quiz
- Se muestra una pregunta a la vez con sus opciones.
- Al responder, el usuario avanza a la siguiente.
- Al finalizar, se redirige a la vista de resultados (`result.ejs`).

### 📊 Resultados
- Muestra el puntaje total.
- Debajo, aparecen tarjetas con cada pregunta e íconos ✅ / ❌ según la respuesta del usuario.

### 🧰 Panel de Administración
- **Agregar nueva pregunta**.
- **Editar preguntas existentes**.
- **Eliminar preguntas**.
- Interfaz estilizada con `admin.css`.

---

## Estilos 🎨
Todos los estilos están ubicados en:
```
/public/css/
```

- `style.css` → Estilo general del quiz.
- `admin.css` → Panel de administración.
- `index.css` → Estilo de la página de inicio


