// Importing
import React, { useMemo, useState } from 'react';
import Nav from '../Nav'
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

//Header component
function Header() {
  const [currentPage, handlePageChange] = useState('About');
  
  // Renderpage function
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
            <a className='navbar-item name' href="/react-portfolio-av"> ASWATHY </a>
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

// exporting 
export default Header;

