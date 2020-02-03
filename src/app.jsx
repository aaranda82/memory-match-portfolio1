import React from 'react'
import Header from './header'
import Stats from './stats'
import GameBoard from './game-board'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Stats />
        <GameBoard />
      </div>
    )
  }
}

export default App