let surf = document.getElementById('surf');
let solBas = document.getElementById('solBas');
let perso = document.getElementById('perso');
let solHaut = document.getElementById('solHaut');
let paysage = document.getElementById('paysage');

let ciel = document.querySelector('body')
let decalage = 0 ;

window.onload = () => {
    document.addEventListener("keydown", marcher);
    document.addEventListener("keyup", monter);
}

function marcher(event){
    switch (event.key){
        case "ArrowLeft":
            parallaxe();
            perso.classList.add('persoGauche');
            perso.classList.remove('persoDroite');
            surf.classList.add('surfGauche');
            surf.classList.remove('surfDroite');
            decalage ++;
            break;
        case "ArrowRight":
            perso.classList.add('persoDroite');
            perso.classList.remove('persoGauche');
            surf.classList.add('surfDroite');
            surf.classList.remove('surfGauche');
            decalage --;
            parallaxe();
            break;
    }
}

// function stopper(event){
//     surf.classList.remove("surfGauche");
//     surf.classList.remove("surfDroite");
//     perso.classList.remove("surfGauche");
//     perso.classList.remove("surfDroite");
// }
// function monter(event){
//     switch(event.key){
//     case "ArrowUp":
//     perso.classList.add('persoHaut');
//     perso.classList.remove('persoBas');
//     surf.classList.add('surfHaut');
//     surf.classList.remove('surfBas');
//     decalage ++;
//     console.log('pressUPOK');
//     break;
//     }

// }

function parallaxe() {
            solBas.style.backgroundPositionX = (decalage * 10) + "px";
            // solBas.style.backgroundPositionX = (decalage * 4) + "px";
            // solHaut.style.backgroundPositionX = (decalage * 3) + "px";
            // paysage.style.backgroundPositionX = (decalage * 0.5) + "px";
            // ciel.style.backgroundPositionX = (decalage *10)+ "px";
};