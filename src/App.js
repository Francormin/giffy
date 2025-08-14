import { Link, Route, Switch } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import ResourceNotFound from "./components/ResourceNotFound";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/" className="App-logo-link">
          <img className="App-logo pulse" src="/giffy_logo.png" alt="giffy logo" />
        </Link>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
          <Route component={ResourceNotFound} />
        </Switch>
      </section>
    </div>
  );
};

export default App;
