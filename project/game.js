let gameIsRunning = false;
let enemySpawnInterval = 1000;
let enemyIsSpawning = false;
let enemyCount = 0;
let enemyAlive = false;
let enemySpeed = 1.8;

function startGame() {
    document.getElementById('körper').innerHTML = '';
    document.getElementById('körper').innerHTML = `<img id="gameBackgound" src="../inhalt/Bilder/background.gif" alt=""></img>`;

    document.getElementById('körper').innerHTML += `<div id="gameContent"></div>`
    document.getElementById('körper').innerHTML += `<div id="player"><img src="../inhalt/Bilder/suits/mk1.png" alt="mk1"></div>`


    enemyCount = 0;
    enemyAlive = false;
    enemySpawnInterval = 1000;
    enemyIsSpawning = false;
    gameIsRunning = true;
    enemySpeed = 1.8;
    gameLoop();
}

let rulesOpened = false;
function showRules() {
    let tempstring = "";
    if (!rulesOpened) {
        document.getElementById('rules').style.display = 'block';
        document.getElementById('gameNavigation').style.display = 'none';

        tempstring = `<h2>Regeln:</h2><br>
                    <p>Weiche den Raketen mit Ironman aus. Wirst du getroffen bedeutet das "Game Over!"</p>
                    <h2>Steuerung:</h2><br>
                    <p>Bewege Ironman mit den Pfeiltasten oder "W" und "S" auf und ab.</<p>
                    <div id="closeRules" onclick="showRules()">Close</div>
                    `

        document.getElementById('rules').innerHTML = tempstring;
        rulesOpened = true;
    } else {
        document.getElementById('rules').style.display = 'none';
        document.getElementById('gameNavigation').style.display = 'block';
        rulesOpened = false;
    }
}


let KEY_EVENTS = {
    upArrow: false,
    downArrow: false
}
document.onkeydown = keyListenerDown;
document.onkeyup = keyListenerUp;

function keyListenerDown(e) {
    if (e.key === "ArrowUp" || e.key === "w") { // Up arrow
        KEY_EVENTS.upArrow = true;
    }
    if (e.key === "ArrowDown" || e.key === "s") { // Down arrow
        KEY_EVENTS.downArrow = true;
    }
}
function keyListenerUp(e) {
    if (e.key === "ArrowUp" || e.key === "w") { // Up arrow
        KEY_EVENTS.upArrow = false;
    }
    if (e.key === "ArrowDown" || e.key === "s") { // Down arrow
        KEY_EVENTS.downArrow = false;
    }
}


function gameLoop() {

    if (KEY_EVENTS.upArrow) {
        console.log('upArrow')
        movePlayer(1);
    }
    if (KEY_EVENTS.downArrow) {
        console.log('downArrow')
        movePlayer(-1);
    }

    if (enemyAlive) {
        let playerItemCollide = false;
        console.log(enemyCount);
        playerItemCollide = isColliding(document.getElementById('player'), document.getElementsByClassName(`enemy`)[enemyCount - 1]);

        if (playerItemCollide) {
            console.log('collide')
            playerItemCollide = false;
            gameOver();
        }
    }


    if (enemyIsSpawning == false) {
        enemyIsSpawning = true;
        setTimeout(function () {
            if (gameIsRunning) {
                spawnEnemys();
            }
        }, enemySpawnInterval);
    }


    if (gameIsRunning) {
        setTimeout(gameLoop, 50);
    }
}


function movePlayer(y) {
    if (document.getElementById('player').offsetTop >= 52 && document.getElementById('player').offsetTop <= 435) {
        document.getElementById('player').style.top = (document.getElementById('player').offsetTop - (y * 15)) + 'px';
    } else {
        if (document.getElementById('player').offsetTop <= 52) {
            document.getElementById('player').style.top = (document.getElementById('player').offsetTop + 5) + 'px';
        } else {
            document.getElementById('player').style.top = (document.getElementById('player').offsetTop - 5) + 'px';
        }
    }
}

function spawnEnemys() {
    let rndSpawnHeight = (Math.random() * 500) - 100;

    enemySpawnInterval = (Math.random() * 1000) + 2500;

    document.getElementById('gameContent').innerHTML += `<div id="enemy${enemyCount}" class="enemy"><img src="../inhalt/Bilder/missile.gif" alt="missile"></div>`
    document.getElementsByClassName('enemy')[enemyCount].style.top = rndSpawnHeight + 'px';

    enemyAlive = true;

    gsap.registerPlugin(ScrollTrigger);

    window.onload = () => {
        document.querySelector('body').style.opacity = 1;
    }

    let sections = document.querySelectorAll('.enemy');
    generateScrollAnimation(sections.length - 1);
    console.log(sections.length - 1)


    function generateScrollAnimation(i) {
        let element = [];
        element[i] = sections[i];

        gsap.set(element[i], {
            x: '0%',
        });

        gsap.to(element[i], {
            x: "-265%",
            opacity: 1,
            duration: enemySpeed,
            ease: 'linear',
            onComplete: () => element[i].style.display = 'none',
            onComplete: () => enemyAlive = false,
            onComplete: () => { if (enemySpeed > 0.6) { enemySpeed -= 0.1 } },
            scrollTrigger: {
                trigger: element[i],
                start: '50% 120%'
            }
        });

    }

    enemyCount++;
    enemyIsSpawning = false;
}


//Inspiriert von Sprite Game collision detection
function isColliding(div1, div2) {
    let top2;
    let front2;
    let bottom2;


    let top1 = div1.offsetTop;
    let front1 = div1.offsetLeft + div1.offsetWidth;
    let bottom1 = div1.offsetTop + div1.offsetHeight;

    const element = div2;
    const style = window.getComputedStyle(element);
    const matrix = style.transform;

    //Chat-Gpt
    if (matrix !== 'none') {
        const values = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
        const translateX = parseFloat(values[4]);
        top2 = div2.offsetTop + 180;
        front2 = translateX;
        bottom2 = div2.offsetTop + div2.offsetHeight - 180;
    } else {
        top2 = div2.offsetTop + 180;
        front2 = 644;
        bottom2 = div2.offsetTop + div2.offsetHeight - 180;
    }

    if (front2 < -window.innerWidth + 500) {
        div2.style.display = 'none';
        enemyAlive = false;
    }

    return (front1 > (window.innerWidth - 250 + front2) && top1 < bottom2 && bottom1 > top2 && (window.innerWidth - 250 + front2) > front1 - div1.offsetWidth);
};


function gameOver() {
    gameIsRunning = false;
    enemyAlive = false;
    enemySpawnInterval = 1000;
    enemyIsSpawning = false;

    document.getElementById('gameContent').innerHTML = '';
    document.getElementById('player').style.display = 'none';
    document.getElementById('gameBackgound').style.display = 'none';

    document.getElementById('gameContent').innerHTML = `<div id="gameOver">
    <h1>Game Over</h1>
    <div id="gameOverInfo">
    <h2>Überlebte Raketen: ${enemyCount - 1}</h2>
    <div id="restartButton" onclick="startGame()">Neustart</div>
    </div>
    </div>`;
    document.getElementById('körper').innerHTML += '<div id="back"><a href="../index.html">Back to Mainpage</a></div>';
}