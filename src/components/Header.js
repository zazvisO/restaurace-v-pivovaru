import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles.css';

const Header = () => {
  const headerStyle = {
    // Používáme původní hero-image.jpg, který by měl mít jen obrázek bez textu
    // Pokud váš hero-image.jpg stále obsahuje text "Vaříme pro vás...",
    // bude ho potřeba nahradit verzí bez textu, nebo jej překrýt.
    // Pro teď předpokládáme, že obrázek je jen vizuální pozadí.
    backgroundImage: `url('images/hero-image.jpg')`,
  };

  return (
    <header className="header" style={headerStyle}>
      {/* Vracíme H1 element s textem Restaurace v Pivovaru */}
      <h1>Restaurace v Pivovaru</h1>

      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Denní Menu
        </NavLink>
        <NavLink
          to="/drink-menu"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Nápojový Lístek
        </NavLink>
        <NavLink
          to="/salon"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Pronájem Salonku
        </NavLink>
        <NavLink
          to="/historie"
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          Historie
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;