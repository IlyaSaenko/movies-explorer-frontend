import React from 'react';

function FilterCheckbox ({handleCheck, checked}) {
  return (
      <form className="checkbox">
          <label className="checkbox__switch">
              <input className="checkbox__input" type="checkbox"
                  defaultChecked={checked}
                  onChange={handleCheck} />
              <span className="checkbox__slider"></span>
          </label>
          <p className="checkbox__text">Короткометражки</p>
      </form>
      )
}

export default FilterCheckbox;