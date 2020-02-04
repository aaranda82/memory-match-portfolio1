import React from 'react'

class GameBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      firstCardToCheck: null,
      secondCardTocheck: null
    }
  }

  componentDidMount() {
    this.setState({ cards: ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "black", "white"] })
  }

  shuffleDeck(arrayOfCards){
    let currentIndex = arrayOfCards.length, temp, randomIndex;
    while(currentIndex !== 0){
      randomIndex = Math.floor(Math.random()*currentIndex);
      currentIndex--;
      temp = arrayOfCards[currentIndex];
      arrayOfCards[currentIndex] = arrayOfCards[randomIndex];
      arrayOfCards[randomIndex] = temp;
    }
    return arrayOfCards;
  }

  layoutCards() {
    if (this.state.cards.length) {
      let deckArray = this.state.cards.concat(this.state.cards)
      deckArray = this.shuffleDeck(deckArray)
      deckArray = deckArray.map(cardItem)
      return (
        <div className="gameBoard container">
          {deckArray}
        </div>
      )
    } else {
      return <h1>WAITING TO LOAD</h1>
    }
  }

  render() {
    return this.layoutCards()
  }
}

export default GameBoard

function cardItem(cardClass, index) {
  return (
    <div className="cardBack" key={index}>
      <div className={`${cardClass} hidden cardFront`} />
    </div>
  )
}