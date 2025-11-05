const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Página principal
router.get('/', async (req, res) => {
  res.render('index');
});

// Mostrar preguntas
router.get('/quiz', async (req, res) => {
  const questions = await Question.find();
  res.render('quiz', { questions });
});

// Enviar resultados
router.get('/result', (req, res) => {
  try {
    const data = JSON.parse(decodeURIComponent(req.query.data));
    
    // Enviamos score, total y answers
    res.render('result', data); 
  } catch (error) {
    res.status(400).send("Error al procesar resultados");
  }
});


module.exports = router;
