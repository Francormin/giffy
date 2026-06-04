import { fromApiResponseToGifs } from "utils";
import CustomError from "utils/CustomError";

const getFavGifs = async ids => {
  const params = `/gifs?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&ids=${ids.join(",")}`;
  const apiUrl = `${process.env.REACT_APP_GIPHY_BASE_URL}${params}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    const { status } = response;

    const message =
      status === 400 ? "Bad request" : status === 401 ? "Unauthorized" : "Generic error";

    throw new CustomError(
      `Error fetching fav gifs: ${message}`,
      status
    );
  }

  const data = await response.json();
  return fromApiResponseToGifs(data);
};

export default getFavGifs;
