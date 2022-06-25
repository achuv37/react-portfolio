import React from 'react';

function Resume () {
  return(
    <section className='resume'>
      <div>
        <h1>
          My Resume
        </h1>
      </div>
      <div>
        <a href={require("../../assets/document/Aswathy-Ajesh.pdf")}>
          <h5>Download my Resume</h5>
        </a>
      </div>
      <div>
        <h5>Front-end Technologies</h5>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>React.js</li>
          </ul>
          
          <h5>Back-end Technologies</h5>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Model-View-Controller</li>
            <li>Progressive Web Applications</li>
          </ul>
          
          <h5>Database</h5>
          <ul>
            <li>SQL</li>
            <li>Sequalize</li>
            <li>NoSQL</li>
            <li>Mongodb</li>
          </ul>
        </div>
      </section>
  );
}




export default Resume;