let num = [
    '<img src="../inhalt/Bilder/suits/mk1.png" alt="mk1">',
    '<img src="../inhalt/Bilder/suits/mk2.png" alt="mk2">',
    '<img src="../inhalt/Bilder/suits/mk3.png" alt="mk3">',
    '<img src="../inhalt/Bilder/suits/mk4.png" alt="mk4">',
    '<img src="../inhalt/Bilder/suits/mk5.png" alt="mk5">'
 ]

let bild1 = document.getElementById("armor1")
let bild2 = document.getElementById("armor2")
let bild3 = document.getElementById("armor3")

function right() {
let tempR = num[0];
for(i = 0; i < num.length; i++) {
 num[i] = num[i + 1];
}

num[num.length - 1] = tempR;//num an der Stelle der Anzahl der Anzüge im Array

bild1.innerHTML = num[2];
bild2.innerHTML = num[1];
bild3.innerHTML = num[0];
}

function left() {
let tempR = num[0];
for(i = 0; i < num.length; i++) {
 num[i] = num[i + 1];
}

num[num.length -1] = tempR;//num an der Stelle der Anzahl der Anzüge im Array

bild1.innerHTML = num[0];
bild2.innerHTML = num[1];
bild3.innerHTML = num[2];
}