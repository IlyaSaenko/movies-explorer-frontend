import React from 'react';

function SearchForm() {
  return (
    <section className="searchform" aria-label="Форма поиска фильма">
      <form className="searchform__form" noValidate>
        <label className="searchform__input-block">
          <input
            className="searchform__input"
            type="text"
            placeholder="Фильм"
            required
            minLength="2"
          />
          <button className="searchform__button" type="button"/>
          <span className="searchform__input-error"></span>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;