function showQuiz() {
    let usedQuestions = [];
    let answerNumber = 1;

    while (usedQuestions.length < 5) {
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
    alert("Du hast " + correctAnswers + " von 5" + " Fragen richtig beantwortet.");
}

let collectShown = false;
function showCollectables() {
    if (!collectShown) {
      let tempstring = "";
    for (i = 0; i < collectables.length; i++) {
        if (collect[i].status == "unlocked") {
            tempstring += `
                <div id="collectable" class="collBox" onclick="showCollectInfo(${collectables[i].id})">
                    <img src="${collectables[i].img}" alt="collectable${collectables[i].id}">
                </div>
            `
        } else {
            tempstring += `
                <div id="collectable" class="collBox" onclick="showCollectInfo(${collectables[i].id})">
                    <img src="../inhalt/Bilder/collect/not_found.png" alt="collectable${collectables[i].id}">
                </div>
            `
        }
    }
        document.getElementById("quiz").style.display = 'none';
        document.getElementById("check").style.display = 'none';
        document.getElementById("collectables").innerHTML = tempstring;  

        for (i = 0; i < collectables.length; i++) {
            if (collectables[i].rarity == "rare") {
               document.getElementsByClassName("collBox")[i].style = 'border: solid 5px rgb(22, 196, 239); border-radius: 5px;' 
            }
            if (collectables[i].rarity == "common") {
               document.getElementsByClassName("collBox")[i].style = 'border: solid 5px rgb(255, 255, 255); border-radius: 5px;' 
            }
            if (collectables[i].rarity == "uncommon") {
               document.getElementsByClassName("collBox")[i].style = 'border: solid 5px rgb(101, 117, 2); border-radius: 5px;' 
            }
            if (collectables[i].rarity == "legendary") {
               document.getElementsByClassName("collBox")[i].style = 'border: solid 5px rgb(228, 158, 0); border-radius: 5px;' 
            }
            if (collectables[i].rarity == "mythic") {
               document.getElementsByClassName("collBox")[i].style = 'border: solid 5px rgb(195, 0, 0); border-radius: 5px;' 
            }
            if (collectables[i].rarity == "epic") {
               document.getElementsByClassName("collBox")[i].style = 'border: solid 5px rgb(187, 34, 185); border-radius: 5px;' 
            }
        }
        collectShown = true;
    } else {
        document.getElementById("quiz").style.display = 'block';
        document.getElementById("check").style.display = 'block';
        document.getElementById("collectables").innerHTML = '';
        collectShown = false;
    }
    
}

let isCollectImg = true;
function showCollectInfo(id) {
    if (collect[id].status == "unlocked") {
       let tempstring = "";
    if (isCollectImg) {
        tempstring += `
            <div id="collectName"><h2>${collectables[id].name}</h2></div>
            <div id="collectDescription"><p>${collectables[id].description}</p></div>
        `

        document.getElementsByClassName("collBox")[id].innerHTML = tempstring;
        isCollectImg = false;
    } else {
        tempstring += `
            <img src="${collectables[id].img}" alt="collectable${collectables[id].id}"></img>
        `

        document.getElementsByClassName("collBox")[id].innerHTML = tempstring;
        isCollectImg = true;
    } 
    }
}