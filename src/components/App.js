import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import Profile from './Profile';
import Register from './Register';
import Login from './Login';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import findMovie from '../utils/FindMovie';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import getMovies from '../utils/MoviesApi';
import mainApi from '../utils/MainApi';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../utils/auth.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [shortOn, setShortOn] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  const [currentUser, setCurrentUser] = useState({});
  const [searchInput, setSearchInput] = useState(localStorage.getItem('input') || '');
  const history = useHistory();

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')) || movies);
    setShortOn(JSON.parse(localStorage.getItem('short')) || false)
  }, []);

  //получаем данные пользователя
  function handleGetUser() {
    mainApi.getUser()
    .then(user => {
      setCurrentUser(user);
    })
    .catch(err => console.log(err));
  }

  //рендерим данные пользователя
  useEffect(() => {
    if(loggedIn) {
      mainApi.getUser()
      .then(user => {
        setCurrentUser(user);
      })
      .catch(err => console.log(err));
    }
  }, []);

  //обновляем данные пользователя
  function handleUpdateUser({email, name}) {
    mainApi.updateUserInfo({email, name})
    .then(userData => {
      setCurrentUser(userData);
    })
    .catch(err => console.log(err));
  }

  //получаем все фильмы с сервера
  function handleGetAllMovies(name) {
    setIsPreloaderOpen(true);
    setNotFound(false);
    getMovies()
    .then(movies => {
      //фильтрация фильмов по имени
      let filteredMovies = findMovie(movies, name);
      setMovies(filteredMovies);
      filteredMovies.length === 0 && setNotFound(true);
      localStorage.setItem('movies', JSON.stringify(filteredMovies));
      localStorage.setItem('input', name);
    })
    .catch(err => {
      console.log(err);
      setIsErrorOpen(true);
    })
    .finally(() => setIsPreloaderOpen(false));
  }

  useEffect(() => {
    if(loggedIn) {
      mainApi.getMovies()
      .then(savedMovies => {
        const currentUserMovies = savedMovies.filter(movie => movie.owner === currentUser._id);
        localStorage.setItem('savedMovies', JSON.stringify(currentUserMovies));
        setSavedMovies(currentUserMovies)
      })
      .catch(err => console.log(err));
    }
  }, [currentUser._id]);

  function handleSaveMovie(movie) {
    mainApi.createMovie({
      movieId: movie.id,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
    })
    .then(movie => {
      setSavedMovies([...savedMovies, movie]);
    })
    .catch(err => console.log(err));
  }

  function handleDeleteMovie(deletedMovie) {
    mainApi.deleteMovie(deletedMovie._id)
    .then(() => {
      setSavedMovies((movies) => movies.filter((movie) => movie._id !== deletedMovie._id))
      console.log('Карточка удалена')
    })
    .catch(err => console.log(err));
  }

  function handleRegister(email, password, name) {
    auth.register(email, password, name)
    .then(() => handleLogin(email, password))
    .catch(err => console.log(err))
  }

  function handleLogin(email, password) {
    auth.authorize(email, password)
    .then((data) => {
      console.log(data);
      if (data.token){
        setLoggedIn(true);
        localStorage.setItem('token', data.token);
        history.push('/movies');
        handleGetUser();
      }
    })
    .catch(err => console.log(err));
  }

  function signOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('input');
    localStorage.removeItem('movies');
    localStorage.removeItem('short');
    setLoggedIn(false);
    history.push('/');
    setSearchInput('');
    setMovies([]);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Header loggedIn={loggedIn}/>
          <Main />
          <Footer />
        </Route>
        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          onGetMovies={handleGetAllMovies}
          movies={movies}
          isPreloaderOpen={isPreloaderOpen}
          isErrorOpen={isErrorOpen}
          shortOn={shortOn}
          setShortOn={setShortOn}
          notFound={notFound}
          saveMovie={handleSaveMovie}
          deleteMovie={handleDeleteMovie}
          savedMovies={savedMovies}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          isPreloaderOpen={isPreloaderOpen}
          isErrorOpen={isErrorOpen}
          deleteMovie={handleDeleteMovie}
          shortOn={shortOn}
          setShortOn={setShortOn}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          loggedIn={loggedIn}
          signOut={signOut}
          onUpdateUser={handleUpdateUser}
        />
        <Route path="/signup">
          {loggedIn
          ? <Redirect to="/" />
          : <Register handleRegister={handleRegister} />
          }
        </Route>
        <Route path="/signin">
          {loggedIn
          ? <Redirect to="/" />
          : <Login handleLogin={handleLogin} />
          }
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}