import { Link, Route, Switch } from "wouter";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import GifDetails from "./components/GifDetails";

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <Switch>
          <Route path="/">
            <h1>GIFFY</h1>
            <Link to="/gifs/argentina">GIFs of Argentina</Link>
            <Link to="/gifs/brasil">GIFs of Brasil</Link>
            <Link to="/gifs/colombia">GIFs of Colombia</Link>
          </Route>

          <Route path="/gifs/:keyword" component={ListOfGifs} />
          <Route path="/gif/:id" component={GifDetails} />
          <Route>¯\_(ツ)_/¯Page Not Found¯\_(ツ)_/¯</Route>
        </Switch>
      </section>
    </div>
  );
};

export default App;
