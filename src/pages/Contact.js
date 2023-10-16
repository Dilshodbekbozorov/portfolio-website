import React from "react"
import profileImg from '../img/profile.jpg'
import styled from "styled-components"

const Contact = () => {
  return(
    <section className='section' >
      <div className="contact__container">
        <div className="contact-info">
          <h1 className="info-title">Contact Information</h1>
          <ul className="info-details">
          </ul>
        </div>
        <div className="image">
          <img src={profileImg} alt="profile img" />
        </div>
      </div>
    </section>
  )
}



export default Contact;