import { Link, Route, Switch } from "wouter";
import { GifsContextProvider } from "context/GifsContext";
import ScrollToTop from "components/ScrollToTop";
import Home from "pages/Home";
import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";
import NotFound from "pages/NotFound";
import "App.css";
import "theme.css";

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
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </GifsContextProvider>
      </section>
    </div>
  );
};

export default App;
