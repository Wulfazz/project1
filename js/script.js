//Prompt avec les règles du jeu 
    // si possible changement des noms de joueurs

// Sélection des persos 
    // cliquer sur la carte 
        //Afichage d'îcones pour représenter les héros 
        // Passer dessur ( hover ) fera grandir 
            //montrer les caractéristiques
            //Cliquer pour sélectionner le perso 
        // joueur1 commence
            
                // L'écran du joueur1 est gris quand la sélection est faîte
        //Au tour du joueur2
    // Il faut que les 8 cartes soient choisies pour commencer
    // Bouton commencer la partie apparaît

//Déroulé de la partie : 
    //Choix des persos : Inclinaison de la carte sélectionnée 
        //Le joueur choisi la carte qu'il souhaite jouer
            // choix entre 1 à 5 pièces pour améliorer le perso
            // 10 pièces maximum attribuable
                // Défense totale : Pts de vie + bonus si pièces 
                // Attaque totale : Pts attaque + bonus si pièces
        //Si attaque < Défense  
            //Perso mort, filtre rouge = défaite
            //Perso vivant, filtre bleu = victoire
            // Les cartes utilisées tournent à 90°
    // La personne qui gagne 3 fois gagne la partie.
        // Si on peut on mettra le victory et defeat à la fin de partie
        // Prompt avec joueur 1 ou joueur 2

// Constantes catégories

    //deck1
const fighter1 = document.querySelector('.fighter1');
const mage1 = document.querySelector('.mage1');
const marksman1 = document.querySelector('.marksman1');
const support1 = document.querySelector('.support1');

    //deck2
const fighter2 = document.querySelector('.fighter2');
const mage2 = document.querySelector('.mage2');
const marksman2 = document.querySelector('.marksman2');
const support2 = document.querySelector('.support2');

//Permet de faire pencher la carte de 10° à droite
function rotate10(combattants){
    combattants.addEventListener('click', () => {
        combattants.style.transform = "rotate(10deg)"
    })
}

//deck1
rotate10(fighter1)
rotate10(mage1)
rotate10(marksman1)
rotate10(support1)

//deck2
rotate10(fighter2)
rotate10(mage2)
rotate10(marksman2)
rotate10(support2)


//compteurs +1 si 1 pas déclenché




    