function showQuiz() {
    let usedQuestions = [];
    let answerNumber = 1;

    while (usedQuestions.length < 4) {
        let questionNum = Math.floor(Math.random() * questions.length);
        if (!usedQuestions.includes(questionNum)) {
            usedQuestions.push(questionNum);
        }
    }

    let tempstring = "";
    for (let i = 0; i < usedQuestions.length; i++) {
        tempstring += `
        <div class="question">
            <div class="questionTitel">${questions[usedQuestions[i]].titel}</div>
            <div class="answers">
                <div class="answer" id="answer${answerNumber}" onclick="safeAnswer('answer1', ${usedQuestions[i]}, ${answerNumber}, 1)">${questions[usedQuestions[i]].answer1}</div>
                <div class="answer" id="answer${answerNumber + 1}" onclick="safeAnswer('answer2', ${usedQuestions[i]}, ${answerNumber + 1}, 2)">${questions[usedQuestions[i]].answer2}</div>
                <div class="answer" id="answer${answerNumber + 2}" onclick="safeAnswer('answer3', ${usedQuestions[i]}, ${answerNumber + 2}, 3)">${questions[usedQuestions[i]].answer3}</div>
                <div class="answer" id="answer${answerNumber + 3}" onclick="safeAnswer('answer4', ${usedQuestions[i]}, ${answerNumber + 3}, 4)">${questions[usedQuestions[i]].answer4}</div>
            </div>
        </div><br>`;
        answerNumber += 4;
    }

    document.getElementById("quiz").innerHTML = tempstring;
}
showQuiz();

let answers = [];

function safeAnswer(answer, questionNumber, id, num) {
    let startingNumber = 1;
    
    if (answers[questionNumber] != null) {
        switch (num) {
            case 1: startingNumber = id; break;
            case 2: startingNumber = id - 1; break;
            case 3: startingNumber = id - 2; break;
            case 4: startingNumber = id - 3; break;
        }
        for (let i = startingNumber; i <= startingNumber + 3; i++) {
            document.getElementById(`answer${i}`).style = ''
        }
    }
    document.getElementById(`answer${id}`).style = 'background: var(--color-gold-gradient);'
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