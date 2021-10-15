import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FilterTypesButtons from '../components/FilterTypesButtons';
import FilteredCards from '../components/FilteredCards';

// PRECISA DE LOADING PRA SO RODAR O MAP QUANDO O ARRAY CARREGAR OS ITENS DO STORAGE

// url = ${type}/${id}

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

  // const filterType = (type) => {
  //   let newRecipes = doneRecipes;
  //   if (type === 'comida') {
  //     newRecipes = doneRecipes.filter((recipe) => recipe.type === type);
  //     return setRecipes(newRecipes);
  //   }
  //   if (type === 'bebida') {
  //     newRecipes = doneRecipes.filter((recipe) => recipe.type === type);
  //     return setRecipes(newRecipes);
  //   }
  //   return setRecipes(newRecipes);
  // };

  return (
    <div>
      <Header tela="Receitas Feitas" showSearch={ false } />
      <FilterTypesButtons filterType={ filterType } />
      <FilteredCards recipes={ recipes } />
    </div>
  );
}

export default ReceitasFeitas;
