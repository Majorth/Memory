//create 12 cards
const cardArray =[
    {
        name: 'fries',
        img: 'media/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'media/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'media/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'media/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'media/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'media/pizza.png',
    },
    {
        name: 'fries',
        img: 'media/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'media/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'media/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'media/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'media/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'media/pizza.png',
    }
]
cardArray.sort(()=>0.5 - Math.random())//shuffles an array randomly

const gridDisplay= document.querySelector('#grid')
const resultsDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds =[]
const cardsWon = []

function createBoard(){
    for (let i=0; i<cardArray.length; i++){
      const card = document.createElement('img')
      card.setAttribute('src','media/blank.png') 
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
     
      gridDisplay.append(card)
    }
}//eventlistener is listening for an event, a click in this case to execute

createBoard()
function checkMatch (){
    const cards = document.querySelectorAll('#grid img')//looks in entire document
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    
   
    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','media/blank.png') 
        cards[optionTwoId].setAttribute('src','media/blank.png')
        alert ('You have clicked the same card!')

    }
    if (cardsChosen[0]==cardsChosen[1]){
        alert ('You found a match!')
        cards[optionOneId].setAttribute('src','media/white.png')
        cards[optionTwoId].setAttribute('src','media/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','media/blank.png') 
        cards[optionTwoId].setAttribute('src','media/blank.png') 
        alert ('Sorry, try again!') 
    }
    resultsDisplay.textContent =cardsWon.length
    cardsChosen = []
    cardsChosenIds =[]

    if (cardsWon.length == cardArray.length/2){
        resultsDisplay.textContent ='Congratulations, you found them all!'
    }
}


function flipCard(){
const cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenIds.push(cardId)
this.setAttribute('src',cardArray[cardId].img)
if (cardsChosen.length === 2) {
    setTimeout( checkMatch, 500)
}
}//'this' allows us to interact with whatever we click