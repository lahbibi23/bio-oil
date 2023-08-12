import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

function Header() {
  const navigate= useNavigate() 
  return (
    <header className="header">
      <div className="logo">
        <h1>Noble Essential Oils</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          {/* <li><button onClick={()=>navigate("/products")}>Produits</button></li> */}
          <li><Link to="/products">Produits</Link></li>
          <li><Link to="/login">Se connecter</Link></li>
          <li><Link to="/signup">Créer un compte</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

