const ENDPOINT = "http://localhost:8000";

const login = ({ username, password }) => {
  return fetch(`${ENDPOINT}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
    .then(response => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then(response => {
      const { jwt } = response;
      return jwt;
    });
};

export default login;
