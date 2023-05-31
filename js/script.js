//Création de la constante bubble
const bubble = document.createElement('span');

//Ajout d'une classe au span
bubble.classList.add('bubble');

//Injection de bubble dans le body
document.body.appendChild(bubble);

//Création d'une taille random pour les bubbles + taille min 100px
const size = Math.random() * 200 + 100 + "px";

 //Ajout de la hauteur et la longueur dans sa classe

 bubble.style.height = size;
 bubble.style.width = size;

 //Création de l'emplacement random par rapport au top de la page pour les bubble & toujours à 60% pour qu'elles se créent vers le bas

 bubble.style.top = Math.random() * 100 + 60 + "%";

 //Création de l'emplacement random par rapport au coté gauche de la page pour les bubble pour un effet de flottement
 
 bubble.style.left = Math.random() * 100 + "%";

 //Utilisation de setProperty pour changer la valeur de left en mode random

 bubble.style.setProperty('--left', Math.random() * 100 + "%")