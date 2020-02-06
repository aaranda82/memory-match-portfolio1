import React from 'react'

function CardItem(cardClass, index, handleCardClick) {
  return (
    <div className="card" key={index} onClick={()=>handleCardClick(event)}>
      <div className="cardBack cardSize"></div>
      <div className={`${index} ${cardClass} cardFront cardSize`} />
    </div>
  )
}

export default CardItem