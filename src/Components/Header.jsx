import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="nav-wrapper">
        <img className="nav-img" src="./src/images/Mark.png" alt="image-icon" />
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        < nav className={`box ${isMenuOpen ? 'open' : ''}`}>
          <ul className="menu">
            <li className="menu_item abut">ABOUT</li>
            <li className="menu_item">PORTFOLIO</li>
            <li className="menu_item">CONTACT</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
