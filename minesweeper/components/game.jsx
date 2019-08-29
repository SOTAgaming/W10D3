import React from 'react';
import {Board as Grid} from '../minesweeper';
import Board from './board';
import {Modal} from './modal'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Grid(10, 10),
      gameOver: false,
      endText: ""
    }

  }
  updateGame(tile, flagged) {
  
    if (flagged) {
      tile.toggleFlag()
    } else {
      tile.explore()
    }

    if (this.state.board.won()) {
      console.log("Congrats")
      this.setState({ board: this.state.board, gameOver: true, endText: "You Win :)" })
    } else if (this.state.board.lost()) {
      console.log("You Lose")
      this.setState({ board: this.state.board, gameOver: true, endText: "You Lose :(" })
    } else {
      this.setState({ board: this.state.board, gameOver: false })
    }
  }

  restart() {
    this.setState({ board: new Grid(10, 10), gameOver: false })
  }
  
  render() {
    let board = this.state.board
    let modal = ""

    if (this.state.gameOver) {
     modal =  <Modal restart={this.restart.bind(this)} text={this.state.endText} />
    }
    return (
      <div className="game">
        <h1>Mine Sweeper</h1>
        <h2>Click to explore a tile</h2>
        <h2>Alt + click to flag tile </h2>
      <Board board={board} gameOver={this.state.gameOver} update={this.updateGame.bind(this)} />
      {modal}
      </div>
    )
  }
}