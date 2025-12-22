import { fromApiResponseToGifs } from "utils";

const getGifsByKeyword = ({ limit = 15, keyword, rating = "g", page = 0 } = {}) => {
  const params = `/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}`;
  const apiUrl = `${process.env.REACT_APP_GIPHY_BASE_URL}${params}`;

  return fetch(apiUrl)
    .then(res => res.json())
    .then(fromApiResponseToGifs);
};

export default getGifsByKeyword;
