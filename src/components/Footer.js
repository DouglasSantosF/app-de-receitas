import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas">
        <img
          data-testid="drinks-bottom-btn"
          src={ drinkIcon }
          alt="Icone de bebidas"
        />
      </Link>

      <Link to="/explorar">
        <img
          data-testid="explore-bottom-btn"
          src={ exploreIcon }
          alt="Icone de bebidas"
        />
      </Link>
      <Link to="comidas">
        <img
          data-testid="food-bottom-btn"
          src={ mealIcon }
          alt="Icone de bebidas"
        />
      </Link>
    </footer>
  );
}

export default Footer;
