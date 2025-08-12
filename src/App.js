import { Link, Route } from "wouter";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/argentina">Gifs de Argentina</Link>
        <Link to="/gif/brasil">Gifs de Brasil</Link>
        <Link to="/gif/colombia">Gifs de Colombia</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
};

export default App;
