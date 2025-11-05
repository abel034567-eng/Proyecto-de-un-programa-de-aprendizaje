
let currentQuestionIndex = 0;
let score = 0;

// Guarda las respuestas del usuario
let answers = []; 

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');

loadQuestion();

nextBtn.addEventListener('click', handleNext);

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.textContent = question.questionText;
  optionsContainer.innerHTML = '';

  question.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.classList.add('option-btn');
    btn.addEventListener('click', () => selectOption(option));
    optionsContainer.appendChild(btn);
  });
}

let selectedAnswer = null;

function selectOption(option) {
  selectedAnswer = option;
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.classList.remove('selected');
    if (btn.textContent === option) btn.classList.add('selected');
  });
}

function handleNext() {
  if (!selectedAnswer) {
    alert("Por favor, selecciona una respuesta antes de continuar.");
    return;
  }

  const question = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === question.correctAnswer;
  if (isCorrect) score++;

  // 🔹 Guardamos la respuesta
  answers.push({
    question: question.questionText,
    selected: selectedAnswer,
    correctAnswer: question.correctAnswer,
    isCorrect: isCorrect
  });

  selectedAnswer = null;
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    // 🔹 Enviar datos a /result
    const resultData = {
      score,
      total: questions.length,
      answers
    };

    // Redirigir pasando los datos codificados
    const encoded = encodeURIComponent(JSON.stringify(resultData));
    window.location.href = `${window.location.origin}/result?data=${encoded}`;
  }
}
