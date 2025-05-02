let gameIsRunning = false;
let enemySpawnInterval = 1000;
let enemyIsSpawning = false;
let enemyCount = 0;

function startGame() {
    document.getElementById('körper').innerHTML = '';
    document.getElementById('körper').innerHTML = `<img id="gameBackgound" src="../inhalt/Bilder/background.gif" alt=""></img>`;

    document.getElementById('körper').innerHTML += `<div id="gameContent"></div>`
    document.getElementById('körper').innerHTML += `<div id="player"><img src="../inhalt/Bilder/suits/mk1.png" alt="mk1"></div>`

    gameIsRunning = true;
    gameLoop();
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

    if (enemyIsSpawning == false) {
        enemyIsSpawning = true;
        setTimeout(function() {
            spawnEnemys();
        }, enemySpawnInterval);
        console.log(enemySpawnInterval)
    }
    
    if (gameIsRunning) {
        setTimeout(gameLoop, 50);
    }
}


function movePlayer(y) {
    if (document.getElementById('player').offsetTop >= 52 && document.getElementById('player').offsetTop <= 435) {
       document.getElementById('player').style.top = (document.getElementById('player').offsetTop - (y * 15)) + 'px'; return;
    } else {
        if (document.getElementById('player').offsetTop <= 52) {
            document.getElementById('player').style.top = (document.getElementById('player').offsetTop + 5) + 'px'; return;
        } else {
            document.getElementById('player').style.top = (document.getElementById('player').offsetTop - 5) + 'px'; return;
        }
    }
}


function spawnEnemys() {
    let rndSpawnHeight = (Math.random() * 500) - 100;

    enemySpawnInterval = (Math.random() * 5000) + 1000;

    document.getElementById('gameContent').innerHTML += `<div class="enemy"><img src="../inhalt/Bilder/missile.gif" alt="missile"></div>`
    document.getElementsByClassName('enemy')[enemyCount].style.top = rndSpawnHeight + 'px';

    enemyCount++;
    enemyIsSpawning = false;
}