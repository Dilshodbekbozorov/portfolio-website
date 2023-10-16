import React from 'react'
import appImg from "../img/unnamed.png";

function Card() {
  return (
    <div className="card">
      <img src={appImg} alt="" />
      <div className="appTitle">App</div>
      <div className="appDesc">Lorem ipsum dolor sit.</div>
      <div className="appLink">
        <a href="ww.samdev.uz">Link<i class="ri-links-line"></i></a>
      </div>
  </div>
  )
}

export default Card;