import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FilterTypesButtons from '../components/FilterTypesButtons';
import FilteredCards from '../components/FilteredCards';

if (localStorage.doneRecipes.length === 0) {
  const arrayDone = [];
  localStorage.setItem('doneRecipes', JSON.stringify(arrayDone));
}
let doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

function ReceitasFeitas() {
  const [recipes, setRecipes] = useState(doneRecipes);
  const [filters, setFilters] = useState('');

  useEffect(() => {
    doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (filters === '') {
      return setRecipes(doneRecipes);
    }
    doneRecipes = doneRecipes.filter((recipe) => recipe.type === filters);
    return setRecipes(doneRecipes);
  }, [filters]);

  useEffect(() => {
    setRecipes(doneRecipes);
  }, [recipes]);

  const filterType = (type) => {
    if (type === 'comida') {
      return setFilters('comida');
    }
    if (type === 'bebida') {
      return setFilters('bebida');
    }
    return setFilters('');
  };

  return (
    <div>
      <Header tela="Receitas Feitas" showSearch={ false } />
      <FilterTypesButtons filterType={ filterType } />
      <FilteredCards recipes={ doneRecipes } />
    </div>
  );
}

export default ReceitasFeitas;
