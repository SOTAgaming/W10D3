import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
  constructor(props) {
    super(props) 
 

  }

  componentDidMount() {
    let n = this.props.board.gridSize
    let frs = '';
    for (let i = 0; i < n; i++) {
      frs += "1fr "
    }

    document.querySelector(".board").style['grid-template-columns'] = frs
    document.querySelector(".board").style['grid-template-rows'] = frs
  }

  render() {
    let tiles = []
    
    // this.props.board.grid.forEach(row => {
    //   ( row.map(col => {
    //     return <Tile key={col} />
    //   }))
    // })
    for (let i = 0; i < this.props.board.grid.length; i++) {
      for (let j = 0; j < this.props.board.grid[i].length; j++) {
        let tile = <Tile gameOver={this.props.gameOver} key={[i, j]} update={this.props.update} tile={this.props.board.grid[i][j]}/>
        tiles.push(tile)
      }

    }
    console.log(tiles)
    return(
      <div className="board">
        {tiles}
        <br/> 
      </div>
    )
  }
}