import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
      <About></About>
      <Portfolio></Portfolio>
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;