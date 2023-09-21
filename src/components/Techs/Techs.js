// import './Techs.css';

// const Techs = () => {
//   return (
//     <div className='techs'>
//       <h2 className='techs__title'>Технологии</h2>
//       <h3 className='techs__large-title'>7 технологий</h3>
//       <span className='techs__description'>
//         На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
//       </span>
//       <ul className='techs__list'>
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>JS</li>
//         <li>React</li>
//         <li>Git</li>
//         <li>Express.js</li>
//         <li>mongoDB</li>
//       </ul>
//     </div>
//   )
// };

// export default Techs;

import React from 'react';

function Techs() {
  return (
    <div className="techs__container">
      <h2 className="aboutTech__subtitle">Технологии</h2>
      <section className="techs__section" aria-label="О технологиях в дипломе">
        <h3 className="techs__section-subtitle">7 технологий</h3>
        <p className="techs__section-text">На курсе веб-разработки мы освоили
        технологии, которые применили в дипломном проекте.</p>
      </section>
      <section className="techs__section-info" aria-label="Блок с технологиями">
        <p className="techs__block">HTML</p>
        <p className="techs__block">CSS</p>
        <p className="techs__block">JS</p>
        <p className="techs__block">React</p>
        <p className="techs__block">Git</p>
        <p className="techs__block">Express.js</p>
        <p className="techs__block">mongoDB</p>
      </section>
    </div>
  );
}

export default Techs;
