import { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";
import ListOfGifs from "./components/ListOfGifs";

const App = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword: "programming" }).then(gifs => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs gifs={gifs} />
      </section>
    </div>
  );
};

export default App;
