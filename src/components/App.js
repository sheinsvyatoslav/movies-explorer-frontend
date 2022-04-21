import Header from './Header'
import Main from './Main'
import Movies from './Movies'
import SavedMovies from './SavedMovies'
import Profile from './Profile'
import Register from './Register'
import Login from './Login'
import Footer from './Footer'
import PageNotFound from './PageNotFound'
import { Route, Switch } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}