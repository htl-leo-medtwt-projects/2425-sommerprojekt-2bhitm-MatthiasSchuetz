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

    let playerItemCollide = false;
    playerItemCollide = isColliding(document.getElementById('player'), document.getElementsByClassName('enemy'));

    if (playerItemCollide) {
        console.log('collide')
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

    enemySpawnInterval = (Math.random() * 1000) + 2000;

    document.getElementById('gameContent').innerHTML += `<div class="enemy"><img src="../inhalt/Bilder/missile.gif" alt="missile"></div>`
    document.getElementsByClassName('enemy')[enemyCount].style.top = rndSpawnHeight + 'px';


    gsap.registerPlugin(ScrollTrigger);
    
    window.onload = ()=>{
        document.querySelector('body').style.opacity = 1;
    }
    
    let sections = document.querySelectorAll('.enemy');
    generateScrollAnimation(sections.length - 1);
    console.log(sections.length - 1)
    
    
    function generateScrollAnimation(i){
    let element = [];
    element[i] = sections[i];
    
        gsap.set(element[i], {
            x: '0%',
        });
        
            gsap.to(element[i], {
                x: "-260%",
                opacity: 1,
                duration: 1.8,
                ease: 'linear',
                onComplete: () => element[i].style.display = 'none',
                scrollTrigger: {
                    trigger: element[i],
                    start: '50% 120%'
                }
            });
    }

    enemyCount++;
    enemyIsSpawning = false;
}


//Von Sprite Game
function isColliding(div1, div2, tolerance = -5) {

    let d1OffsetTop = div1.offsetTop;
    let d1OffsetLeft = div1.offsetLeft; 
    let d1Height = div1.clientHeight;
    let d1Width = div1.clientWidth;
    let d1Top = d1OffsetTop + d1Height;
    let d1Left = d1OffsetLeft + d1Width;

    let d2OffsetTop = div2.offsetTop;
    let d2OffsetLeft = div2.offsetLeft; 
    let d2Height = div2.clientHeight;
    let d2Width = div2.clientWidth;
    let d2Top = d2OffsetTop + d2Height;
    let d2Left = d2OffsetLeft + d2Width;

    let distanceTop = d2OffsetTop - d1Top;
    let distanceBottom = d1OffsetTop - d2Top;
    let distanceLeft = d2OffsetLeft - d1Left;
    let distanceRight = d1OffsetLeft - d2Left;

    return !(tolerance < distanceTop || tolerance < distanceBottom || tolerance < distanceLeft || tolerance < distanceRight);
};
