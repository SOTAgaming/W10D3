import React from 'react'

export const Modal = props => {
  return (
     <div className="modal" >
    <section className="modal-screen"></section>
    <section className="modal-box">

      <h1>{props.text}</h1>
       <button onClick={props.restart}>Play Again</button>
    </section>
  </div>

  )
}