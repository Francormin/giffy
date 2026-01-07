const ENDPOINT = "http://localhost:8000";

const addFav = ({ id, jwt }) => {
  return fetch(`${ENDPOINT}/favs/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ jwt })
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

export default addFav;
