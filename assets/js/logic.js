import { questions } from './questions.js';
import { scores } from './scores.js';

// loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('remove');
    setTimeout(() => {
      // select elements inside start-screen omitting 'difficulty-description' to only show it on hover
      [...startScreen.children].forEach((child) => {
        if (child.id === 'difficulty-description') {
          return;
        }
        child.classList.add('show');
      });
    }, 200);
  }, 200);
});

// sounds
const correctSound = new Audio();
correctSound.src = './assets/sfx/correct.wav';
const wrongSound = new Audio();
wrongSound.src = './assets/sfx/wrong.wav';
const quizOver = new Audio();
quizOver.src = './assets/sfx/quiz-over.mp3';
const quizOverTimer = new Audio();
quizOverTimer.src = './assets/sfx/quiz-over-timer.mp3';

// get elements
const startScreen = document.getElementById('start-screen');
const difficultyChoice = document.querySelectorAll('.inline-input-group input');
const startBtn = document.getElementById('start');
const questionsDiv = document.getElementById('questions');
const questionTitle = document.getElementById('question-title');
const choices = document.getElementById('choices');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const inputGroup = endScreen.querySelectorAll('.reveal');
const feedback = document.getElementById('feedback');
const soundToggle = document.getElementById('speaker');

// timer variables
const timeSpan = document.getElementById('time');
const timer = document.querySelector('.timer');
let time;
let countdownTimer;

let questionAmount = '10';
// get user select option and set amount of questions based on the option chosen
function questionsAmount() {
  let questionsList = questions();
  difficultyChoice.forEach((option) => {
    option.addEventListener('change', () => {
      questionAmount = option.value;
    });
    return questionAmount;
  });
  questionsList = questionsList.slice(0, questionAmount);
  return questionsList;
}

// question variables
let score = 0;
let questionIndex = 0;
let questionsList = questionsAmount();
let answerButtons;
// display question with options (from shuffled array of object)
function questionShow() {
  questionTitle.classList.remove('show');
  let question = questionsList[questionIndex];
  questionTitle.innerHTML = question.title;
  setTimeout(() => {
    questionTitle.classList.add('show');
  }, 200);
  choices.innerHTML = question.answers
    .map(
      (answer, index) =>
        // index + 1 for CSS to show question number on :before
        `<button type="button" value="${answer}" id="answer-${index}" data-index=${
          index + 1
        } class="quiz-option reveal">${answer}</button>`
    )
    .join('');
  // eventHadler for choice buttons
  // doesn't like to be outside of the questionShow()
  answerButtons = choices.querySelectorAll('button');
  answerButtons.forEach((answerButton) => {
    setTimeout(() => {
      answerButton.classList.add('show');
    }, 200);
    answerButton.addEventListener('click', processAnswer);
  });
}

// choice button callback function
function processAnswer(e) {
  e.stopPropagation();
  let selectedAnswer = e.target.value;
  let answerButton = e.target;
  let question = questionsList[questionIndex];
  let correctAnswer = question.answers[question.correct];
  if (selectedAnswer === correctAnswer) {
    answerButton.classList.add('correct');
    if (soundToggle.checked) {
      correctSound.play();
    }
    feedback.classList.add('show');
    feedback.innerText = 'Correct!';
    // increment score value
    score++;
  } else {
    answerButton.classList.add('wrong');
    if (soundToggle.checked) {
      wrongSound.play();
    }
    feedback.classList.add('show');
    feedback.innerText = 'Wrong!';
    time -= 10;
  }
  answerButtons.forEach((answerButton) => {
    answerButton.removeEventListener('click', processAnswer);
    setTimeout(() => {
      questionTitle.classList.remove('show');
    }, 850);
  });
  setTimeout(() => {
    feedback.classList.remove('show');
    if (questionIndex === questionsList.length - 1) {
      // end of the quiz
      setTimeout(() => {
        endQuiz();
      }, 500);
      if (time > 0 && soundToggle.checked) {
        quizOver.play();
      }
    } else {
      questionIndex++;
      questionShow();
    }
  }, 1000);
}

// timer
function startTimer() {
  countdownTimer = setInterval(() => {
    time--;
    timeSpan.innerText = time;
    timer.classList.add('show');
    if (time <= 0) {
      endQuiz();
      if (soundToggle.checked) {
        quizOverTimer.play();
      }
      setTimeout(() => {
        let title = document.querySelector('#end-screen p');
        let subtitle = document.createElement('span');
        subtitle.setAttribute('class', 'subtitle');
        subtitle.textContent = `Time is up! `;
        endScreen.insertBefore(subtitle, title);
      }, 250);
    }
  }, 1000);
}

// start quiz init
startBtn.addEventListener('click', startQuiz);

// start quiz
function startQuiz() {
  // set timeout to initiate timer at the same time
  setTimeout(() => {
    // remove startScreen add questions
    startScreen.classList.add('hide');
    questionsDiv.classList.remove('hide');
    questionShow();
  }, 1000);
  time = questionAmount * 11;
  startTimer();
}

// end quiz
function endQuiz() {
  clearInterval(countdownTimer);
  timer.classList.remove('show');
  timeSpan.innerText = 0;
  questionsDiv.classList.add('hide');
  endScreen.classList.remove('hide');
  setTimeout(() => {
    inputGroup.forEach((el) => el.classList.add('show'));
  }, 200);
  finalScore.textContent = score;
  scores(score);
}

// difficulty description appearance
const difficultyToggle = document.getElementById('description-toggler');
const difficultyDesc = document.getElementById('difficulty-description');
const wrapper = document.getElementsByClassName('wrapper');

difficultyToggle.addEventListener('click', (e) => {
  difficultyDesc.classList.toggle('show');
  difficultyToggle.classList.toggle('active');
});

// sound toggle
soundToggle.addEventListener('change', () => {
  if (soundToggle.classList.contains('on')) {
    soundToggle.classList.replace('on', 'off');
  } else {
    soundToggle.classList.replace('off', 'on');
  }
});
