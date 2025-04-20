const quizzes = [
    {
      id: "htmlcss",
      title: "HTML & CSS",
      questions: [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
          answer: 0
        },
        {
          question: "Which property is used to change the background color?",
          options: ["color", "background-color", "bgcolor"],
          answer: 1
        },
        {
          question: "Which HTML tag is used to define an internal style sheet?",
          options: ["<css>", "<script>", "<style>"],
          answer: 2
        }
      ]
    },
    {
      id: "javascript",
      title: "JavaScript",
      questions: [
        {
          question: "Which keyword is used to declare a variable in JavaScript?",
          options: ["var", "int", "string"],
          answer: 0
        },
        {
          question: "What is the correct syntax for referring to an external script?",
          options: ["<script href='app.js'>", "<script src='app.js'>", "<script link='app.js'>"],
          answer: 1
        },
        {
          question: "Which method converts JSON data to a JavaScript object?",
          options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()"],
          answer: 0
        }
      ]
    },
    {
      id: "php",
      title: "PHP",
      questions: [
        {
          question: "What does PHP stand for?",
          options: ["Personal Home Page", "PHP: Hypertext Preprocessor", "Private Hypertext Processor"],
          answer: 1
        },
        {
          question: "Which of the following is the correct syntax for a PHP comment?",
          options: ["// comment", "/* comment */", "# comment"],
          answer: 1
        },
        {
          question: "Which function is used to send an email in PHP?",
          options: ["mail()", "sendmail()", "email()"],
          answer: 0
        }
      ]
    },
    {
      id: "sql",
      title: "SQL",
      questions: [
        {
          question: "Which SQL statement is used to extract data from a database?",
          options: ["GET", "SELECT", "EXTRACT"],
          answer: 1
        },
        {
          question: "Which of the following is used to delete a table in SQL?",
          options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE"],
          answer: 0
        },
        {
          question: "What does SQL stand for?",
          options: ["Structured Query Language", "Sequential Query Language", "Simple Query Language"],
          answer: 0
        }
      ]
    },
    {
      id: "python",
      title: "Python",
      questions: [
        {
          question: "What is the correct syntax to output 'Hello World' in Python?",
          options: ["echo('Hello World')", "print('Hello World')", "echo print('Hello World')"],
          answer: 1
        },
        {
          question: "Which method is used to add an element at the end of a list in Python?",
          options: ["add()", "append()", "push()"],
          answer: 1
        },
        {
          question: "What is the correct syntax for defining a function in Python?",
          options: ["def functionName():", "function functionName():", "define functionName():"],
          answer: 0
        }
      ]
    }
  ];
  
  // Save quizzes to localStorage only if they're not saved yet
  if (!localStorage.getItem("quizzes")) {
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
  }
  