import { useContext, useEffect, useState } from "react";
import UserContext from "context/UserContext";
import getFavGifs from "services/getFavGifs";

export default function useFavGifs() {
  const [favGifs, setFavGifs] = useState([]);
  const [error, setError] = useState(null);

  const { favs } = useContext(UserContext);

  useEffect(() => {
    if (!favs.length) {
      return;
    }

    getFavGifs(favs)
      .then(setFavGifs)
      .catch(setError);
  }, [favs]);

  return { favGifs, error };
}
