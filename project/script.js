let firstArmor = 2;

function changeArmorsRight() {
    let tempstring = "";

    for (let i = 0; i < 3; i++) {
        if ((firstArmor + 1) > 5) {
            tempstring += `<img id="armor" src="../inhalt/Bilder/suits/mk${2}.png" alt="mk${2}"></img>`
            firstArmor = 2;
        } else {
            tempstring += `<img id="armor" src="../inhalt/Bilder/suits/mk${firstArmor + 1}.png" alt="mk${firstArmor + 1}"></img>`
        }
        
        firstArmor++;
        console.log(firstArmor);
    }

    firstArmor -= 2;

    document.getElementById("shownArmor").innerHTML = tempstring;
}

function changeArmorsLeft() {
    let tempstring = "";

    for (let i = 0; i < 3; i++) {
        if((firstArmor - 1) <= 1) {
            tempstring += `<img id="armor" src="../inhalt/Bilder/suits/mk${5}.png" alt="mk${5}"></img>`
            firstArmor = 5;
        } else {
           tempstring += `<img id="armor" src="../inhalt/Bilder/suits/mk${firstArmor - 1}.png" alt="mk${firstArmor - 1}"></img>` 
        }
        firstArmor++;
        console.log(firstArmor);
    }

    firstArmor -= 4;

    document.getElementById("shownArmor").innerHTML = tempstring;
}