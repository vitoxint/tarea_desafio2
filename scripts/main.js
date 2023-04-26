var miTitulo = document.querySelector("h1");
miTitulo.innerHTML = "Hola Comidas";

var subtitle = document.getElementById("subtitle");
subtitle.innerText = "Todos tus platos favoritos";

var h4s = document.querySelectorAll("h4");
var h5s = document.querySelectorAll("h5");

//var com1 = document.getElementById("com1");

var counth4 = 1;
var counth5 = 1;

h4s.forEach(element => {
    
    element.innerHTML = "Receta del plato " + counth4;
    counth4++;

});

h5s.forEach(element => {
    
    element.innerHTML = "Comida N°" + counth5 + " : ";
    counth5++;

});



com1.innerHTML = com1.innerText.concat(" Papas rellena con ensalada") ;
com2.innerHTML = com2.innerText.concat(" Estofado") ;
com3.innerHTML = com3.innerText.concat(" Lechuga y Betarraga") ;
com4.innerHTML = com4.innerText.concat(" Puré de papas") ;
com5.innerHTML = com5.innerText.concat(" Ensalada") ;
com6.innerHTML = com6.innerText.concat(" Papas asadas") ;
com7.innerHTML = com7.innerText.concat(" Porotos con huevo") ;
/* var com7 = document.getElementById("com7");*/
com7.innerText = "Sopaipas";
var desc7 = document.getElementById("desc7");
desc7.innerText = "La sopaipilla es un tipo de fritura hecha a partir de una masa de harina de trigo frita en aceite o manteca de cerdo."; 

