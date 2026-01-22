const getFavs = async ({ jwt }) => {
  const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/favs`, {
    method: "GET",
    headers: {
      Authorization: jwt,
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) throw new Error();

  const parsedResponse = await response.json();
  const { favs } = parsedResponse;
  return favs;
};

export default getFavs;
