
let num = [
    '../inhalt/Bilder/suits/mk1.png',
    '../inhalt/Bilder/suits/mk2.png',
    '../inhalt/Bilder/suits/mk3.png',
    '../inhalt/Bilder/suits/mk4.png',
    '../inhalt/Bilder/suits/mk5.png'
 ]

let bild1 = document.getElementsByClassName("armor")[0]
let bild2 = document.getElementsByClassName("armor")[1]
let bild3 = document.getElementsByClassName("armor")[2]

function left() {
    console.log(suits)
let tempR = suits[suits.length - 1];
for(i = suits.length - 1; i > 0; i--) {
 suits[i] = suits[i - 1];
}

suits[0] = tempR;//num an der Stelle der Anzahl der Anzüge im Array

bild1.innerHTML = `<img onclick="showSuitInfo(0)" src="${suits[0].img}" alt="${suits[0].name}">`;
bild2.innerHTML = `<img onclick="showSuitInfo(1)" src="${suits[1].img}" alt="${suits[1].name}">`;
bild3.innerHTML = `<img onclick="showSuitInfo(2)" src="${suits[2].img}" alt="${suits[2].name}">`;
}

function right() {
let tempR = suits[0];
for(i = 0; i < suits.length; i++) {
 suits[i] = suits[i + 1];
}

suits[suits.length -1] = tempR;//num an der Stelle der Anzahl der Anzüge im Array

bild1.innerHTML = `<img onclick="showSuitInfo(0)" src="${suits[0].img}" alt="${suits[0].name}">`;
bild2.innerHTML = `<img onclick="showSuitInfo(1)" src="${suits[1].img}" alt="${suits[1].name}">`;
bild3.innerHTML = `<img onclick="showSuitInfo(2)" src="${suits[2].img}" alt="${suits[2].name}">`;
}


function showSuitInfo(id) {
    console.log(id)
    console.log(suits)
    let tempstring = `
        <div id="suitInfo">
            <div id="suitName"><h2>${suits[id].name}</h2></div>
        `

        tempstring += '<div id="infoImg"><div><div><h2>Filme:</h2></div><div id="suitFilm"><ul>'
        for (let i = 0; i < suits[id].films.length; i++) {
            tempstring += `<li><p>${suits[id].films[i]}</p></li>`
        }

        tempstring += '</ul></div><div><h2>Faehigkeiten:</h2></div><div id="suitAbilitie"><ul>'
        for (let i = 0; i < suits[id].abilities.length; i++) {
            tempstring += `<li><p>${suits[id].abilities[i]}</p></li>`
        }

        tempstring += '</ul></div></div>'

        tempstring += `<div><img src="${suits[id].img}" alt="${suits[id].name}"></div></div>`

        tempstring += `<div id="closeSuitInfo" onclick="closeSuitInfo()">X</div></div>`

    document.getElementById('infoSuits').innerHTML = tempstring;
}

function closeSuitInfo() {
    document.getElementById('infoSuits').innerHTML = '';
;
}


let rulesOpened = false;
function showRules() {
    let tempstring = "";
    if (!rulesOpened) {
      document.getElementById('rules').style.display = 'block';
      document.getElementById('gameNavigation').style.display = 'none';

    tempstring = `<h2>Regeln:</h2><br>
                    <p>Weiche den Raketen und Flugzeugen mit Ironman aus. Wirst du getroffen bedeutet das "Game Over!"</p>
                    <h2>Steuerung:</h2><br>
                    <p>Bewege Ironman mit den Pfeiltasten auf und ab.</<p>
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


/*Gsap Scroll Animationen*/
scrollAnimation();

function scrollAnimation() {
    gsap.registerPlugin(ScrollTrigger);
    
    
    window.onload = ()=>{
        document.querySelector('body').style.opacity = 1;
    }
    
    let sections = document.querySelectorAll('.animationItem');
    for (let i = 0; i < sections.length; i++) {
        generateScrollAnimation(i);
    }
    
    function generateScrollAnimation(i){
        let element = sections[i];
    
        if(i%2 == 0) {
            gsap.set(element, {
                x: '-50%',
                scale: 0,
            });
        } else {
            gsap.set(element, {
                x: '50%',
                scale: 0,
            });
        }

        
        gsap.to(element, {
            x: 0,
            scale: 1,
            duration: 2.5,
            ease: 'power4.out',
            scrollTrigger: {
                trigger: element,
                start: '50% 120%'
            }
        });
    }
}




function generateSite() {
    document.getElementById('navigation').innerHTML = `<div class="animationItem"><a class="navItem" href="./unterseiten/allgemein.html"><div class="navBoxLeft"><h2 class="ueberschrift">Allgemein</h2><img id="helmet" src="./inhalt/Bilder/helmet.png" alt="helmet"><p class="info">Allgemeine Informationen über Ironman und seine Rüstungen.</p></div></a></div>
        <div class="animationItem"><a class="navItem" href="./unterseiten/filme.html"><div class="navBoxRight"><img src="./inhalt/Bilder/flying.png" alt="flying"><h2 class="ueberschrift">Filme</h2><p class="info">Informationen zu allen Ironman und Avengers Filmen.</p></div></a></div>
        <div class="animationItem"><a class="navItem" href="./unterseiten/games.html"><div class="navBoxLeft"><h2 class="ueberschrift">Games</h2><img id="lego_marvel_sh_logo" src="./inhalt/Bilder/lego_marvel_sh.png" alt="lego_logo"><p class="info">Informationen zu spielen wie "Ironman VR" oder "Lego Marvel Superheros".</p></div></a></div>
        <div class="animationItem"><a class="navItem" href="./unterseiten/quiz.html"><div class="navBoxRight"><img id="thinking_img" src="./inhalt/Bilder/thinking.png" alt="thinking"><h2 class="ueberschrift">Quiz</h2><p class="info">Ein Quiz über die Inhalte der Seite mit Belohnungen.</p></div></a></div>
        <div class="animationItem"><a class="navItem" href="./unterseiten/minigame.html"><div class="navBoxLeft"><h2 class="ueberschrift">Minigame</h2><img id="idel_gif" src="./inhalt/Bilder/idel 2.gif" alt="idel"><p class="info">Rette die Welt in diesem Minispiel und erhalte Belohnungen.</p></div></a></div>`;
        scrollAnimation();
}
generateSite();
