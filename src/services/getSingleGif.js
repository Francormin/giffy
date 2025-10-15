import { fromApiResponseToGifs } from "utils";
import CustomError from "utils/CustomError";

const getSingleGif = id => {
  const params = `/gifs/${id}?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
  const apiUrl = `${process.env.REACT_APP_GIPHY_BASE_URL}${params}`;

  return fetch(apiUrl)
    .then(res => {
      if (!res.ok) throw res.status;
      return res.json();
    })
    .then(fromApiResponseToGifs)
    .catch(status => {
      const baseError = "Error fetching single gif: ";
      throw status === 404
        ? new CustomError(baseError + "Resource not found", status)
        : new CustomError(baseError + "Generic error", status);
    });
};

export default getSingleGif;
