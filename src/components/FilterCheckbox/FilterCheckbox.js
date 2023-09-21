// import './FilterCheckbox.css';

// const FilterCheckbox = () => {
//   return (
//     <section className='filter'>
//       <input type='checkbox' id='checkbox' className='filter__checkbox' />
//       <label htmlFor='checkbox' className='filter__label'>Короткометражки</label>
//     </section>
//   )
// };

// export default FilterCheckbox;



import React from 'react';

// function FilterCheckbox() {
//   return (
//     <label className="searchform__checkbox-label">
//       <div className="searchform__checkbox-container">
//         <div className="searchform__checkbox">
//           <input
//             type="checkbox"
//             className="searchform__checkbox_invisible"
//           />
//           <span className="searchform__checkbox_visible" />
//         </div>
//       </div>
//       Короткометражки
//     </label>

//   );
// }

// export default FilterCheckbox;


function FilterCheckbox ({handleCheck, checked}) {

  return (
      <div className="checkbox">
          <label className="checkbox__switch">
              <input className="checkbox__input" type="checkbox"
                  defaultChecked={checked}
                  onChange={handleCheck} />
              <span className="checkbox__slider"></span>
          </label>
          <p className="checkbox__text">Короткометражки</p>
      </div>
      )
}

export default FilterCheckbox;