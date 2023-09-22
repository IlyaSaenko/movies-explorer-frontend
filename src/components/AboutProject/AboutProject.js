import React from 'react';

function AboutProject() {
  return (
    <section className="about-project" id="aboutProject" aria-label="О проекте">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info">
        <section className="about-project__section" aria-label="Описание этапов диплома">
          <h3 className="about-project__section-subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__section-text">Составление плана, работу над бэкендом, вёрстку,
          добавление функциональности и финальные доработки.</p>
        </section>

        <section className="about-project__section" aria-label="Описание сроков выполнения диплома">
          <h3 className="about-project__section-subtitle aboutProject__section-subtitle_removed">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__section-text">У каждого этапа был мягкий и жёсткий дедлайн,
          которые нужно было соблюдать, чтобы успешно защититься.</p>
        </section>
      </div>
      <section className="about-project__section-infoblock" aria-label="Информация о времени на задачи">
        <p className="about-project__timing">1 неделя</p>
        <p className="about-project__timing-colored">4 недели</p>
        <p className="about-project__text-caption">Back-end</p>
        <p className="about-project__text-caption">Front-end</p>
      </section>

    </section>
  );
}

export default AboutProject;