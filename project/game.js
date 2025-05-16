let gameIsRunning = false;
let enemySpawnInterval = 1000;
let enemyIsSpawning = false;
let enemyCount = 0;
let enemyAlive = false;

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

    if (enemyAlive) {
      let playerItemCollide = false;
      console.log(enemyCount);
      playerItemCollide = isColliding(document.getElementById('player'), document.getElementsByClassName(`enemy`)[enemyCount - 1]);

    if (playerItemCollide) {
        console.log('collide')
        playerItemCollide = false;
    }  
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

    enemySpawnInterval = (Math.random() * 1000) + 6000;

    document.getElementById('gameContent').innerHTML += `<div id="enemy${enemyCount}" class="enemy"><img src="../inhalt/Bilder/missile.gif" alt="missile"></div>`
    document.getElementsByClassName('enemy')[enemyCount].style.top = rndSpawnHeight + 'px';

    enemyAlive = true;

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
                duration: 6,
                ease: 'linear',
                onComplete: () => element[i].style.display = 'none',
                onComplete: () => enemyAlive = false,
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
        console.log('Keine Transformation gefunden.');
    }

    console.log(front1)
    console.log(window.innerWidth - 300 + front2)

    return ((front1 > (window.innerWidth - 300 + front2) && top1 < bottom2) && (front1 > front2 && bottom1 > top2));
};