/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import PageNotFound from '../PageNotFound/PageNotFound';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import userAuth from '../../utils/UserAuth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import successImage from '../../images/entry-nice.svg';
import failImage from '../../images/entry-bad.svg';
import transformMovieHandle from '../../utils/MovieTransform';

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') || false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [infoTooltiptext, setInfoTooltipText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [initialMovies, setInitialMovies] = useState([]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      userAuth.getContent(jwt)
        .then((response) => {
          setLoggedIn(true);
          setCurrentUser({
            email: response.email,
            name: response.name
          });
        })
        .catch(err => console.log(err))
    }
  }, [navigate]);

  useEffect(() => {
    checkLocalStorage()
  }, []);

  useEffect(() => {
    mainApi.getToken();
    if (loggedIn) {
      mainApi.getAllNeededData()
        .then(([userInfo, savedByUserMovies]) => {
          setCurrentUser(userInfo);
          setSavedMovies(savedByUserMovies);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn]);

  const resetErrorMessage = useCallback((clearErrorMessage = '') => {
    setErrorMessage(clearErrorMessage)
  }, [setErrorMessage])

  useEffect(() => {
    resetErrorMessage();
  }, [resetErrorMessage, navigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeClick);
    return () => {
      document.removeEventListener('keydown', handleEscapeClick);
    }
  })

  function handleRegister({ email, password, name }) {
    setIsLoading(true);

    userAuth.register({ email, password, name })
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((error) => {
        setRegistered(false);
        setInfoTooltipText('Что-то пошло не так! Попробуйте ещё раз.');
        setInfoTooltipPopupOpen(true);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    userAuth.authorize({ email, password })
      .then((response) => {
        localStorage.setItem('jwt', response.token);
        setLoggedIn(true);
        setCurrentUser({
          email: response.email,
          name: response.name
        });
        localStorage.setItem('loggedIn', true);
        navigate('/movies');
      })
      .catch((error) => {
        setRegistered(false);
        setInfoTooltipText('Что-то пошло не так! Попробуйте ещё раз.');
        setInfoTooltipPopupOpen(true);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleUpdateUser({ email, name }) {
    setIsLoading(true);
    mainApi.patchUserInfo({ email, name })
      .then(() => {
        setCurrentUser({ email, name });
        setErrorMessage('Данные успешно обновлены!')
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('lastRequest');
    localStorage.removeItem('checkboxState');
    localStorage.removeItem('lastRequestedMovies');
    localStorage.removeItem('allMovies');
    setLoggedIn(false);
    setCurrentUser({});
    navigate('/');
  }

  const closeAllPopups = () => {
    setIsMenuPopupOpen(false);
    setInfoTooltipPopupOpen(false);
  }

  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  function handleEscapeClick(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  function handleGetAllMovies() {
    setIsLoading(true);
    moviesApi.getAllMovies()
      .then((dataForInitialMovies) => {
        // console.log("handleGetAllMovies=> isLoading=" + isLoading)
        const transformedMovies = transformMovieHandle(dataForInitialMovies);
        localStorage.setItem('allMovies', JSON.stringify(transformedMovies));
        setInitialMovies(transformedMovies);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      })
  }

  function checkLocalStorage() {
    const allMovies = localStorage.getItem('allMovies');
    if (allMovies) {
      console.log("checkLocalStorage: " + allMovies)
      setInitialMovies(JSON.parse(allMovies))
    } else {
      handleGetAllMovies();
    }
  }

  function handleSaveMovie(movie) {
    setIsLoading(true);
    mainApi.postNewMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleDeleteMovie(_id) {
    setIsLoading(true);
    mainApi.deleteMovie(_id)
      .then(() => {
        const restSavedMovies = savedMovies.filter((movie) => movie._id !== _id);
        setSavedMovies(restSavedMovies);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleMenuPopupClick = () => setIsMenuPopupOpen(true);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <Routes>
          <Route exact path='/'
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  headerClass={'header header-unlogged'}
                  onMenuPopup={handleMenuPopupClick}
                />
                <Main />
                <Footer />
              </>
            }
          />
          <Route path='/movies'
            element={
              <>
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Header}
                  headerClass={'header'}
                  onMenuPopup={handleMenuPopupClick}
                />
                <ProtectedRoute
                  component={Movies}
                    loggedIn={loggedIn}
                    initialMovies={initialMovies}
                    onSave={handleSaveMovie}
                    onDelete={handleDeleteMovie}
                    savedMovies={savedMovies}
                />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Footer}
                />
              </>
            }
          />
          <Route path='/saved-movies'
            element={
              <>
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Header}
                  headerClass={'header'}
                  onMenuPopup={handleMenuPopupClick}
                />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={SavedMovies}
                    initialMovies={savedMovies}
                    onSave={handleSaveMovie}
                    onDelete={handleDeleteMovie}
                    savedMovies={savedMovies}
                />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Footer}
                />
              </>
            }
          />
          <Route path='/profile'
            element={
              <>
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Header}
                    headerClass={'header'}
                    onMenuPopup={handleMenuPopupClick}
                />
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Profile}
                    onUpdateUserInfo={handleUpdateUser}
                    signOut={handleSignOut}
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                />
              </>
            }
          />

          { !loggedIn ? (
            <Route path='/signup'
              element={
                <Register
                  onRegisterUserData={handleRegister}
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                />
              }
            /> ) : (
            <Route path='/signup'
              element={
                <Navigate to="/"/>
              }
            />
          )}

          { !loggedIn ? (
            <Route path='/signin'
              element={
                <Login
                  onLoginUserData={handleLogin}
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                />
              }
          /> ) : (
            <Route path='/signin'
              element={
                <Navigate to="/" />
              }
            />
          )}

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

        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          title={infoTooltiptext}
          onClose={closeAllPopups}
          onOverlayClick={handleOverlayClick}
          image={registered ? successImage : failImage}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;