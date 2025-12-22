import React, { Suspense } from "react";
import { Link, Route, Switch } from "wouter";
import { GifsContextProvider } from "context/GifsContext";
import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";
import Spinner from "components/Spinner";
import "App.css";
import "theme.css";

const HomePage = React.lazy(() => import("pages/Home"));

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
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
            <Route path="/search/:keyword/:rating?" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </GifsContextProvider>
      </section>
    </div>
  );
};

export default App;
