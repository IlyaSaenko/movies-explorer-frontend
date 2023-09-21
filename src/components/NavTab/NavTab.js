// import React from "react";
// import './NavTab.css';
// import { HashLink } from 'react-router-hash-link';


// function NavTab () {
    
//     return (
//         <div className="nav-tab">
//             <HashLink smooth to="/#about-me" className="nav-tab__link">Узнать больше</HashLink>
//         </div>
//         )
// }

// export default NavTab;

import React from 'react';
import { HashLink } from 'react-router-hash-link';

function NavTab() {
  return (
    <div className="navTab">
      <HashLink smooth to="#aboutProject">
        <button className="navTab__button">Узнать больше</button>
      </HashLink>
    </div>
  );
}

export default NavTab;
