window.addEventListener('load', () => {
    // Code à exécuter une fois que la page est entièrement chargée

    // Récupération du h3
    const counterDisplay = document.querySelector('h3');

    // Création d'une variable counter
    let counter = 0;

    // Création de la fonction bubbleMaker
    const bubbleMaker = () => {
        // Création de la constante bubble
        const bubble = document.createElement('span');

        // Ajout d'une classe au span
        bubble.classList.add('bubble');

        // Injection de bubble dans le body
        document.body.appendChild(bubble);

        // Création d'une taille random pour les bubbles + taille min 100px
        const size = Math.random() * 200 + 100 + "px";

        // Ajout de la hauteur et de la largeur dans sa classe
        bubble.style.height = size;
        bubble.style.width = size;

        // Création de l'emplacement random par rapport au top de la page pour les bubble & toujours à 60% pour qu'elles se créent vers le bas
        bubble.style.top = Math.random() * 100 + 60 + "%";

        // Création de l'emplacement random par rapport au côté gauche de la page pour les bubble pour un effet de flottement
        bubble.style.left = Math.random() * 100 + "%";

        // Création d'une valeur random négative ou positive pour que les bubbles se croisent
        const plusMinus = Math.random() > 0.5 ? 1 : -1;

        // Utilisation de setProperty pour changer la valeur de left en mode random en utilisant aussi plusMinus
        bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");

        // Ajout d'un événement au clic pour éclater les bubbles avec incrémentation du compteur
        bubble.addEventListener("click", () => {
            counter++;
            counterDisplay.textContent = counter;
            bubble.remove();
        });

        // Autodestruction des bubbles au bout de 8s
        setTimeout(() => {
            // Supprimer les bubbles
            bubble.remove();
        }, 8000);
    };


    // Toutes les 1 seconde, création d'une bubble suite à l'appel de la fonction bubbleMaker
    setInterval(bubbleMaker, 1000);

});