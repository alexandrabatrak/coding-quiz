export function questions() {
  // quiz
  // let questionsList = [
  //   {
  //     title:
  //       'What is the output of the following code? var x = 10; var y = 20; console.log(x + y);',
  //     answers: ['10', '20', '30', 'undefined'],
  //     correct: 2,
  //   },
  //   {
  //     title: 'What is the difference between let and var in JavaScript?',
  //     answers: [
  //       'let is block-scoped and var is function-scoped',
  //       'let is function-scoped and var is block-scoped',
  //       'let and var are the same',
  //       'let is not used in JavaScript',
  //     ],
  //     correct: 0,
  //   },
  //   {
  //     title:
  //       'What is the output of the following code? console.log(typeof(null))',
  //     answers: ['null', '"null"', '"object"', 'undefined'],
  //     correct: 2,
  //   },
  //   {
  //     title:
  //       'What is the output of the following code? var x = "5"; var y = 5; console.log(x == y);',
  //     answers: ['true', 'false', 'undefined', 'null'],
  //     correct: 0,
  //   },
  //   {
  //     title: 'What is closure in JavaScript?',
  //     answers: [
  //       'A function that can access variables in its parent scope even after the parent function has returned',
  //       'A function that can only be invoked once',
  //       'A function that returns another function',
  //       'A function that can only be invoked with a certain number of arguments',
  //     ],
  //     correct: 0,
  //   },
  //   {
  //     title:
  //       'What is the output of the following code? console.log(typeof(NaN))',
  //     answers: ['NaN', '"NaN"', '"number"', 'undefined'],
  //     correct: 2,
  //   },
  //   {
  //     title:
  //       'What is the output of the following code? console.log(0.1 + 0.2 == 0.3)',
  //     answers: ['true', 'false', 'undefined', 'null'],
  //     correct: 1,
  //   },
  //   {
  //     title:
  //       'Which of the following is not a valid way to create an array in JavaScript?',
  //     answers: [
  //       'var arr = new Array();',
  //       'var arr = [];',
  //       'var arr = Array();',
  //       'var arr = list();',
  //     ],
  //     correct: 3,
  //   },
  //   {
  //     title:
  //       'What is the output of the following code? var x = "5"; var y = 5; console.log(x === y);',
  //     answers: ['true', 'false', 'undefined', 'null'],
  //     correct: 1,
  //   },
  //   {
  //     title: 'What is the difference between == and === in JavaScript?',
  //     answers: [
  //       '== compares values, === compares values and types',
  //       '== compares types, === compares values',
  //       '== and === are the same',
  //       '== compares only numbers, === compares only strings',
  //     ],
  //     correct: 0,
  //   },
  //   {
  //     title:
  //       'What is the output of the following code? console.log(parseInt("3.14"))',
  //     answers: ['3', '3.14', 'undefined', 'NaN'],
  //     correct: 0,
  //   },
  //   {
  //     title:
  //       'What is the output of the following code? console.log(parseFloat("3.14"))',
  //     answers: ['3', '3.14', 'undefined', 'NaN'],
  //     correct: 1,
  //   },
  //   {
  //     title:
  //       'What is the output of the following code? console.log(true + true)',
  //     answers: ['2', 'true', 'false', 'undefined'],
  //     correct: 0,
  //   },
  //   {
  //     title:
  //       'What is the output of the following code? console.log(true + false)',
  //     answers: ['1', 'true', 'false', 'undefined'],
  //     correct: 0,
  //   },
  //   {
  //     title: 'What is the output of the following code? console.log(!false)',
  //     answers: ['false', 'true', 'undefined', 'null'],
  //     correct: 1,
  //   },
  //   {
  //     title: 'What is the output of the following code? console.log(!!false)',
  //     answers: ['false', 'true', 'undefined', 'null'],
  //     correct: 0,
  //   },
  //   {
  //     title: 'What is hoisting in JavaScript?',
  //     answers: [
  //       'The process of moving variable and function declarations to the top of the scope',
  //       'The process of moving variable and function expressions to the top of the scope',
  //       'The process of moving all code to the top of the scope',
  //       'The process of moving all comments to the top of the scope',
  //     ],
  //     correct: 0,
  //   },
  //   {
  //     title:
  //       'What is the output of the following code? console.log(null == undefined)',
  //     answers: ['true', 'false', 'undefined', 'null'],
  //     correct: 0,
  //   },
  // ];

  let questionsList = [
    {
      title: 'What is a higher-order function?',
      answers: [
        'A function that returns another function',
        'A function that takes another function as an argument',
        'A function that modifies another function',
        'A function that can only be used with objects',
        'A function that can only be used with arrays',
        'A function that can only be used with strings',
      ],
      correct: 1,
    },
    {
      title:
        'What is the difference between a callback function and a promise?',
      answers: [
        'Callback functions are synchronous while promises are asynchronous',
        'Promises are synchronous while callback functions are asynchronous',
        'Callback functions can only be used with arrays, while promises can be used with any data type',
        'Promises can only be used with arrays, while callback functions can be used with any data type',
        'Callback functions return a single value, while promises return multiple values',
        'Promises return a single value, while callback functions return multiple values',
      ],
      correct: 1,
    },
    {
      title: 'What is closure in JavaScript?',
      answers: [
        'A way to control access to variables',
        'A way to share variables between functions',
        'A way to define private variables',
        'A way to create classes',
        'A way to cache function results',
        'A function that returns another function',
      ],
      correct: 5,
    },
    {
      title: 'What is event bubbling in JavaScript?',
      answers: [
        'A way to handle multiple events on a single element',
        'A way to handle events on child elements',
        'A way to handle events on parent elements',
        'A way to handle events on sibling elements',
        'A way to stop events from propagating',
        'A way to handle events on the document',
      ],
      correct: 2,
    },
    {
      title: 'What is the difference between == and ===?',
      answers: [
        '== compares values while === compares values and types',
        '== is used for numbers while === is used for strings',
        '== compares values while === compares values and memory locations',
        '=== is faster than ==',
        '== is used for arrays while === is used for objects',
        '=== is more strict than ==',
      ],
      correct: 0,
    },
    {
      title: 'What is the difference between a for-of loop and a forEach loop?',
      answers: [
        'for-of loops are used for arrays while forEach loops are used for objects',
        'forEach loops are used for arrays while for-of loops are used for objects',
        'for-of loops return the index while forEach loops return the value',
        'forEach loops return the index while for-of loops return the value',
        'for-of loops are used for synchronous operations while forEach loops are used for asynchronous operations',
        'forEach loops are used for synchronous operations while for-of loops are used for asynchronous operations',
      ],
      correct: 0,
    },
    {
      title:
        'What is the difference between a try-catch block and a throw statement?',
      answers: [
        'try-catch blocks handle errors while throw statements raise errors',
        'throw statements handle errors while try-catch blocks raise errors',
        'try-catch blocks can only be used with synchronous code, while throw statements can be used with both synchronous and asynchronous code',
        'throw statements can only be used with synchronous code, while try-catch blocks can be used with both synchronous and asynchronous code',
        'try-catch blocks are used to handle specific errors, while throw statements can be used to handle any type of error',
        'throw statements are used to handle specific errors, while try-catch blocks can be used to handle any type of error',
      ],
      correct: 0,
    },
    {
      title: 'What is the difference between a set and a map in JavaScript?',
      answers: [
        'Sets can only store unique values, while maps can store key-value pairs',
        'Maps can only store unique values, while sets can store key-value pairs',
        'Sets are faster than maps',
        'Maps are faster than sets',
        'Sets can only be used with primitive data types, while maps can be used with any data type',
        'Maps can only be used with primitive data types, while sets can be used with any data type',
      ],
      correct: 0,
    },
    {
      title: 'What is the spread operator in JavaScript?',
      answers: [
        'A way to concatenate arrays',
        'A way to merge objects',
        'A way to copy an array or object',
        'A way to extract values from an array or object',
        'A way to add elements to an array or object',
        'A way to remove elements from an array or object',
      ],
      correct: 3,
    },
    {
      title:
        'What is the difference between a template literal and a string concatenation?',
      answers: [
        'Template literals use backticks while string concatenation uses plus signs',
        'String concatenation uses backticks while template literals use plus signs',
        'Template literals can include expressions while string concatenation can not',
        'String concatenation can include expressions while template literals can not',
        'Template literals are more efficient than string concatenation',
        'String concatenation is more efficient than template literals',
      ],
      correct: 2,
    },
    {
      title:
        'What is the difference between a class and a constructor function?',
      answers: [
        'Classes use the keyword "class" while constructor functions use the keyword "function"',
        'Constructor functions use the keyword "class" while classes use the keyword "function"',
        'Classes can only be used with objects, while constructor functions can be used with any data type',
        'Constructor functions can only be used with objects, while classes can be used with any data type',
        'Classes provide a way to create multiple instances, while constructor functions can only create a single instance',
        'Constructor functions provide a way to create multiple instances, while classes can only create a single instance',
      ],
      correct: 0,
    },
    {
      title:
        'What is the difference between a static method and an instance method?',
      answers: [
        'Static methods are called on the class, while instance methods are called on an object',
        'Instance methods are called on the class, while static methods are called on an object',
        'Static methods can only be used with the class, while instance methods can be used with any object',
        'Instance methods can only be used with the class, while static methods can be used with any object',
        'Static methods do not have access to the "this" keyword, while instance methods do',
        'Instance methods do not have access to the "this" keyword, while static methods do',
      ],
      correct: 0,
    },
    {
      title:
        'What will be the output of the following code? function add(a, b) { return a + b; } console.log(add(2, 3))',
      answers: ['5', 'undefined', 'null', 'NaN', '"5"', 'error'],
      correct: 0,
    },
    {
      title:
        'What will be the output of the following code? let x = "5"; document.write(++x)',
      answers: ['5', '6', '"5"', '"6"', 'NaN', 'error'],
      correct: 1,
    },
    {
      title:
        'What will be the output of the following code?  let x = "5"; console.log(x + 3)',
      answers: ['8', '53', '5undefined', '53', 'null', 'error'],
      correct: 1,
    },
    {
      title:
        'What will be the output of the following code? function check(a, b) { return a === b; } console.log(check(2, "2"))',
      answers: ['true', 'false', 'undefined', 'null', 'NaN', 'error'],
      correct: 1,
    },
    {
      title:
        'What will be the output of the following code? let x = [1, 2, 3]; console.log(x.length)',
      answers: ['3', '0', '1', 'undefined', 'null', 'error'],
      correct: 0,
    },
    {
      title:
        'What will be the output of the following code? console.log(Math.min(1, 2, 3))',
      answers: ['1', '2', '3', 'undefined', 'null', 'error'],
      correct: 0,
    },
    {
      title:
        'What will be the output of the following code?  let x = "5"; console.log(x - 3)',
      answers: ['2', '8', '5', '-2', 'NaN', 'error'],
      correct: 3,
    },
    {
      title:
        'What will be the output of the following code? let x = "Kevin"; console.log(Hello, ${x})',
      answers: [
        'Hello, Kevin',
        'Kevin',
        'Hello,',
        'undefined',
        'null',
        'error',
      ],
      correct: 0,
    },
    {
      title:
        'What will be the output of the following code? function add(a, b) { return a + b; } console.log(add("2", "3"))',
      answers: ['5', '23', '"23"', 'undefined', 'null', 'error'],
      correct: 2,
    },
    {
      title:
        'What will be the output of the following code? let x = { name: "Koopa", age: 7}; console.log(x.name)',
      answers: ['Koopa', '7', 'undefined', 'null', 'NaN', 'error'],
      correct: 0,
    },
  ];

  // TODO: I want 6 possible answers and randomly display only 4 - randomise 5 answers + 1 correct

  // Shuffle the array using the Fisher-Yates shuffle algorithm
  for (let i = questionsList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [questionsList[i], questionsList[j]] = [questionsList[j], questionsList[i]];
  }
  // Randomize the answers array for each question
  questionsList.forEach((question) => {
    let correctAnswer = question.answers[question.correct];
    let answersToRandomise = question.answers.slice(0);
    answersToRandomise.splice(question.correct, 1);
    answersToRandomise.sort(() => Math.random() - 0.5);
    question.answers = answersToRandomise.slice(0, 3);
    question.answers.splice(Math.floor(Math.random() * 4), 0, correctAnswer);
    question.correct = question.answers.indexOf(correctAnswer);
  });

  questionsList = questionsList.slice(0, 10);
  return questionsList;
}
