/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";

// import './App.css';

// import Main from "../Main";
// import Movies from "../Movies/Movies";
// import SavedMovies from "../SavedMovies/SavedMovies";
// import Profile from "../Profile/Profile";
// import Register from "../Register/Register";
// import Login from "../Login/Login";
// import NotFoundPage from "../NotFoundPage/NotFoundPage";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/' element={<Main/>} loggedIn={isLoggedIn} />
//         <Route path='/movies' element={<Movies/>} loggedIn={isLoggedIn} />
//         <Route path='/saved-movies' element={<SavedMovies/>} loggedIn={isLoggedIn} />
//         <Route path='/profile' element={<Profile/>} loggedIn={isLoggedIn} />
//         <Route path='/signup' element={<Register/>} />
//         <Route path='/signin' element={<Login/>} />
//         <Route path='*' element={<NotFoundPage/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import moviesArray from '../../constants/moviesArray';
import { savedMoviesArray } from '../../constants/savedMoviesArray';


function App() {
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [ movies, setMovies ] = useState(moviesArray);
  const [ savedMovies, setSavedMovies ] = useState(savedMoviesArray);

  const closeAllPopups = () => {
    setIsMenuPopupOpen(false);
  }

  const handleMenuPopupClick = () => setIsMenuPopupOpen(true);

  function handleOverlayClick (evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path='/'
          element={
            <>
              <Header
                loggedIn={loggedIn} 
                headerClass={'header header-unlogged'}
              />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path='/movies'
          element={
            <>
              <Header
                loggedIn={loggedIn}
                headerClass={'header'}
                onMenuPopup={handleMenuPopupClick}
              />
              <Movies
                movies={movies}
                isOwner={false}
              />
              <Footer />
            </>
          }
        />
        <Route path='/saved-movies'
          element={
            <>
              <Header
                loggedIn={loggedIn}
                headerClass={'header'}
                onMenuPopup={handleMenuPopupClick}
              />
              <SavedMovies
                movies={savedMovies}
                isOwner={true}
              />
              <Footer />
            </>
          }
        />
        <Route path='/profile'
          element={
            <>
              <Header
                loggedIn={loggedIn}
                headerClass={'header'}
                onMenuPopup={handleMenuPopupClick}
              />
              <Profile />
            </>
          }
        />
        <Route path='/signup'
          element={
            <Register />
          }
        />
        <Route path='/signin'
          element={
            <Login />
          }
        />
        <Route path='*'
          element={
            <PageNotFound/>
          }
        />
      </Routes>

      <BurgerMenu
        isOpen={isMenuPopupOpen}
        onClose={closeAllPopups}
        onOverlayClick={handleOverlayClick}
      />
    </div>
  );
}

export default App;