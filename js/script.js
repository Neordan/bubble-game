//Création de la constante bubble
const bubble = document.createElement('span');

//Ajout d'une classe au span
bubble.classList.add('bubble');

//Injection de bubble dans le body
document.body.appendChild(bubble);

//Création d'une taille random pour les bubble + taille min 100px
const size = Math.random() * 200 + 100 + "px";

 //Ajout de la hauteur et la longueur dans sa classe