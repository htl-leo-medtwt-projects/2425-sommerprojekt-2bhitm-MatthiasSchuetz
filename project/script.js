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
    console.log(num)
let tempR = num[num.length - 1];
for(i = num.length - 1; i > 0; i--) {
 num[i] = num[i - 1];
}

num[0] = tempR;//num an der Stelle der Anzahl der Anzüge im Array

bild1.innerHTML = `<img src="${num[0]}" alt="">`;
bild2.innerHTML = `<img src="${num[1]}" alt="">`;
bild3.innerHTML = `<img src="${num[2]}" alt="">`;
}

function left() {
let tempR = num[0];
for(i = 0; i < num.length; i++) {
 num[i] = num[i + 1];
}

num[num.length -1] = tempR;//num an der Stelle der Anzahl der Anzüge im Array

bild1.innerHTML = `<img src="${num[0]}" alt="">`;
bild2.innerHTML = `<img src="${num[1]}" alt="">`;
bild3.innerHTML = `<img src="${num[2]}" alt="">`;
}