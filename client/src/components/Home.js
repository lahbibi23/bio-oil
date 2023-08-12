import React from 'react';

import '../styles.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Products from './Products';

function Home() {
  
  return (
    <div className="home">
      <div>
      <Header/>
      </div>
      
      <div style={{margin:40}}>
      <h2>Bienvenue chez Noble Essential Oils</h2>
      <p>Découvrez notre sélection d'huiles essentielles biologiques de qualité supérieure.</p>
      </div>
      
      <Products/>
    </div>
  );
}

export default Home;
