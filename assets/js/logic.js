import { questions } from './questions.js';
import { scores } from './scores.js';

// get elements
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start');
let questionsDiv = document.getElementById('questions');
let questionH = document.getElementById('question-title');
let choices = document.getElementById('choices');
const endScreen = document.getElementById('end-screen');
let finalScore = document.getElementById('final-score');
let feedback = document.getElementById('feedback');

let score = 0;

// start quiz
startBtn.addEventListener('click', startQuiz);

// questionIndex is incremented progressively when handleAnswer code is within event listener. Add removeEventListener to prevent it reacting extra
let questionIndex = 0;
let questionsList = questions();
let listOptions;

// display question with options (from shuffled array of object)
function questionShow() {
  // if (questionIndex < questionsList.length) {
  let question = questionsList[questionIndex];
  questionH.innerHTML = question.title;
  choices.innerHTML = question.answers
    .map(
      (answer, index) =>
        `<button type="button" value="${answer}" id="answer-${index}" data-index=${
          index + 1
        } class="quiz-option">${answer}</button>`
    )
    .join('');

  // eventHadler for choice buttons
  listOptions = choices.querySelectorAll('button');
  listOptions.forEach((listOption) => {
    listOption.addEventListener('click', processAnswer);
  });
  // }
}

// choice button callback function
function processAnswer(e) {
  let selectedAnswer = e.target.value;
  let listOption = e.target;
  let question = questionsList[questionIndex];
  let correctAnswer = question.answers[question.correct];
  if (selectedAnswer === correctAnswer) {
    listOption.classList.add('correct');
    feedback.classList.add('show');
    feedback.innerHTML = 'Correct!';
    // increment score value
    score++;
  } else {
    listOption.classList.add('wrong');
    feedback.classList.add('show');
    feedback.innerHTML = 'Wrong!';
    // timer -10s
  }
  listOptions.forEach((listOption) => {
    listOption.removeEventListener('click', processAnswer);
  });
  setTimeout(() => {
    feedback.classList.remove('show');
    if (questionIndex === questionsList.length - 1) {
      // end of the quiz
      endQuiz();
    } else {
      questionIndex++;
      questionShow();
    }
  }, 1000);
}

// init
function startQuiz() {
  // remove startScreen add questions
  startScreen.classList.add('hide');
  questionsDiv.classList.remove('hide');
  questionShow();
}

function endQuiz() {
  // end of the quiz
  questionsDiv.classList.add('hide');
  endScreen.classList.remove('hide');
  finalScore.textContent = score;
  scores(score);
}
