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

function right() {
    console.log(suits)
let tempR = suits[suits.length - 1];
for(i = suits.length - 1; i > 0; i--) {
 suits[i] = suits[i - 1];
}

suits[0] = tempR;//num an der Stelle der Anzahl der Anzüge im Array

bild1.innerHTML = `<img src="${suits[0].img}" alt="${suits[0].name}">`;
bild2.innerHTML = `<img src="${suits[1].img}" alt="${suits[1].name}">`;
bild3.innerHTML = `<img src="${suits[2].img}" alt="${suits[2].name}">`;
}

function left() {
let tempR = suits[0];
for(i = 0; i < suits.length; i++) {
 suits[i] = suits[i + 1];
}

suits[suits.length -1] = tempR;//num an der Stelle der Anzahl der Anzüge im Array

bild1.innerHTML = `<img src="${suits[0].img}" alt="${suits[0].name}">`;
bild2.innerHTML = `<img src="${suits[1].img}" alt="${suits[1].name}">`;
bild3.innerHTML = `<img src="${suits[2].img}" alt="${suits[2].name}">`;
}