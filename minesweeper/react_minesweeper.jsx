import React from 'react';
import ReactDom from 'react-dom';
import Game from './components/game'


document.addEventListener("DOMContentLoaded", () => {
  let root = document.querySelector("#root");
  ReactDom.render(<Game />, root)
})