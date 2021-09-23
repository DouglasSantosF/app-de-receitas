import React, { useState } from 'react';

function HeaderSearch() {
  const [radio, setRadio] = useState({
    input: '',
    search: '',
  });

  const handleChange = ({ target: { value, name } }) => {
    setRadio({
      ...radio,
      [name]: value,
    });
  };

  const fetchSearch = async (filter, input) => {
    let API = '';
    switch (filter) {
    case 'ingrediente':
      API = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`;
      break;
    case 'nome':
      API = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
      break;
    case 'primeira-letra':
      if (input.length > 1) {
        return global.alert('Sua busca deve conter somente 1 (um) caracter');
      }
      API = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;
      break;
    default:
      API = '';
    }
    const data = await fetch(API);
    const json = await data.json();
    console.log(json);
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        name="input"
        onChange={ handleChange }
      />
      <label htmlFor="radio-ingredient">
        <input
          id="radio-ingredient"
          data-testid="ingredient-search-radio"
          type="radio"
          name="search"
          value="ingrediente"
          onChange={ handleChange }
        />
        Ingrediente
      </label>
      <label htmlFor="radio-name">
        <input
          id="radio-name"
          type="radio"
          data-testid="name-search-radio"
          name="search"
          value="nome"
          onChange={ handleChange }
        />
        Nome
      </label>
      <label htmlFor="radio-first">
        <input
          id="radio-first"
          type="radio"
          data-testid="first-letter-search-radio"
          name="search"
          value="primeira-letra"
          onChange={ handleChange }
        />
        Primeira Letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => fetchSearch(radio.search, radio.input) }
      >
        Busca
      </button>
    </div>
  );
}

export default HeaderSearch;
