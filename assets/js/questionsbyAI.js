let questionsList = [
  {
    title:
      'What is the output of the following code? var x = 10; var y = 20; console.log(x + y);',
    answers: ['10', '20', '30', 'undefined'],
    correct: 2,
  },
  {
    title: 'What is the difference between let and var in JavaScript?',
    answers: [
      'let is block-scoped and var is function-scoped',
      'let is function-scoped and var is block-scoped',
      'let and var are the same',
      'let is not used in JavaScript',
    ],
    correct: 0,
  },
  {
    title:
      'What is the output of the following code? console.log(typeof(null))',
    answers: ['null', '"null"', '"object"', 'undefined'],
    correct: 2,
  },
  {
    title:
      'What is the output of the following code? var x = "5"; var y = 5; console.log(x == y);',
    answers: ['true', 'false', 'undefined', 'null'],
    correct: 0,
  },
  {
    title: 'What is closure in JavaScript?',
    answers: [
      'A function that can access variables in its parent scope even after the parent function has returned',
      'A function that can only be invoked once',
      'A function that returns another function',
      'A function that can only be invoked with a certain number of arguments',
    ],
    correct: 0,
  },
  {
    title: 'What is the output of the following code? console.log(typeof(NaN))',
    answers: ['NaN', '"NaN"', '"number"', 'undefined'],
    correct: 2,
  },
  {
    title:
      'What is the output of the following code? console.log(0.1 + 0.2 == 0.3)',
    answers: ['true', 'false', 'undefined', 'null'],
    correct: 1,
  },
  {
    title:
      'Which of the following is not a valid way to create an array in JavaScript?',
    answers: [
      'var arr = new Array();',
      'var arr = [];',
      'var arr = Array();',
      'var arr = list();',
    ],
    correct: 3,
  },
  {
    title:
      'What is the output of the following code? var x = "5"; var y = 5; console.log(x === y);',
    answers: ['true', 'false', 'undefined', 'null'],
    correct: 1,
  },
  {
    title: 'What is the difference between == and === in JavaScript?',
    answers: [
      '== compares values, === compares values and types',
      '== compares types, === compares values',
      '== and === are the same',
      '== compares only numbers, === compares only strings',
    ],
    correct: 0,
  },
  {
    title:
      'What is the output of the following code? console.log(parseInt("3.14"))',
    answers: ['3', '3.14', 'undefined', 'NaN'],
    correct: 0,
  },
  {
    title:
      'What is the output of the following code? console.log(parseFloat("3.14"))',
    answers: ['3', '3.14', 'undefined', 'NaN'],
    correct: 1,
  },
  {
    title: 'What is the output of the following code? console.log(true + true)',
    answers: ['2', 'true', 'false', 'undefined'],
    correct: 0,
  },
  {
    title:
      'What is the output of the following code? console.log(true + false)',
    answers: ['1', 'true', 'false', 'undefined'],
    correct: 0,
  },
  {
    title: 'What is the output of the following code? console.log(!false)',
    answers: ['false', 'true', 'undefined', 'null'],
    correct: 1,
  },
  {
    title: 'What is the output of the following code? console.log(!!false)',
    answers: ['false', 'true', 'undefined', 'null'],
    correct: 0,
  },
  {
    title: 'What is hoisting in JavaScript?',
    answers: [
      'The process of moving variable and function declarations to the top of the scope',
      'The process of moving variable and function expressions to the top of the scope',
      'The process of moving all code to the top of the scope',
      'The process of moving all comments to the top of the scope',
    ],
    correct: 0,
  },
  {
    title:
      'What is the output of the following code? console.log(null == undefined)',
    answers: ['true', 'false', 'undefined', 'null'],
    correct: 0,
  },
];
