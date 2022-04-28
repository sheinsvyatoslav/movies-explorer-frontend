import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'

export default function ProtectedRoute({ component: Component, ...props }) {
  const location = useLocation();

  return (
    <Route>
      {() =>
        props.loggedIn
        ? <>
            <Header loggedIn={props.loggedIn}/>
            <Component {...props} />
            {location.pathname !== '/profile' && <Footer />}
          </>
        : <Redirect to="/" />
      }
    </Route>
  );
}