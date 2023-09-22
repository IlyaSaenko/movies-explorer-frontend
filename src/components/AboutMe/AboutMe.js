import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo-me.jpg';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-project__title">Студент</h2>
      <div className="about-me__info">
        <section className="about-me__section" aria-label="Главное о себе">
          <h3 className="about-me__name">Илья</h3>
          <p className="about-me__self">Фронтенд-разработчик, 24 года</p>
          <p className="about-me__biography">Привет! Меня зовут Илья</p>
          <a className="about-me__link" href="https://github.com/IlyaSaenko" target="_blank" rel="noreferrer">Github</a>
        </section>
        <img className="about-me__photo" src={photo} alt="Моя фотография"/>
      </div>
    </div>
  );
}

export default AboutMe;