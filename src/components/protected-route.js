import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function ProtectedRoute({ component: Component, ...props }) {
  const location = useLocation();

  return (
    <Route>
      {() =>
        props.loggedIn ? (
          <>
            <Header loggedIn={props.loggedIn} />
            <Component {...props} />
            {location.pathname !== "/profile" && <Footer />}
          </>
        ) : (
          <Redirect to="/" />
        )
      }
    </Route>
  );
}
