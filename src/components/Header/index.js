
import React, { useMemo, useState } from 'react';
//import Header from './components/Header';
import Nav from '../Nav'
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Header() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = useMemo(() => () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'

    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />; 
      default:
        return <About />;
    }
  }, [currentPage]);

  return (
    <div>
      <section className='header'>
      <nav className='navbar'>
        <div className='navbar-brand'>
          <h1>
            <a className='navbar-item' href="/"> Aswathy </a>
          </h1>
        </div>

      </nav>
      <div>
        <Nav currentPage={currentPage} 
        handlePageChange={handlePageChange}></Nav>
      </div>
      </section>
      <main>
      {
      // Render the component returned by 'renderPage()'
          renderPage()
        }
      </main>
    </div>
  );
}

export default Header;




/*import React from "react";
import Nav from '../Nav';

function Header() {
  

  return (
    <header className="px-1">
      <div>
        <h1>
        <a data-testid="link" href="/"> Aswathy </a>
        </h1>
      </div>
      <div>
        <Nav>
        
        </Nav>
      </div>
    </header>
  );
}
export default Header;
*/