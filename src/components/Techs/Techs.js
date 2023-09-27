import React from 'react';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__section" aria-label="Блок о технологиях, применённых в дипломной работе">
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <ul className="techs__technologies" aria-label="Блок с технологиями">
        <li className="techs__block">HTML</li>
        <li className="techs__block">CSS</li>
        <li className="techs__block">JS</li>
        <li className="techs__block">React</li>
        <li className="techs__block">Git</li>
        <li className="techs__block">Express.js</li>
        <li className="techs__block">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;