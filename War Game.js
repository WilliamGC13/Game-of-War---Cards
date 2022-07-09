const SUITS = ["Hearts", "Spades", "CLubs", "Diamonds"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

class Deck {
    constructor(cards = freshDeck()){
        this.cards = cards
    }
      get numberOfCards(){
        return this.cards.length
      }

    shuffle(){
    this.cards.sort((a,b) => Math.random() - .5)
    }
}

class Card {
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }
}
const deck = []
function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
                return new Card(suit, value)
            })
    })

}
startWarGame()
function startWarGame(){
    const deck = new Deck()
    deck.shuffle()
   
    
const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
player1Deck = new Deck(deck.cards.slice(0, deckMidpoint))
player2Deck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

console.log(player1Deck)
console.log(player2Deck)

gameDeck = [14,2,3,4,5,6,7,8,9,10,11,12,13,14,2,3,4,5,6,7,8,9,10,11,12,13,14,2,3,4,5,6,7,8,9,10,11,12,13,14,2,3,4,5,6,7,8,9,10,11,12,13]
function shuffle(gameDeck) {
    gameDeck.sort(() => Math.random() - 0.5);
  }
  shuffle(gameDeck);


player1Hand = gameDeck.slice(0, deckMidpoint)
player2Hand = gameDeck.slice(deckMidpoint, deck.numberOfCards)
console.log(player1Hand)
console.log(player2Hand)

  player1Wins = [];
  player2Wins = [];
  tieArray = [];


}
player1Hand.forEach((num1, index) => {
    const num2 = player2Hand[index]
    console.log(num1, num2)

    if (num1 > num2){
    player1Wins.push(num1);
    }
    else if (num1 < num2){
    player2Wins.push(num2);
    }
    else {
    tieArray.push(num1, num2);
    }
});
console.log(player1Wins);
console.log(player2Wins);
console.log(tieArray);
console.log("player 1 score = " + player1Wins.length);
console.log("Player 2 score = " + player2Wins.length)

