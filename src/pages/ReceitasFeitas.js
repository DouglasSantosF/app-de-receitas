import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import FilterTypesButtons from '../components/FilterTypesButtons';
import FilteredCards from '../components/FilteredCards';
import Context from '../context';

if (!localStorage.doneRecipes) {
  const arrayDone = [];
  localStorage.setItem('doneRecipes', JSON.stringify(arrayDone));
}
const itensDone = JSON.parse(localStorage.getItem('doneRecipes'));

function ReceitasFeitas() {
  const { doneRecipes, setDoneRecipes } = useContext(Context);

  useEffect(() => {
    const getRecipes = () => {
      if (doneRecipes.length === 0) setDoneRecipes(itensDone);
    };
    getRecipes();
  }, [doneRecipes.length, setDoneRecipes]);

  const filterType = (type) => {
    let newRecipes = doneRecipes;
    if (type === 'comida') {
      newRecipes = itensDone.filter((recipe) => recipe.type === type);
      return setDoneRecipes(newRecipes);
    }
    if (type === 'bebida') {
      newRecipes = itensDone.filter((recipe) => recipe.type === type);
      return setDoneRecipes(newRecipes);
    }
    return setDoneRecipes(itensDone);
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
