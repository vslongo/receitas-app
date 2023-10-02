import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    borderBottom: '2px solid #f0f0f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  const navItemStyle = {
    display: 'inline',
    margin: '0 10px',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none', 
    color: '#fff',
  };

  return (
    <header style={headerStyle}>
      <h1>
        <Link to="/" style={logoStyle}>
          Receitas App
        </Link>
      </h1>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/search" style={{ color: '#fff', textDecoration: 'none' }}>
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
