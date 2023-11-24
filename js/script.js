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

// Deck 1
const fighter1 = document.querySelector('.fighter1');
const mage1 = document.querySelector('.mage1');
const marksman1 = document.querySelector('.marksman1');
const support1 = document.querySelector('.support1');

// Deck 2
const fighter2 = document.querySelector('.fighter2');
const mage2 = document.querySelector('.mage2');
const marksman2 = document.querySelector('.marksman2');
const support2 = document.querySelector('.support2');

// Permet de faire pencher la carte de 10° à droite
let player1Counter = 0;
let player2Counter = 0;

// Ajout des valeurs d'attaque et de défense aux types de cartes
const cardValues = {
    fighter: { attack: 3, defense: 2 },
    mage: { attack: 5, defense: 1 },
    marksman: { attack: 7, defense: 3 },
    support: { attack: 2, defense: 5 }
};

function rotate10(combattants, player, cardType) {
    combattants.addEventListener('click', () => {
        if ((player === 1 && player1Counter < 1) || (player === 2 && player2Counter < 1)) {
            combattants.style.transform = "rotate(10deg)";

            if (player === 1) {
                player1Counter++;
                console.log("Joueur 1 - Compteur: " + player1Counter);
            } else if (player === 2) {
                player2Counter++;
                console.log("Joueur 2 - Compteur: " + player2Counter);
            }

            if (player1Counter === 1 && player2Counter === 1) {
                compareCards(cardType);
            }
        }
    });
}

function compareCards(cardType) {
    const player1Stats = cardValues[cardType];
    const player2Stats = cardValues[cardType];

    const player1Total = player1Stats.attack + player1Stats.defense;
    const player2Total = player2Stats.attack + player2Stats.defense;

    if (player1Total > player2Total) {
        console.log("Joueur 1 gagne !");
    } else if (player1Total < player2Total) {
        console.log("Joueur 2 gagne !");
    } else {
        console.log("Match nul !");
    }

    // Sélectionner deux nouvelles cartes pour chaque joueur
    selectNewCards(1);
    selectNewCards(2);
}

function rotate90(combattants, player, cardType) {
    combattants.style.transform = "rotate(90deg)";

    if (player === 1) {
        player1Counter++;
        console.log("Joueur 1 - Compteur: " + player1Counter);
    } else if (player === 2) {
        player2Counter++;
        console.log("Joueur 2 - Compteur: " + player2Counter);
    }

    if (player1Counter === 1 && player2Counter === 1) {
        compareCards(cardType);
    }
}

// Fonction pour sélectionner de nouvelles cartes
function selectNewCards(player) {
    // Ajoutez ici la logique pour permettre au joueur de choisir deux nouvelles cartes
    console.log("Joueur " + player + " choisit deux nouvelles cartes.");
    // Vous pouvez utiliser une interface utilisateur, une boîte de dialogue, etc., pour permettre au joueur de choisir de nouvelles cartes.
}

// Deck 1
rotate10(fighter1, 1, 'fighter');
rotate10(mage1, 1, 'mage');
rotate10(marksman1, 1, 'marksman');
rotate10(support1, 1, 'support');

// Deck 2
rotate10(fighter2, 2, 'fighter');
rotate10(mage2, 2, 'mage');
rotate10(marksman2, 2, 'marksman');
rotate10(support2, 2, 'support');