import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchQuery, setSearchQuery, handleSearch, shortFilm, handleCheckBox }) {

  const [inputError, setInputError] = useState('');

  function handleChange(evt) {
    setSearchQuery(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (searchQuery === '') {
      setInputError('Нужно ввести ключевое слово');
    } else {
      handleSearch();
      setInputError('');
    }
  }

  return (
    <section className="searchform" aria-label="Форма поиска фильма">
      <form className="searchform__form" onSubmit={handleSubmit} noValidate>
        <div className="searchform__input-block">
          <input
            className="searchform__input"
            type="text"
            name="movietitle"
            placeholder="Фильм"
            value={searchQuery}
            onChange={handleChange}
            required
            minLength="1"
          />

          <button
            className={`searchform__button ${inputError ? 'searchform__button_disabled' : ''}`}
            type="submit"
          />
        </div>
        <span className={`search-form__submit-error ${inputError ? 'search-form__submit-error_active' : ''}`}>{inputError}</span>
        <FilterCheckbox shortFilm={shortFilm} handleCheckBox={handleCheckBox} />
      </form>
    </section>
  );
}

export default SearchForm;