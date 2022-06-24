import React from 'react';


function Nav(props) {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className={
          props.currentPage ===tab ?"nav-item is-active" : "nav-item"
         } key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
  
  /*return (
    <nav className='navbar'>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              href="#about"
            >
              About me
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#resume"
            >
              Resume
            </a>
          </li>
          </ul>
      </nav>
    
  ) 
}
export default Nav;
*/