// import './AboutProject.css';

// const AboutProject = () => {
//   return (
//     <div className='about'>
//       <h2 className='about__title'>О проекте</h2>
//       <div className='about__description-blocks'>
//         <div className='about__description-block'>
//           <h3>Дипломный проект включал 5 этапов</h3>
//           <span>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</span>
//         </div>
//         <div className='about__description-block'>
//           <h3>На выполнение диплома ушло 5 недель</h3>
//           <span>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</span>
//         </div>
//       </div>
//       <div>
//         <div className='about__time-bar'>
//           <div className='about__backend'>1 неделя</div>
//           <div className='about__frontend'>4 недели</div>
//         </div>
//         <div className='about__time-text'>
//           <div className='about__backend-text'>Back-end</div>
//           <div className='about__frontend-text'>Front-end</div>
//         </div>
//       </div>
//     </div>
//   )
// };

// export default AboutProject;

import React from 'react';

function AboutProject() {
  return (
    <section className="aboutProject" id="aboutProject" aria-label="О проекте">
      <h2 className="aboutProject__subtitle">О проекте</h2>
      <div className="aboutProject__infoblock">
        {/* секция с этапами диплома */}
        <section className="aboutProject__section" aria-label="Описание этапов диплома">
          <h3 className="aboutProject__section-subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__section-text">Составление плана, работу над бэкендом, вёрстку,
          добавление функциональности и финальные доработки.</p>
        </section>

        {/* секция со сроками выполнения диплома */}
        <section className="aboutProject__section" aria-label="Описание сроков выполнения диплома">
          <h3 className="aboutProject__section-subtitle aboutProject__section-subtitle_removed">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__section-text">У каждого этапа был мягкий и жёсткий дедлайн,
          которые нужно было соблюдать, чтобы успешно защититься.</p>
        </section>
      </div>
      <section className="aboutProject__section-info" aria-label="Инфоблок">
        <p className="aboutProject__timing">1 неделя</p>
        <p className="aboutProject__timing-colored">4 недели</p>
        <p className="aboutProject__text-caption">Back-end</p>
        <p className="aboutProject__text-caption">Front-end</p>
      </section>

    </section>
  );
}

export default AboutProject;