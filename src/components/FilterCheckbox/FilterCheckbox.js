import React from 'react';

function FilterCheckbox({ onClick, checkboxState }) {
    return (
    <form className="checkbox">
        <label className="checkbox__switch">
            <input className="checkbox__input" type="checkbox"
                checked={checkboxState}
                onChange={(evt) => onClick(evt.target.checked)} />
            <span className="checkbox__slider"></span>
        </label>
        <p className="checkbox__text">Короткометражки</p>
    </form>
    )
}

export default FilterCheckbox;