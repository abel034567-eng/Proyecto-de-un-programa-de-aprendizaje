const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Página principal del admin (listar preguntas)
router.get('/', async (req, res) => {
  const questions = await Question.find();
  res.render('dashboard/admin', { questions });
});

// Formulario para agregar pregunta
router.get('/new', (req, res) => {
  res.render('dashboard/newQuestion');
});

// Guardar nueva pregunta
router.post('/new', async (req, res) => {
  const { questionText, option1, option2, option3, option4, correctAnswer } = req.body;
  const newQuestion = new Question({
    questionText,
    options: [option1, option2, option3, option4],
    correctAnswer,
  });
  await newQuestion.save();
  res.redirect('/admin');
});

// Formulario para editar pregunta
router.get('/edit/:id', async (req, res) => {
  const question = await Question.findById(req.params.id);
  res.render('dashboard/editQuestion', { question });
});

// Guardar cambios de edición
router.post('/edit/:id', async (req, res) => {
  const { questionText, option1, option2, option3, option4, correctAnswer } = req.body;
  await Question.findByIdAndUpdate(req.params.id, {
    questionText,
    options: [option1, option2, option3, option4],
    correctAnswer,
  });
  res.redirect('/admin');
});

// Eliminar pregunta
router.get('/delete/:id', async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  res.redirect('/admin');
});

module.exports = router;
