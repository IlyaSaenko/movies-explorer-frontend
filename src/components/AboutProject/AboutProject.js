import React from 'react';

function AboutProject() {
  return (
    <section className="about-project" id="aboutProject" aria-label="О проекте">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info">
        <div className="about-project__section" aria-label="Описание этапов диплома">
          <h3 className="about-project__section-subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__section-text">Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.</p>
        </div>

        <div className="about-project__section" aria-label="Описание сроков выполнения диплома">
          <h3 className="about-project__section-subtitle about-project__section-subtitle_removed">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__section-text">У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__section-infoblock" aria-label="Информация о времени на задачи">
        <p className="about-project__timing">1 неделя</p>
        <p className="about-project__timing-colored">4 недели</p>
        <p className="about-project__text-caption">Back-end</p>
        <p className="about-project__text-caption">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;