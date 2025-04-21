// Ensure only admin can access this page (you can check by hardcoding the admin credentials)
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser || loggedInUser.email !== "admin@example.com" ) {
    alert(loggedInUser.email)
    alert("Access denied. Only admin can view this page.");
    window.location.href = "index.html";
}

const scores = JSON.parse(localStorage.getItem("scores")) || [];
const userScoresContainer = document.getElementById("userScores");

if (scores.length > 0) {
    for (let i = 0; i < scores.length; i++) {
        const scoreData = scores[i];

        const userScoreDiv = document.createElement("div");
        userScoreDiv.classList.add("userScore");

        const userName = document.createElement("h4");
        userName.textContent = `User: ${scoreData.username}`;
        userScoreDiv.appendChild(userName);

        const quizTitle = document.createElement("p");
        quizTitle.textContent = `Quiz: ${scoreData.quizId}`;
        userScoreDiv.appendChild(quizTitle);

        const userScore = document.createElement("p");
        userScore.textContent = `Score: ${scoreData.score}`;
        userScoreDiv.appendChild(userScore);

        userScoresContainer.appendChild(userScoreDiv);
    }
} else {
    const noScoresMessage = document.createElement("p");
    noScoresMessage.textContent = "No quiz scores available.";
    userScoresContainer.appendChild(noScoresMessage);
}
