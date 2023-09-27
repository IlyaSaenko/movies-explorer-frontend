/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import useValidation from '../../utils/Validation';

function SearchForm({ handleSearch, handleCheckboxClick, searchRequest, checkboxState }) {
  const { values, errors, handleChange, resetValidation, isValid } = useValidation();
  const { movietitle } = values;

  useEffect(() => {
    resetValidation({ movietitle: searchRequest });
  }, [searchRequest]);

  function handleSearchFormClick(evt) {
    evt.preventDefault();
    handleSearch(movietitle);
  }
  return (
    <section className="searchform" aria-label="Форма поиска фильма">
      <form className="searchform__form" onSubmit={handleSearchFormClick} noValidate>
        <label className="searchform__input-block">
          <input
            className="searchform__input"
            type="text"
            name="movietitle"
            placeholder="Фильм"
            value={values.movietitle || ''}
            onChange={handleChange}
            required
            minLength="2"
          />
          <span className={`searchform__input-error ${!isValid && errors.movietitle ? 'searchform__input-error_active' : ''}`}
            id="movietitle-error">{errors.movietitle || ''}</span>
          <button
            className={`searchform__button ${!isValid && errors ? 'searchform__button_disabled' : ''}`}
            type="submit"
            disabled={!isValid}
          />
          <span className="searchform__input-error"></span>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;