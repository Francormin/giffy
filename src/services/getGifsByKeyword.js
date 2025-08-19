import { fromApiResponseToGifs } from "utils";

const getGifsByKeyword = ({ limit = 25, keyword } = {}) => {
  const params = `/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${keyword}&limit=${limit}`;
  const apiUrl = `${process.env.REACT_APP_GIPHY_BASE_URL}${params}`;

  return fetch(apiUrl)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
    .catch(error => console.error("Error fetching gifs:", error));
};

export default getGifsByKeyword;
