import React from 'react';
import { HashLink } from 'react-router-hash-link';

// function NavTab() {
//   return (
//     <div className="navtab">
//       <HashLink smooth to="#aboutProject" className="navtab__button">
//         Узнать больше
//       </HashLink>
//     </div>
//   );
// }

function NavTab() {
  return (
    <section className="navtab" aria-label="Навигация к блоку О проекте">
      <div className="navtab__section">
      <HashLink smooth to="#aboutProject" className="navtab__button">
        Узнать больше
      </HashLink>
      </div>
    </section>
  );
}

export default NavTab;

// function NavTab() {
//   return (
//     <section className="navtab" aria-label="Навигация к блоку О проекте">
//         <button href="#aboutProject" className="navtab__button">Узнать больше</button>
//     </section>
//   );
// }

// export default NavTab;