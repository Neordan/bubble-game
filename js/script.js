//Création de la fonction bubbleMaker

const bubbleMaker = () => {

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
    
    //Création d'une valeur random négatif ou positif pour que les bubbles se croisent  
    const plusMinus = Math.random() > 0.5 ?1 : -1;

    //Utilisation de setProperty pour changer la valeur de left en mode random en utilisant aussi plusMinus

    bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%")
};

//toute les 0.3 secondes, création d'une bubble suite à la l'appel de la fonction bubbleMaker

setInterval(bubbleMaker, 300);