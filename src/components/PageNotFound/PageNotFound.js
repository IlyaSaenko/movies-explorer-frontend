// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NotFoundPage.css';

// const NotFoundPage = () => {
//   return (
//     <div className='page__container'>
//       <div className='page__info-block'>
//         <span className='page__status'>404</span>
//         <span className='page__notfound'>Страница не найдена</span>
//       </div>
//       <Link to='/' className='page__link'>Назад</Link>
//     </div>
//   )
// };

// export default NotFoundPage;

import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <section className="notfound__container">
      <div className="notfound__text-block">
        <h2 className="notfound__title">404</h2>
        <p className="notfound__subtitle">Страница не найдена</p>
      </div>
      <Link className="notfound__link" to="/">Назад</Link>
    </section>

  );
}

export default PageNotFound;
