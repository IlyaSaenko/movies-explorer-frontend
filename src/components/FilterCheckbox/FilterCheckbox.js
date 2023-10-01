import React from 'react';

function FilterCheckbox({ shortFilm, handleCheckBox }) {
    return (
    <form className="checkbox">
        <label className="checkbox__switch">
            <input className="checkbox__input" type="checkbox"
                checked={shortFilm}
                onChange={handleCheckBox} />
            <span className="checkbox__slider"></span>
        </label>
        <p className="checkbox__text">Короткометражки</p>
    </form>
    )
}

export default FilterCheckbox;