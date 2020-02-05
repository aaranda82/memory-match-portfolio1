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

  handleCardClick(event) {
    console.log(event)
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
    if (this.state.cards.length) {
      let deckArray = this.state.cards.concat(this.state.cards)
      deckArray = this.shuffleDeck(deckArray)
      deckArray = deckArray.map((cardClass, index) => cardItem(cardClass, index, this.handleCardClick))
      return (
        <div className="gameBoard">
          {deckArray}
        </div>
      )
    } else {
      return <h1>WAITING TO LOAD</h1>
    }
  }

  handleCardClick(event){
    console.log("test event", event)
  }

  render() {
    return this.layoutCards()
  }
}

export default GameBoard

function cardItem(cardClass, index, handleCardClick) {
  return (
    <div className="card" key={index} value={`${cardClass}`} onClick={()=>handleCardClick}>
      <div className="cardBack cardSize"></div>
      <div className={`${cardClass} cardFront cardSize`} />
    </div>
  )
}