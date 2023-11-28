//faire apparaître les 10 vies
document.addEventListener('DOMContentLoaded', function () {
  createLives('.viesJ1', '.vieJ1');
  createLives('.viesJ2', '.vieJ2');
});

function createLives(containerSelector, originalLifeSelector) {
  let gameContainer = document.querySelector(containerSelector);
  let originalLife = document.querySelector(originalLifeSelector);

  for (var i = 0; i < 9; i++) {
      let lifeClone = originalLife.cloneNode(true);
      gameContainer.appendChild(lifeClone);
  }

  disableButtons();
}

  // créer tour par tour
  let nombreTour = 1;
  let cardsJ1 = document.querySelectorAll('#cardsJ1');
  let cardsJ2 = document.querySelectorAll('#cardsJ2');
  let boutonReady = document.querySelector('.ready');
  let btnNext = document.querySelectorAll('#next');
  let btnNextJ2 = document.querySelectorAll('#nextJ2');
  
  // click sur bouton lance le jeu et cacher le bouton
  document.addEventListener('DOMContentLoaded', function () {
    boutonReady.addEventListener('click', startGame);
  });
  
  function startGame() {
    boutonReady.style.display = 'none';
    jeuTour();
  }

  btnNext.forEach((bouton) => {
    bouton.addEventListener('click', function () {
      nombreTour++;
      jeuTour();
    });
  });

  btnNextJ2.forEach((bouton) => {
    bouton.addEventListener('click', function () {
      nombreTour++;
      jeuTour();
    });
  });

  // Désactiver les button
  function disableButtons() {
    btnNext.forEach((bouton) => bouton.setAttribute('disabled', true));
    btnNextJ2.forEach((bouton) => bouton.setAttribute('disabled', true));
  }
  
  function enableButtons() {
    btnNext.forEach((bouton) => bouton.removeAttribute('disabled'));
    btnNextJ2.forEach((bouton) => bouton.removeAttribute('disabled'));
  }

  // lancement boucle while
  function jeuTour() {
    if (nombreTour % 2 !== 0) {
      console.log('J1 joue');
      cardsJ2.forEach((card) => card.classList.add('grise'));
      cardsJ1.forEach((card) => card.classList.remove('grise'));
      btnNextJ2.forEach((bouton) => bouton.setAttribute('disabled', true));
      btnNext.forEach((bouton) => bouton.removeAttribute('disabled'));
    } else {
      console.log('J2 joue');
      cardsJ1.forEach((card) => card.classList.add('grise'));
      cardsJ2.forEach((card) => card.classList.remove('grise'));
      btnNext.forEach((bouton) => bouton.setAttribute('disabled', true));
      btnNextJ2.forEach((bouton) => bouton.removeAttribute('disabled'));
    }
  }

  // ATTAQUES J1
  let attaqueRuby = document.querySelector('.btnAttaque1J1');
  let specialeRuby = document.querySelector('.btnSpeciale1J1');
  let attaqueWanwan = document.querySelector('.btnAttaque2J1');
  let specialeWanwan = document.querySelector('.btnSpeciale2J1');
  let attaqueAngela = document.querySelector('.btnAttaque3J1');
  let specialeAngela = document.querySelector('.btnSpeciale3J1');
  let attaqueEudora = document.querySelector('.btnAttaque4J1');
  let specialeEudora = document.querySelector('.btnSpeciale4J1');
  let gameContainer2 = document.querySelector('.viesJ2');
  
  attaqueRuby.addEventListener('click', function () {
    AttaqueTortue();
    let vies2 = document.querySelectorAll('.viesJ2 .vieJ2');
    if (vies2.length > 0) {
      let derniervie2 = vies2[vies2.length - 1];
      gameContainer2.removeChild(derniervie2);
    }
    checkPerdant();
  });
  specialeRuby.addEventListener('click', function () {
    let vies2 = document.querySelectorAll('.viesJ2 .vieJ2');
    let nombreViesAEnlever = Math.min(vies2.length, 2);
  
    if (nombreViesAEnlever > 0) {
      for (let i = 0; i < nombreViesAEnlever; i++) {
        let derniervie2 = vies2[vies2.length - 1 - i];
        gameContainer2.removeChild(derniervie2);
      }
    }
    specialeRuby.disabled = true;
    checkPerdant();
  });
  attaqueWanwan.addEventListener('click', function () {
    let vies2 = document.querySelectorAll('.viesJ2 .vieJ2');
    let nombreViesAEnlever = Math.min(vies2.length, 2);
  
    if (nombreViesAEnlever > 0) {
      for (let i = 0; i < nombreViesAEnlever; i++) {
        let derniervie2 = vies2[vies2.length - 1 - i];
        gameContainer2.removeChild(derniervie2);
      }
    }
    attaqueWanwan.disabled = true;
    checkPerdant();
  });
  specialeWanwan.addEventListener('click', function () {
    let vies2 = document.querySelectorAll('.viesJ2 .vieJ2');
    let nombreViesAEnlever = Math.min(vies2.length, 4);
  
    if (nombreViesAEnlever > 0) {
      for (let i = 0; i < nombreViesAEnlever; i++) {
        let derniervie2 = vies2[vies2.length - 1 - i];
        gameContainer2.removeChild(derniervie2);
      }
    }
    specialeWanwan.disabled = true;
    checkPerdant();
  });
  attaqueAngela.addEventListener('click', function () {
    let vies2 = document.querySelectorAll('.viesJ2 .vieJ2');
    if (vies2.length > 0) {
      let derniervie2 = vies2[vies2.length - 1];
      gameContainer2.removeChild(derniervie2);
    }
    checkPerdant();
  });
  specialeAngela.addEventListener('click', function () {
    let viesJ1 = document.querySelectorAll('.viesJ1 .vieJ1');
    let nouveauvieJ1 = document.createElement('div');
    nouveauvieJ1.className = 'vieJ1';
    document.querySelector('.viesJ1').appendChild(nouveauvieJ1);
    specialeAngela.disabled = true;
    checkPerdant();
  });
  attaqueEudora.addEventListener('click', function () {
    let vies2 = document.querySelectorAll('.viesJ2 .vieJ2');
    if (vies2.length > 0) {
      let derniervie2 = vies2[vies2.length - 1];
      gameContainer2.removeChild(derniervie2);
    }
    checkPerdant();
  });
  specialeEudora.addEventListener('click', function () {
    let vies2 = document.querySelectorAll('.viesJ2 .vieJ2');
    let nombreViesAEnlever = Math.min(vies2.length, 2);
  
    if (nombreViesAEnlever > 0) {
      for (let i = 0; i < nombreViesAEnlever; i++) {
        let derniervie2 = vies2[vies2.length - 1 - i];
        gameContainer2.removeChild(derniervie2);
      }
    }
    specialeEudora.disabled = true;
    checkPerdant();
  });

  // ATTAQUES J2
  let attaqueBalmond = document.querySelector('.btnAttaque1J2');
  let specialeBalmond = document.querySelector('.btnSpeciale1J2');
  let attaqueNathan = document.querySelector('.btnAttaque2J2');
  let specialeNathan = document.querySelector('.btnSpeciale2J2');
  let attaqueEstes = document.querySelector('.btnAttaque3J2');
  let specialeEstes = document.querySelector('.btnSpeciale3J2');
  let attaqueCecilion = document.querySelector('.btnAttaque4J2');
  let specialeCecilion = document.querySelector('.btnSpeciale4J2');
  let gameContainer = document.querySelector('.viesJ1');
  
  attaqueBalmond.addEventListener('click', function () {
    let vies = document.querySelectorAll('.viesJ1 .vieJ1');
    if (vies.length > 0) {
      let derniervie = vies[vies.length - 1];
      gameContainer.removeChild(derniervie);
    }
    checkPerdant();
  });
  specialeBalmond.addEventListener('click', function () {
    let vies = document.querySelectorAll('.viesJ1 .vieJ1');
    let nombreViesAEnlever2 = Math.min(vies.length, 2);
  
    if (nombreViesAEnlever2 > 0) {
      for (let i = 0; i < nombreViesAEnlever2; i++) {
        let derniervie = vies[vies.length - 1 - i];
        gameContainer.removeChild(derniervie);
      }
    }
    specialeBalmond.disabled = true;
    checkPerdant();
  });
  attaqueNathan.addEventListener('click', function () {
    let vies = document.querySelectorAll('.viesJ1 .vieJ1');
    let nombreViesAEnlever2 = Math.min(vies.length, 2);
  
    if (nombreViesAEnlever2 > 0) {
      for (let i = 0; i < nombreViesAEnlever2; i++) {
        let derniervie = vies[vies.length - 1 - i];
        gameContainer.removeChild(derniervie);
      }
    }
    attaqueNathan.disabled = true;
    checkPerdant();
  });
  specialeNathan.addEventListener('click', function () {
    let vies = document.querySelectorAll('.viesJ1 .vieJ1');
    let nombreViesAEnlever2 = Math.min(vies.length, 4);
  
    if (nombreViesAEnlever2 > 0) {
      for (let i = 0; i < nombreViesAEnlever2; i++) {
        let derniervie = vies[vies.length - 1 - i];
        gameContainer.removeChild(derniervie);
      }
    }
    specialeNathan.disabled = true;
    checkPerdant();
  });
  attaqueEstes.addEventListener('click', function () {
    let vies = document.querySelectorAll('.viesJ1 .vieJ1');
    if (vies.length > 0) {
      let derniervie = vies[vies.length - 1];
      gameContainer.removeChild(derniervie);
    }
    checkPerdant();
  });
  specialeEstes.addEventListener('click', function () {
    let viesJ2 = document.querySelectorAll('.viesJ2 .vieJ2');
    let nouveauvieJ2 = document.createElement('div');
    nouveauvieJ2.className = 'vieJ2';
    document.querySelector('.viesJ2').appendChild(nouveauvieJ2);
    specialeEstes.disabled = true;
    checkPerdant();
  });
  attaqueCecilion.addEventListener('click', function () {
    let vies = document.querySelectorAll('.viesJ1 .vieJ1');
    if (vies.length > 0) {
      let derniervie = vies[vies.length - 1];
      gameContainer.removeChild(derniervie);
    }
    checkPerdant();
  });
  specialeCecilion.addEventListener('click', function () {
    let vies = document.querySelectorAll('.viesJ1 .vieJ1');
    let nombreViesAEnlever2 = Math.min(vies.length, 2);
  
    if (nombreViesAEnlever2 > 0) {
      for (let i = 0; i < nombreViesAEnlever2; i++) {
        let derniervie = vies[vies.length - 1 - i];
        gameContainer.removeChild(derniervie);
      }
    }
    specialeCecilion.disabled = true;
    checkPerdant();
  });
  
  // Declacrer le Gagnant et le Perdant
  function checkPerdant() {
    let viesJ1 = document.querySelectorAll('.viesJ1 .vieJ1');
    let viesJ2 = document.querySelectorAll('.viesJ2 .vieJ2');
    let j1WIN = document.querySelector('#j1WIN');
    let j2WIN = document.querySelector('#j2WIN');
  
    if (viesJ1.length === 0) {
      console.log('Joueur 1 a perdu !');
      j2WIN.style.display = 'block';
      enleverGrise(cardsJ2);
      disableButtons();
    }
  
    if (viesJ2.length === 0) {
      console.log('Joueur 2 a perdu !');
      j1WIN.style.display = 'block';
      enleverGrise(cardsJ1);
      disableButtons();
    }
  }

  // enlever cartes grise
  function enleverGrise(cards) {
    cards.forEach((card) => card.classList.remove('grise'));
  }