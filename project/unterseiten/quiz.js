function showQuiz() {
    for (let i = 0; i < 4; i++) {
        let questionNum = Math.floor(Math.random() * questions.length);
       document.getElementById("quiz").innerHTML += `
        <div class="question">
            <div id="questionTitel">${questions[questionNum].titel}</div>
            <div id="answers">
                <div id="answer" onclick="safeAnswer('answer1', ${questionNum})">${questions[questionNum].answer1}</div>
                <div id="answer" onclick="safeAnswer('answer2', ${questionNum})">${questions[questionNum].answer2}</div>
                <div id="answer" onclick="safeAnswer('answer3', ${questionNum})">${questions[questionNum].answer3}</div>
                <div id="answer" onclick="safeAnswer('answer4', ${questionNum})">${questions[questionNum].answer4}</div>
            </div>
        </div><br>`
    }
}

showQuiz();

let answers = [];

function safeAnswer(answer, questionNumber) {
    answers[questionNumber] = answer;
    console.log(answers);
}

function checkAnswers() {
    let correctAnswers = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == questions[i].solution) {
            correctAnswers++;
        }
    }
    alert("Du hast " + correctAnswers + " von 4" + " Fragen richtig beantwortet.");
}