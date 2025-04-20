const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedInUser) {
    document.getElementById("welcomeUser").textContent = "Welcome " + loggedInUser.username;
}
else {
    alert("user not found , please login");
    window.location.href = "login.html";
}

const quizes = JSON.parse(localStorage.getItem("quizzes"));
if (quizes && quizes.length > 0) {
    const quizList = document.getElementById("quizList");
    for (let i = 0; i < quizes.length; i++) {
        const quizItem = document.createElement("li");
        const quizLink = document.createElement("a");
        quizLink.href = "quiz.html?id=" + quizes[i].id;
        quizLink.textContent = quizzes[i].title;
        quizItem.appendChild(quizLink);
        quizList.appendChild(quizItem);
    }
}
else {
    alert("no quizzes");
}