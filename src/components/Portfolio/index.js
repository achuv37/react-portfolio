import React from 'react';

// Portfolio component provides project name,image,github repo and live website url
function Portfolio() {
  return (
    <section className="portfolio">
      <div className='row' >
      <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/Capture1.PNG")}
              alt='chasing'
              className='image'
            />
            <div className='card-body'>
              <h6> Chasing-Dreams</h6>
              <p>Chasing Dreams is a travel application that helps users to find hotels and attractions at locations that they wish to possibly visit. The user will have the ability to sign-up/login to be able to search locations and save preferred locations for future reference if they desire.  </p>
              <a href=' https://github.com/achuv37/Chasing-Dreams' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://chasing-dreams.herokuapp.com/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img
              src={require("../../assets/images/beers.PNG")}
              alt='beers'
              className='image'
            />
            <div className='card-body'>
              <h6> Beers-and-Cheers</h6>
              <p>Beers and Cheers allows brewery aficionados to search and find breweries as well as events in their area. We wanted to create a website that would allow people to find and support local breweries before or after attending events happening in their city. </p>
              <a href=' https://github.com/achuv37/beers-and-cheers' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://achuv37.github.io/beers-and-cheers/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/home.PNG")}
              alt='Greenhive'
              className='image'
            />
            <div className='card-body'>
              <h6>Greenhive</h6>
              <p>GreenHive is a community-based environmentalist sanctuary where people can get together and work toward making nature a better place. This is a Conservation app where people can join communities related to different resources. All users can post or comment about nature conservation and environment protection. </p>
              <a href='https://github.com/achuv37/greenhive' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://greenhive-com.herokuapp.com/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/Budget.PNG")}
              alt='Budget'
              className='image'
            />
            <div className='card-body'>
              <h6>Budget-Tracker</h6>
              <p>Budget Tracker is to update an existing budget tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. A budget tracker application without an internet connection provides the user a notification, when the user inputs an expense or deposit.  </p>
              <a href='https://github.com/achuv37/Budget-Tracker-AV' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://floating-ocean-64578.herokuapp.com/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/Runbuddy.png")}
              alt='Runbuddy'
              className='image'
            />
            <div className='card-body'>
              <h6>Runbuddy</h6>
              <p> Runbuddy is a Website that offers fitness training services. Used Css flexbox to create a more fluid layout. Applied media queries to accommodate multiple screen sizes and devices. Enhanced the visuals of the webpage with advanced CSS tricks such as pseudo-classes.</p>
              <a href='https://github.com/achuv37/RUN-BUDDY' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://achuv37.github.io/RUN-BUDDY/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/tech-blog.PNG")}
              alt='tech-blog'
              className='image'
            />
            <div className='card-body'>
              <h6>Tech-Blog</h6>
              <p>This is a CMS-style blog site. When the user visit the site for first time, Then the site presented with the homepage, which includes the existing blog posts. Then the user credentials are saved. The dashboard presented with any blog posts that the user have already created and the option to add a new blog post. The user can able to delete or update their post and taken back to an updated dashboard.</p>
              <a href='https://github.com/achuv37/Tech-Blog-AV' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://mvc-express-blog.herokuapp.com/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/Note-taker.PNG")}
              alt='Note-taker'
              className='image'
            />
            <div className='card-body'>
              <h6>Note-Taker</h6>
              <p> The Note-taking App we will work on is a web application that allows the user to input text and deletes the saved notes. This note taking application allows us to save notes with a title and plain text.The Note Taker app makes creating, viewing, and deleting notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.</p>
              <a href='https://github.com/achuv37/Note-Taker-AV' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://desolate-citadel-96504.herokuapp.com/' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




export default Portfolio;