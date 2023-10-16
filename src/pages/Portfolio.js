import React from "react";
import Footer from "../Components/Footer"
import Card from "../Components/Card";

const Portfolio = () => {
  return(
    <div className="section" >
      <div className="portfolio__container">
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio;