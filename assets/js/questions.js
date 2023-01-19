export function questions() {
  // quiz
  let questionsList = [
    {
      title: 'fdvdfvs?',
      answers: ['dfbetn', 'efvfv', 'afv', 'sfbdfb'],
      correct: 3,
    },
    {
      title: 'adfvsfvssg?',
      answers: ['jmjhgnbsf', 'afvsrgb', 'sgdbghn', 'dgbsfd'],
      correct: 2,
    },
  ];

  // get random question object from questions
  return questionsList[Math.floor(Math.random() * questionsList.length)];
}
