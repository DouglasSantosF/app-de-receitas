import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explorar() {
  return (
    <div>
      <Header tela="Explorar" showSearch={ false } />
      <Link to="/explorar/comidas">
        <button
          type="button"
          data-testid="explore-food"
        >
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button
          type="button"
          data-testid="explore-drinks"
        >
          Explorar Bebidas
        </button>

      </Link>
      <Footer />
    </div>
  );
}

export default Explorar;
