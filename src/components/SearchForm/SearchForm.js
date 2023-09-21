// import './SearchForm.css';
// import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

// const SearchForm = () => {
//   return (
//     <section className='search'>
//       <form className='search__form'>
//         <input
//           type='text'
//           placeholder='Фильм'
//           className='search__input'
//         />
//         <button className='search__button'>Поиск</button>
//       </form>

//       <FilterCheckbox />

//       <div className='search__line' />
//     </section>
//   )
// };

// export default SearchForm;


import React from 'react';

function SearchForm() {
  return (
    <section className="searchform__container" aria-label="Форма поиска">
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