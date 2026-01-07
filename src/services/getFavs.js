const ENDPOINT = "http://localhost:8000";

const getFavs = ({ jwt }) => {
  return fetch(`${ENDPOINT}/favs`, {
    method: "GET",
    headers: {
      "Authorization": jwt,
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then(response => {
      const { favs } = response;
      return favs;
    });
};

export default getFavs;
