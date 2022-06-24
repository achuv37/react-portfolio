import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav'
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
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
      <Nav currentPage={currentPage} 
      handlePageChange={handlePageChange}
      
      >

      </Nav>
      <main>
      {
      // Render the component returned by 'renderPage()'
          renderPage()
        }
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

