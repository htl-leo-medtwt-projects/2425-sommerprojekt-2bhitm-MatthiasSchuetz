function showQuiz() {
    for (let i = 0; i < 4; i++) {
        let questionNum = Math.floor(Math.random() * questions.length);
       document.getElementById("quiz").innerHTML += `
        <div class="question">
            <div id="questionTitel">${questions[questionNum].titel}</div>
            <div id="answers">
                <div id="answer">${questions[questionNum].answer1}</div>
                <div id="answer">${questions[questionNum].answer2}</div>
                <div id="answer">${questions[questionNum].answer3}</div>
                <div id="answer">${questions[questionNum].answer4}</div>
            </div>
        </div><br>`
    }
}

showQuiz();