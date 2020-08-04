// Here I have all the different combinations of suits and values that can make up a card.
const Suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const Values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

// I created a class for card that when called on takes in a suit and a value to create a card
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

// After I made it possible for cards to be created, I made a class for a deck
class Deck {
    constructor() {
        this.deck = [];
    }
    // When this function is call it takes an array of values and an array of suits to combine and create every possible card combination using the two arrays
    createDeck(suits, values) {
        for (let suit of suits) {
            for (let value of values) {
                this.deck.push(new Card(suit, value));
            }
        }
        return this.deck;
    }
    // I created a regular random shuffle to get an understanding of how a normal shuffle would work
    shuffle() {
        let counter = this.deck.length, temp, i;
        while (counter) {
            i = Math.floor(Math.random() * counter--);
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp;
        }
        return this.deck;
    }
    // After the regular shuffle I created a function that takes in a integer for the number of times the deck would be in shuffled
    inShuffle(times) {
        let timesCompleted = 0;
        let shuffledDeck = this.deck;
        while (timesCompleted != times) {
            let topCounter = shuffledDeck.length / 2;
            let i = 0;
            let topDeck = [];
            while (topCounter != 0) {
                topDeck.push(shuffledDeck[i]);
                i++;
                topCounter--;
            }
            let bottomDeck = [];
            let botCounter = shuffledDeck.length;
            let x = shuffledDeck.length / 2;
            while (x != botCounter) {
                bottomDeck.push(shuffledDeck[x]);
                x++;
            }
            shuffledDeck = [];
            let runner = 0;
            while (runner != bottomDeck.length) {
                shuffledDeck.push(bottomDeck[runner]);
                shuffledDeck.push(topDeck[runner]);
                runner++
            }
            timesCompleted++;
        }
        // Once the deck has been shuffled the amount of times it was supposed to, the new shuffled deck is returned
        return shuffledDeck;
    }
}





let thisDeck = new Deck();
thisDeck.createDeck(Suits, Values);

console.log(thisDeck.inShuffle(51));
