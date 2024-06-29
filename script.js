let glazuur = document.querySelector("#glazuurlaag")
const glazuurknop = document.querySelector("#knopglazuur")

// check of de foto de class hide heeft 
function glazuurlaagtoevoegen(){
    if (glazuur.classList.contains("hidden")) {
       glazuur.classList.remove("hidden");
    } else {
        glazuur.classList.add("hidden");
    }

}

glazuurknop.addEventListener('click', glazuurlaagtoevoegen) 

//strik java

let strik = document.querySelector("#striklaag")
const strikknop = document.querySelector("#knopstrik")

function striklaagtoevoegen(){
    if (strik.classList.contains("hidden")) {
       strik.classList.remove("hidden");
    } else {
        strik.classList.add("hidden");
    }

}

strikknop.addEventListener('click', striklaagtoevoegen)

//kaarsjes

let kaarsjes = document.querySelector("#kaarsjeslaag")
const kaarsjesknop = document.querySelector("#knopkaarsjes")

function kaarsjeslaagtoevoegen(){
    if (kaarsjes.classList.contains("hidden")) {
        kaarsjes.classList.remove("hidden");
    } else {
        kaarsjes.classList.add("hidden");
    }

}

kaarsjesknop.addEventListener('click', kaarsjeslaagtoevoegen)

// sprinkels java

let sprinkels = document.querySelector("#sprinkelslaag")
const sprinkelsknop = document.querySelector("#knopsprinkels")

function sprinkelslaagtoevoegen(){
    if (sprinkels.classList.contains("hidden")) {
       sprinkels.classList.remove("hidden");
    } else {
        sprinkels.classList.add("hidden");
    }

}

sprinkelsknop.addEventListener('click', sprinkelslaagtoevoegen)

// vlaggen java

let vlaggen = document.querySelector("#vlaggenlaag")
const vlaggenknop = document.querySelector("#knopvlaggen")

function vlaggenlaagtoevoegen(){
    if (vlaggen.classList.contains("hidden")) {
        vlaggen.classList.remove("hidden");
    } else {
        vlaggen.classList.add("hidden");
    }

}

vlaggenknop.addEventListener('click', vlaggenlaagtoevoegen)

// aardbeien java

let aardbeien = document.querySelector("#aardbeienlaag")
const aardbeienknop = document.querySelector("#knopaardbeien")

function aardbeienlaagtoevoegen(){
    if (aardbeien.classList.contains("hidden")) {
        aardbeien.classList.remove("hidden");
    } else {
        aardbeien.classList.add("hidden");
    }

}

aardbeienknop.addEventListener('click', aardbeienlaagtoevoegen)

//klaar knop
const klaarknop = document.querySelector("#klaarknop")

function drukklaarknop(){ 
    console.log ("tekst")
var audio = document.getElementById("audio");
audio.play();
}

klaarknop.addEventListener('click', drukklaarknop)
// bron muziek: https://pixabay.com/music/search/birthday/