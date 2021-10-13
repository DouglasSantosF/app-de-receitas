import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

function IngredientsList({ recipe, disableButton, isMeal, recipeId }) {
  const [ingredientList, setIngredientList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { compareCheckBox, setCompareCheckBox,
    setIngredientsLength } = useContext(Context);

  const ingredients = () => {
    let i = 1;
    const ingList = [];
    while (recipe[`strIngredient${i}`]) {
      ingList.push(`${recipe[`strIngredient${i}`]} ${recipe[`strMeasure${i}`]}`);
      i += 1;
    }
    return ingList;
  };

  useEffect(() => {
    const createLocalStore = () => {
      if (!localStorage.inProgressRecipes) {
        localStorage.setItem('inProgressRecipes', JSON.stringify({
          meals: {},
          cocktails: {},
        }));
      }
      const itemProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
      if (itemProgress.cocktails[recipeId] !== undefined
        || itemProgress.meals[recipeId] !== undefined) {
        if (isMeal) {
          setIngredientList(itemProgress.meals[recipeId]);
          setCompareCheckBox(Object.keys(itemProgress.meals[recipeId]).length);
        } else {
          setIngredientList(itemProgress.cocktails[recipeId]);
          setCompareCheckBox(Object.keys(itemProgress.cocktails[recipeId]).length);
        }
      }
    };
    createLocalStore();
  }, [isMeal, recipeId, setCompareCheckBox]);

  useEffect(() => {
    const getLength = () => {
      if (ingredients().length > 0 && isLoading === false) {
        setIsLoading(true);
        setIngredientsLength(ingredients().length);
      }
    };
    getLength();
  });

  useEffect(() => {
    // Referencia bug fix req 50, retirado da seguinte PR da turma 12:
    // https://github.com/tryber/sd-012-project-recipes-app/pull/697/commits/7e629baa0228d0314a1d8f2072b451004b19a011
    // Estava tentando adicionar os ingredients, em vez de colocar apenas se a posicao do ing estava checada ou nao.

    const itemProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const updateInProgressStorage = (type, id, check) => {
      const recipes = itemProgress[type];
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        ...itemProgress,
        [type]: { ...recipes, [id]: check },
      }));
    };
    if (isMeal) {
      updateInProgressStorage('meals', recipeId, ingredientList);
    } else {
      updateInProgressStorage('cocktails', recipeId, ingredientList);
    }
  }, [ingredientList, isMeal, recipeId]);

  // Funcao de clique nos checkboxes
  function handleCheckbox({ target: { name, checked } }) {
    setIngredientList({
      ...ingredientList,
      [name]: checked,
    });
    if (checked === true) {
      console.log(compareCheckBox);
      setCompareCheckBox(compareCheckBox + 1);
    } else if (checked === false) {
      setCompareCheckBox(compareCheckBox - 1);
    }
    disableButton();
  }

  const ingredientsArrayList = () => (
    <div>
      <h4>Ingredientes</h4>
      <ul>
        {ingredients().map((ingredient, index) => (
          <div
            key={ index }
          >
            <label
              htmlFor={ index }
              key={ ingredient }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                className="checkboxes"
                value={ ingredient }
                name={ index }
                id={ index }
                type="checkbox"
                checked={ ingredientList[index] ? ingredientList[index] : false }
                onChange={ handleCheckbox }
                // onChange={ ({ target }) => handleCheckbox({ target }, index) }
              />
              {ingredient}
            </label>
          </div>))}
      </ul>
    </div>

  );

  return (
    <>
      {ingredientsArrayList()}
    </>
  );
}

IngredientsList.propTypes = {
  recipe: PropTypes.shape({}).isRequired,
  isMeal: PropTypes.bool.isRequired,
  disableButton: PropTypes.func.isRequired,
  recipeId: PropTypes.string.isRequired,

};

export default IngredientsList;
