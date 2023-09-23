import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo-me.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__section" aria-label="Главное о себе">
          <h3 className="about-me__name">Илья</h3>
          <p className="about-me__self">Фронтенд-разработчик, 24 года</p>
          <p className="about-me__biography">Привет! Меня зовут Илья. Я футболист-программист.
          Родился и вырос в Ростовской области. Мечтаю перебраться в Питер. Всю жизнь занимаюсь спортом. Не так давно
          получил высшее образование,
          окончив факультет "Славянской филологии и журналистики" Крымского федерального университета по направлению "Филология".
          Представляете? И пошёл программировать.
          </p>
          <a className="about-me__link" href="https://github.com/IlyaSaenko" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="about-me__photo" src={photo} alt="Я на фотографии"/>
      </div>
    </section>
  );
}

export default AboutMe;