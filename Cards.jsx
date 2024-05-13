import React from 'react'
import './Cards.css'
const Cards = () => {
  return (
<div class="row">
  <div class="column">
    <div class="card">
    <img id="logo"src="logo4.png" alt="logo"></img>
      <p id="text"> <b>75</b> </p>
      <p>Total campagin </p>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img id="img"src="img.png" alt="logo"></img>
    <p id="text"> <b>357</b> </p>
      <p>Total Participants </p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img id="img"src="img1.png" alt="logo"></img>
    <p id="text"> <b>20</b> </p>
      <p>Total Partners </p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img id="img"src="img2.png" alt="logo"></img>
    <p id="text"> <b>$128</b> </p>
      <p>Total Revenue </p>
    </div>
  </div>
</div>

  )
  
}
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];




export default Cards
