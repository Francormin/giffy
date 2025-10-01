import { fromApiResponseToGifs } from "utils";

const getSingleGif = id => {
  const params = `/gifs/${id}?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
  const apiUrl = `${process.env.REACT_APP_GIPHY_BASE_URL}${params}`;

  return fetch(apiUrl)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
    .catch(error => console.error("Error fetching single gif:", error));
}

export default getSingleGif;
