import React from "react";
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