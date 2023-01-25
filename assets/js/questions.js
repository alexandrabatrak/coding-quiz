export function questions() {
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
      title:
        'What is the difference between <code>==</code> and <code>===</code>?',
      answers: [
        '<code>==</code> compares values while <code>===</code> compares values and types',
        '<code>==</code> is used for numbers while <code>===</code> is used for strings',
        '<code>==</code> compares values while <code>===</code> compares values and memory locations',
        '<code>===</code> is faster than <code>==</code>',
        '<code>==</code> is used for arrays while <code>===</code> is used for objects',
        '<code>===</code> is more strict than <code>==</code>',
      ],
      correct: 0,
    },
    {
      title:
        'What is the difference between a <code>for-of</code> loop and a <code>forEach</code> loop?',
      answers: [
        '<code>for-of</code> loops are used for arrays while <code>forEach</code> loops are used for objects',
        '<code>forEach</code> loops are used for arrays while <code>for-of</code> loops are used for objects',
        '<code>for-of</code> loops return the index while <code>forEach</code> loops return the value',
        '<code>forEach</code> loops return the index while <code>for-of</code> loops return the value',
        '<code>for-of</code> loops are used for synchronous operations while <code>forEach</code> loops are used for asynchronous operations',
        '<code>forEach</code> loops are used for synchronous operations while <code>for-of</code> loops are used for asynchronous operations',
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
        'Classes use the keyword <code>class</code> while constructor functions use the keyword <code>function</code>',
        'Constructor functions use the keyword <code>class</code> while classes use the keyword <code>function</code>',
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
        'Static methods do not have access to the <code>this</code> keyword, while instance methods do',
        'Instance methods do not have access to the <code>this</code> keyword, while static methods do',
      ],
      correct: 0,
    },
    {
      title:
        'What is the difference between <code>let</code> and <code>var</code> in JavaScript?',
      answers: [
        '<code>let</code> is block scoped while <code>var</code> is function scoped',
        '<code>var</code> is block scoped while <code>let</code> is function scoped',
        '<code>let</code> is hoisted while <code>var</code> is not',
        '<code>var</code> is hoisted while <code>let</code> is not',
        '<code>let</code> is newer than <code>var</code>',
        '<code>var</code> is newer than <code>let</code>',
      ],
      correct: 0,
    },
    {
      title: 'What is hoisting in JavaScript?',
      answers: [
        'A way to move function and variable declarations to the top of the scope',
        'A way to move function and variable declarations to the bottom of the scope',
        'A way to move function and variable declarations to a global scope',
        'A way to move function and variable declarations to a local scope',
        'A way to prevent variable and function declarations from being moved',
        'A way to create variables and functions on the fly',
      ],
      correct: 0,
    },
    {
      title:
        'What is the difference between <code>.map()</code> and <code>.forEach()</code> in JavaScript?',
      answers: [
        '<code>.map()</code> returns a new array while <code>.forEach()</code> modifies the original array',
        '<code>.forEach()</code> returns a new array while <code>.map()</code> modifies the original array',
        '<code>.map()</code> is used for synchronous operations while <code>.forEach()</code> is used for asynchronous operations',
        '<code>.forEach()</code> is used for synchronous operations while <code>.map()</code> is used for asynchronous operations',
        '<code>.map()</code> can only be used on arrays, while <code>.forEach()</code> can be used on any iterable object',
        '<code>.forEach()</code> can only be used on arrays, while <code>.map()</code> can be used on any iterable object',
      ],
      correct: 0,
    },
    {
      title:
        'What is the difference between <code>.filter()</code> and <code>.find()</code> in JavaScript?',
      answers: [
        '<code>.filter()</code> returns an array of all elements that pass the test, while <code>.find()</code> returns the first element that passes the test',
        '<code>.find()</code> returns an array of all elements that pass the test, while <code>.filter()</code> returns the first element that passes the test',
        '<code>.filter()</code> can only be used on arrays, while <code>.find()</code> can be used on any iterable object',
        '<code>.find()</code> can only be used on arrays, while <code>.filter()</code> can be used on any iterable object',
        '<code>.filter()</code> can only return one element, while <code>.find()</code> can return multiple elements',
        '<code>.find()</code> can only return one element, while <code>.filter()</code> can return multiple elements',
      ],
      correct: 0,
    },
    {
      title:
        'What is the difference between <code>.every()</code> and <code>.some()</code> in JavaScript?',
      answers: [
        '<code>.every()</code> checks if all elements in an array pass a test, while <code>.some()</code> checks if at least one element in an array passes a test',
        '<code>.some()</code> checks if all elements in an array pass a test, while <code>.every()</code> checks if at least one element in an array passes a test',
        '<code>.every()</code> can only be used on arrays, while <code>.some()</code> can be used on any iterable object',
        '<code>.some()</code> can only be used on arrays, while <code>.every()</code> can be used on any iterable object',
        '<code>.every()</code> returns a boolean, while <code>.some()</code> returns the passing element',
        '<code>.some()</code> returns a boolean, while <code>.every()</code> returns the passing element',
      ],
      correct: 0,
    },
    {
      title:
        'What is the difference between <code>.sort()</code> and <code>.reverse()</code> in JavaScript?',
      answers: [
        '<code>.sort()</code> sorts the elements in an array in ascending order, while <code>.reverse()</code> reverses the order of elements in an array',
        '<code>.reverse()</code> sorts the elements in an array in ascending order, while <code>.sort()</code> reverses the order of elements in an array',
        '<code>.sort()</code> modifies the original array, while <code>.reverse()</code> returns a new array',
        '<code>.reverse()</code> modifies the original array, while <code>.sort()</code> returns a new array',
        '<code>.sort()</code> can only be used on arrays, while <code>.reverse()</code> can be used on any iterable object',
        '<code>.reverse()</code> can only be used on arrays, while <code>.sort()</code> can be used on any iterable object',
      ],
      correct: 0,
    },
    {
      title:
        'What is the purpose of the <code>this</code> keyword in JavaScript?',
      answers: [
        'It refers to the current object',
        'It refers to the global object',
        'It refers to the parent object',
        'It refers to the object that the function is a property of',
        'It refers to the object that the function is invoked on',
        'It refers to the object that the function is a method of',
      ],
      correct: 0,
    },
    {
      title:
        'What is the purpose of the <code>new</code> keyword in JavaScript?',
      answers: [
        'It creates a new object',
        'It creates a new function',
        'It creates a new array',
        'It creates a new string',
        'It creates a new number',
        'It creates a new boolean',
      ],
      correct: 0,
    },
    {
      title:
        'What is the output of the <code>typeof</code> operator when used with an array in JavaScript?',
      answers: ['object', 'array', 'function', 'undefined', 'number', 'string'],
      correct: 0,
    },
    {
      title: `What will be the output of the following code?
        <pre><code>
  function add(a, b) { 
    return a + b; 
  } 
  console.log(add(2, 3))
        </code></pre>`,
      answers: ['5', 'undefined', 'null', 'NaN', '"5"', 'error'],
      correct: 0,
    },
    {
      title: `What will be the output of the following code? 
        <pre><code>
  let x = "5"; 
  document.write(++x)
        </code></pre>`,
      answers: ['5', '6', '"5"', '"6"', 'NaN', 'error'],
      correct: 1,
    },
    {
      title: `What will be the output of the following code? 
        <pre><code>
  let x = "5"; 
  console.log(x + 3)
        </code></pre>`,
      answers: ['8', '53', '5undefined', '"53"', 'null', 'error'],
      correct: 1,
    },
    {
      title: `What will be the output of the following code? 
        <pre><code>
  function check(a, b) { 
    return a === b; 
  } 
  console.log(check(2, "2"))
        </code></pre>`,
      answers: ['true', 'false', 'undefined', 'null', 'NaN', 'error'],
      correct: 1,
    },
    {
      title: `What will be the output of the following code? 
        <pre><code>
  let x = [1, 2, 3];
  console.log(x.length)
        </code></pre>`,
      answers: ['3', '0', '1', 'undefined', 'null', 'error'],
      correct: 0,
    },
    {
      title: `What will be the output of the following code? 
        <pre><code>
  console.log(Math.min(1, 2, 3)
        </code></pre>`,
      answers: ['1', '2', '3', 'undefined', 'null', 'error'],
      correct: 0,
    },
    {
      title: `What will be the output of the following code? 
        <pre><code>
  let x = "5"; 
  console.log(x - 3)
        </code></pre>`,
      answers: ['2', '8', '5', '-2', 'NaN', 'error'],
      correct: 3,
    },
    {
      title: `What will be the output of the following code? 
        <pre><code>
  let x = "Kevin"; 
  console.log('Hello', x)
        </code></pre>`,
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
      title: `What will be the output of the following code? 
        <pre><code>
  function add(a, b) { 
    return a + b; 
  } 
  console.log(add("2", "3"))
        </code></pre>`,
      answers: ['5', '23', '"23"', 'undefined', 'null', 'error'],
      correct: 2,
    },
    {
      title: `What will be the output of the following code? 
        <pre><code>
  let x = { 
    name: "Koopa", 
    age: 7
  }; 
  console.log(x.name)
  </code></pre>`,
      answers: ['Koopa', '7', 'undefined', 'null', 'NaN', 'error'],
      correct: 0,
    },
  ];

  // Shuffle the array using the Fisher-Yates shuffle algorithm
  /* The loop goes backwards, and we take index element and swap places with random indexed element.
  Fun quote from english disctionary: "shuffling = to move similar things from one position or place to another, 
  often to give an appearance of activity when nothing useful is being done" */
  for (let i = questionsList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [questionsList[i], questionsList[j]] = [questionsList[j], questionsList[i]];
  }

  // Randomize the answers array for each question and display only 4
  questionsList.forEach((question) => {
    // set the correct
    let correctAnswer = question.answers[question.correct];
    let answersToRandomise = question.answers.slice(0);
    // remove the correct one, we don't want it to get lost
    answersToRandomise.splice(question.correct, 1);
    // mix them all now
    answersToRandomise.sort(() => Math.random() - 0.5);
    // we only want 3 of them
    question.answers = answersToRandomise.slice(0, 3);
    // one more time, mix mix mix and add some *spice*, correct asnwer
    question.answers.splice(Math.floor(Math.random() * 4), 0, correctAnswer);
    // we still want to know what the correct answer is after all this mixing and cutting
    question.correct = question.answers.indexOf(correctAnswer);
  });
  return questionsList;
}
