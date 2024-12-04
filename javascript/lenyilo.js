const gomb = document.getElementById("nyito");

function megjelen() {document.getElementById("orszag").classList.toggle("megjelen");
    gomb.classList.toggle("megjelen");
}

let le = true;
function atir() {
if (le == true) {document.getElementById("nyil").innerHTML = "⮝";
le = !le;}
else {document.getElementById("nyil").innerHTML = "⮟";
le = !le;}
}

gomb.addEventListener("click", megjelen);
gomb.addEventListener("click", atir);