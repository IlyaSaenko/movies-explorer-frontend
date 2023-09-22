import React from 'react';
import { HashLink } from 'react-router-hash-link';

function NavTab() {
  return (
    <div className="navtab">
      <HashLink smooth to="#aboutProject">
        <button className="navtab__button">Узнать больше</button>
      </HashLink>
    </div>
  );
}

export default NavTab;