import React from 'react';
import Promo from '../components/Promo/Promo';
import NavTab from '../components/NavTab/NavTab';
import AboutProject from '../components/AboutProject/AboutProject';
import Techs from '../components/Techs/Techs';
import AboutMe from '../components/AboutMe/AboutMe';
import Portfolio from '../components/Portfolio/Portfolio';

function Main() {
  return (
    <main>
      <Promo/>
      <NavTab/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </main>
  );
}

export default Main;