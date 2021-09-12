console.log(`console connected`);

document.addEventListener('DOMContentLoaded', () => {

  // card optoins
  const cardArray = [
    {
      name: 'gold-leaf',
      img: 'images/gold-leaf.png'
    }, {
      name: 'gold-leaf',
      img: 'images/gold-leaf.png'
    }, {
      name: 'green-apples',
      img: 'images/green-apples.png'
    }, {
      name: 'green-apples',
      img: 'images/green-apples.png'
    }, {
      name: 'hummingbird',
      img: 'images/hummingbird.png'
    }, {
      name: 'hummingbird',
      img: 'images/hummingbird.png'
    }, {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    }, {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    }, {
      name: 'pinecone',
      img: 'images/pinecone.png'
    }, {
      name: 'pinecone',
      img: 'images/pinecone.png'
    }, {
      name: 'plant',
      img: 'images/plant.png'
    }, {
      name: 'plant',
      img: 'images/plant.png'
    }, {
      name: 'sunflower',
      img: 'images/sunflower.png'
    }, {
      name: 'sunflower',
      img: 'images/sunflower.png'
    }, {
      name: 'water-drop',
      img: 'images/water-drop.png'
    }, {
      name: 'water-drop',
      img: 'images/water-drop.png'
    }
  ]

  cardArray.sort(() => .314159 - Math.random());

  const grid = document.querySelector('.game-grid');
  const resultDisplay = document.querySelector('#matches');
  const tryDisplay = document.querySelector('#trys');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let counter = 1;


  // create your game board
  function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/card-pattern.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  };


  // check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]) {
      alert(`you found a match`);
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/card-pattern.png');
      cards[optionTwoId].setAttribute('src', 'images/card-pattern.png');
      alert(`sorry, try again`);
    } // end if else
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    tryDisplay.textContent = counter++;
  };


  // flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2) {
      setTimeout(checkForMatch, 100);
    }
  };

  createBoard()

});
//
// bottom bitch
//
