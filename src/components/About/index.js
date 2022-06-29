import React from 'react'
import profileImage from "../../assets/images/profile.jpg";

// About component
function About() {
  return (
    <section className='profile'>
      <div className='aboutme' id="about">
        <h1> This is me !</h1>
      </div>
      <div>
        <img
          src={profileImage}
          alt="about-me"
          className="profile-image"
        />
      </div>
      <div className='left'>
        <p>
        My passion was always towards software development and my current goal is to  acquire a professional certificate in Full Stack Web Development. A full stack developer works on both the user-facing and back-end elements of websites and applications. 
        </p>
      </div>
    </section>
  )
}

export default About;