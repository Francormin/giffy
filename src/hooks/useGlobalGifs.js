import { useContext } from "react";
import GifsContext from "context/GifsContext";

const useGlobalGifs = () => {
  return useContext(GifsContext);
};

export default useGlobalGifs;
