// insertSampleQuestions.js

const mongoose = require('mongoose');

// Reemplaza la URI con tu conexión de MongoDB Atlas
const uri = 'mongodb+srv://quiz_user:usuariodequizparaproyecto@clusterprueba.b2u6i7d.mongodb.net/quizDB?appName=ClusterPrueba';

// Esquema del modelo Question
const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [String],
  correctAnswer: String
});

const Question = mongoose.model('Question', questionSchema);

// Lista de preguntas de ejemplo
const sampleQuestions = [
  {
    questionText: "¿Cuál es el resultado de 3 + 5?",
    options: ["5", "7", "8", "9"],
    correctAnswer: "8"
  },
  {
    questionText: "¿Cuál es el planeta más grande del sistema solar?",
    options: ["Tierra", "Marte", "Júpiter", "Saturno"],
    correctAnswer: "Júpiter"
  },
  {
    questionText: "¿Quién escribió 'Don Quijote de la Mancha'?",
    options: ["Gabriel García Márquez", "Miguel de Cervantes", "Pablo Neruda", "Borges"],
    correctAnswer: "Miguel de Cervantes"
  },
  {
    questionText: "¿Qué lenguaje se ejecuta en el navegador web?",
    options: ["Python", "C++", "JavaScript", "PHP"],
    correctAnswer: "JavaScript"
  },
  {
    questionText: "¿En qué continente se encuentra Egipto?",
    options: ["Asia", "África", "Europa", "Oceanía"],
    correctAnswer: "África"
  }
];

// Función principal
async function insertQuestions() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ Conectado a MongoDB Atlas");

    await Question.deleteMany(); // Limpiar base antes de insertar
    await Question.insertMany(sampleQuestions);

    console.log(`🎉 ${sampleQuestions.length} preguntas insertadas correctamente`);
  } catch (err) {
    console.error("❌ Error al insertar preguntas:", err);
  } finally {
    await mongoose.connection.close();
    console.log("🔒 Conexión cerrada");
  }
}

// 🚀 Ejecutar
insertQuestions();
