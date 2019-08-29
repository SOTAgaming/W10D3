import React from 'react';

export default class Tile extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      text: ""
    }
  }

  click(e) {
    console.log(this.props.gameOver)
    if (this.props.gameOver) {
      return 
    }
    let flagged = false
    if (this.props.tile.flagged && !e.altKey) {
      e.currentTarget.classList.remove("flagged")
      this.props.tile.toggleFlag()
    }
    

    if ( e.altKey && !this.props.tile.explored) {

       e.currentTarget.classList.add("flagged")
       flagged = true
    } else if (this.props.tile.bombed) {
      // this.setState({text: "B"})
      e.currentTarget.classList.add("bombed")
    } else {
       e.currentTarget.classList.add("revealed")
      // this.setState({ text: this.props.tile.adjacentBombCount() })
    }
    this.props.update(this.props.tile, flagged)
  }



  render() {

    let classname = ""
    let text = ""
    if (this.props.tile.bombed && this.props.tile.explored) {
      classname = "bombed"
    } else if (this.props.tile.explored) {
      classname = "revealed"
      text = this.props.tile.adjacentBombCount()
    } else if (this.props.tile.flagged) {
      classname = "flagged"
    } 
    return (
      <div className={`tile ${classname}`} onClick={(e) => this.click(e)}>{text}</div>
    )
  }
}