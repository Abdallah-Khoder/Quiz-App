// To prevent the user from re-entering the quize again
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
    alert("You need to log in first.");
    window.location.href = "login.html"; 
}

const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get("id");

const quizzes = JSON.parse(localStorage.getItem("quizzes"));
const quiz = quizzes.find(q => q.id == quizId);

if (!quiz) {
    alert("Quiz not found.");
    window.location.href = "home.html";
}

let scores = JSON.parse(localStorage.getItem("scores")) || [];
const alreadyTaken = scores.some(score => score.username === loggedInUser.username && score.quizId === quizId);

if (alreadyTaken) {
    alert("You have already completed this quiz.");
    window.location.href = "home.html";
}
if (quiz) {
    const quizTitle = document.getElementById("quizTitle");
    quizTitle.textContent = quiz.title;
    const quizQuestions = document.getElementById("quizQuestions");

    for (let i = 0; i < quiz.questions.length; i++) {
        const question = quiz.questions[i];
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        const questionTitle = document.createElement("h3");
        questionTitle.textContent = question.question;
        questionDiv.appendChild(questionTitle);

        for (let j = 0; j < question.options.length; j++) {
            const optionDiv = document.createElement("div");
            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = "question" + i;
            optionInput.value = j;
            const optionLabel = document.createElement("label");
            optionLabel.textContent = question.options[j];
            optionDiv.appendChild(optionInput);
            optionDiv.appendChild(optionLabel);
            questionDiv.appendChild(optionDiv);
        }
        quizQuestions.appendChild(questionDiv);
    }
}
document.getElementById("submitButton").addEventListener("click", function (e) {
    e.preventDefault();
    let score = 0;

    for (let i = 0; i < quiz.questions.length; i++) {
        const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === quiz.questions[i].answer) {
            score++;
        }
    }
    scores.push({
        username: loggedInUser.username,
        quizId: quizId,
        score: score
    });
    localStorage.setItem("scores", JSON.stringify(scores));
    alert("Quiz submitted successfully!");
    window.location.href = "home.html";
});
