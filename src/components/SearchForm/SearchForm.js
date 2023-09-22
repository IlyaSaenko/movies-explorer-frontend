import React from 'react';

function SearchForm() {
  return (
    <section className="searchform" aria-label="Форма поиска">
      <form className="searchform__form" noValidate>
        <div className="searchform__input-block">
          <input
            className="searchform__input"
            type="text"
            placeholder="Фильм"
            required
            minLength="2"
          />
          <button className="searchform__button" />
          <span className="searchform__input-error"></span>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;