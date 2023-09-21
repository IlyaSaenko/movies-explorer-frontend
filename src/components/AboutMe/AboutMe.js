/* eslint-disable react/jsx-no-target-blank */
// import './AboutMe.css';

// const AboutMe = () => {
//   return (
//     <div className='about-me'>
//       <h2 className='about-me__title'>Студент</h2>
//       <div className='about-me__content'>
//         <div className='about-me__info'>
//           <span className='about-me__name'>Илья</span>
//           <span className='about-me__job'>Фронтенд-разработчик, 24 года</span>
//           <span className='about-me__bio'>
//             Привет! Меня зовут Илья.
//           </span>
//           <a className='about-me__link' href='https://practicum.yandex.ru/' target='_blank'>Яндекс.Практикум</a>
//           <a className='about-me__link' href='https://github.com/IlyaSaenko' target='_blank'>Github</a>
//         </div>
//         <img
//           className='about-me__photo'
//           src={photo}
//           alt='Моё фото'
//         />
//       </div>
//     </div>
//   )
// };

// export default AboutMe;

import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo-me.jpg';

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h2 className="aboutProject__subtitle">Студент</h2>
      <div className="aboutMe__infoblock">
        <section className="aboutMe__section" aria-label="Рассказ о себе">
          <h3 className="aboutMe__section-subtitle">Илья</h3>
          <p className="aboutMe__section-text">Фронтенд-разработчик, 24 года</p>
          <p className="aboutMe__text">Привет! Меня зовут Илья</p>
          <a className="aboutMe__link" href="https://github.com/IlyaSaenko" target="_blank" rel="noreferrer">Github</a>
        </section>
        <img className="aboutMe__foto" src={photo} alt="Мое фото"/>
      </div>
    </div>
  );
}

export default AboutMe;