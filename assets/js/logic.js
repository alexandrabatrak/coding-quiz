import { questions } from './questions.js';
import { scores } from './scores.js';
// import Moment.js

// get elements
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start');
let questionsDiv = document.getElementById('questions');
let questionH = document.getElementById('question-title');
let choices = document.getElementById('choices');
// const nextBtn = document.getElementById('next');
const endScreen = document.getElementById('end-screen');
let feedback = document.getElementById('feedback');

function questionShow() {
  let question = questions();
  let questionTitle = question.title;
  let answers = question.answers;
  let correctAnswer = question.correct;
  questionH.innerHTML = questionTitle;
  choices.innerHTML = answers
    .map(
      (answer, index) =>
        `<li><input type="radio" name="answer" value="${answer}" id="answer-${index}">${answer}</li>`
    )
    .join('');

  choices.addEventListener('change', (e) => {
    let selectedAnswer = e.target.value;
    if (selectedAnswer === answers[correctAnswer]) {
      feedback.classList.add('show');
      feedback.innerHTML = 'Correct!';
    } else {
      feedback.classList.add('show');
      feedback.innerHTML = 'Wrong!';
    }
    setTimeout(() => {
      feedback.classList.remove('show');
      questionShow();
    }, 1000);
  });
}

function startQuiz() {
  // add questions
  startScreen.classList.add('hide');
  questionsDiv.classList.remove('hide');
  questionShow();
  // nextBtn.addEventListener('click', questionShow);
  // initialise timer
  // new moment.duration(3000).timer({ loop: true }, callback);
}

// start quiz
startBtn.addEventListener('click', startQuiz);

// when done or timer runs out
// startScreen.classList.add('hide');
// endScreen.classList.remove('hide');
