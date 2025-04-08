let num = [
    '../inhalt/Bilder/suits/mk1.png',
    '../inhalt/Bilder/suits/mk2.png',
    '../inhalt/Bilder/suits/mk3.png',
    '../inhalt/Bilder/suits/mk4.png',
    '../inhalt/Bilder/suits/mk5.png'
 ]

let bild1 = document.getElementById("armor1")
let bild2 = document.getElementById("armor2")
let bild3 = document.getElementById("armor3")

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

        tempstring += '<div id="infoImg"><div><div><h2>Filme:</h2></div><div id="suitFilm">'
        for (let i = 0; i < suits[id].films.length; i++) {
            tempstring += `<p>${suits[id].films[i]}</p>`
        }

        tempstring += '</div><div><h2>Faehigkeiten:</h2></div><div id="suitAbilitie">'
        for (let i = 0; i < suits[id].abilities.length; i++) {
            tempstring += `<p>${suits[id].abilities[i]}</p>`
        }

        tempstring += '</div></div>'

        tempstring += `<div><img src="${suits[id].img}" alt="${suits[id].name}"></div></div>`

        tempstring += `<div id="closeSuitInfo" onclick="closeSuitInfo()">X</div></div>`

    document.getElementById('infoSuits').innerHTML = tempstring;
}

function closeSuitInfo() {
    document.getElementById('infoSuits').innerHTML = '';
;
}