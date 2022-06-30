import React from 'react';

// Portfolio component provides project name,image,github repo and live website url
function Portfolio() {
  return (
    <section className="portfolio">
      <div className='row' >

        <div className='col-12 col-md-6 col-lg-4'>
          <div className='card'>
            <img 
              src={require("../../assets/images/beers.PNG")}
              alt='beers'
              className='image'
            />
            <div className='card-body'>
              <h6> Beers-and-Cheers</h6>
              <a href=' https://github.com/beatricekallen/beers-and-cheers' target="_blank" rel="noreferrer">
                <button className='btn-sm'>Github</button>
              </a>
              <a href='https://beatricekallen.github.io/beers-and-cheers/' target="_blank" rel="noreferrer">
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
              <a href='https://github.com/william-horn/greenhive' target="_blank" rel="noreferrer">
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