import React, { Suspense } from "react";
import { Link, Route, Switch } from "wouter";

import { GifsContextProvider } from "context/GifsContext";
import { UserContextProvider } from "context/UserContext";

import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";
import NotFound from "pages/NotFound";

import ScrollToTop from "components/ScrollToTop";
import Spinner from "components/Spinner";
import Header from "components/Header";

import "App.css";
import "theme.css";

const HomePage = React.lazy(() => import("pages/Home"));
const LoginPage = React.lazy(() => import("pages/Login"));

const App = () => {
  return (
    <UserContextProvider>
      <div className="App">
        <section className="App-content">
          <Header />

          <Link to="/" className="App-logo-link">
            <img className="App-logo pulse" src="/giffy_logo.png" alt="giffy logo" />
          </Link>

          <GifsContextProvider>
            <ScrollToTop />

            <Switch>
              <Route path="/">
                <Suspense fallback={<Spinner />}>
                  <HomePage />
                </Suspense>
              </Route>

              <Route path="/login">
                <Suspense fallback={<Spinner />}>
                  <LoginPage />
                </Suspense>
              </Route>

              <Route path="/search/:keyword/:rating?/:language?" component={SearchResults} />

              <Route path="/gif/:id" component={Detail} />

              <Route path="/404" component={NotFound} />

              <Route component={NotFound} />
            </Switch>
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  );
};

export default App;
