import React from 'react'
import profileImg from '../img/profile.jpg'
import cvPdf from "../pdf/khasanov-samandar-resume.pdf"

const AboutSection = () => {
  return(
    <section className='section' >
      <div className="section__container">
        <div className="content">
          <p className="subtitle" >HELLO</p>
          <h1 className='title'>
            I'm <span>Qalandar</span> <br /> a Android Developer
          </h1>
          <p className="description">
            Welcome to my Android developer portfolio! 
            I'm Qalandar, a skilled and creative android developer 
            with a passion for creating beautiful, responsive, 
            and user-friendly apps. I've worked on a variety  
            of app projects, ranging from personal blogs to e-commerce platforms.
          </p>
          <div className="action__btns">
            <button className="hire__me">Hire Me</button>
            <a download={cvPdf} href={cvPdf}><button className="resume">Resume</button></a>
            
          </div>
        </div>
        <div className="image">
          <img src={profileImg} alt="profile img" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection;