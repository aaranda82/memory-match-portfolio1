import React from 'react'
import CardItem from './card-item'

class GameBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      firstCardToCheck: "",
      secondCardToCheck: "",
      matchedCards: [],
    }
    this.handleCardClick = this.handleCardClick.bind(this)
  }

  componentDidMount() {
    let cards = ["red-1", "orange-1", "yellow-1", "green-1", "blue-1", "indigo-1", "violet-1", "black-1", "white-1", "red-2", "orange-2", "yellow-2", "green-2", "blue-2", "indigo-2", "violet-2", "black-2", "white-2"]
    cards = this.shuffleDeck(cards)
    this.setState({ cards })
  }

  shuffleDeck(arrayOfCards) {
    let currentIndex = arrayOfCards.length, temp, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temp = arrayOfCards[currentIndex];
      arrayOfCards[currentIndex] = arrayOfCards[randomIndex];
      arrayOfCards[randomIndex] = temp;
    }
    return arrayOfCards;
  }

  layoutCards() {
    if (this.state.firstCardToCheck) { console.log('true') }
    this.handleMatch()
    if (this.state.cards.length) {
      const shuffledDeck = this.state.cards.map((cardClass, index) => {
        if (cardClass === this.state.firstCardToCheck || cardClass === this.state.secondCardToCheck || this.state.matchedCards.includes(cardClass)) {
          return CardItem(cardClass, index, this.handleCardClick)
        } else {
          cardClass = `${cardClass} hidden`
          return CardItem(cardClass, index, this.handleCardClick)
        }
      })
      return (
        <div className="gameBoard">
          {shuffledDeck}
        </div>
      )
    } else {
      return <h1>WAITING TO LOAD</h1>
    }
  }

  handleMatch() {
    if (this.state.firstCardToCheck && this.state.secondCardToCheck) {
      var card1 = this.state.firstCardToCheck
      card1 = card1.split('')
      card1.splice(card1.length-2, 2)
      card1 = card1.join('')
      var card2 = this.state.secondCardToCheck
      card2 = card2.split('')
      card2.splice(card2.length-2, 2)
      card2 = card2.join('')
      console.log("card1 - ", card1, "card2 - ", card2)
      if (card1 === card2) {
        let matchedCopy = [...this.state.matchedCards]
        matchedCopy.push(this.state.firstCardToCheck, this.state.secondCardToCheck)
        this.setState({
          matchedCards: matchedCopy,
          firstCardToCheck: "",
          secondCardToCheck: ""
        })
      } else if (card1 && card2 && card1 !== card2) {
        setTimeout(() => {
          this.setState({
            firstCardToCheck: "",
            secondCardToCheck: ""
          })
        }, 750)
      }
    }
  }

  handleCardClick(event) {
    const classList = event.target.nextElementSibling.classList[1]
    if (!this.state.firstCardToCheck) {
      this.setState({ firstCardToCheck: classList })
    } else {
      this.setState({ secondCardToCheck: classList })
    }
  }


  render() {
    return this.layoutCards()
  }
}

export default GameBoard

