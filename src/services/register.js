const register = ({ username, password }) => {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  }).then(response => {
    if (response.status === 409) throw new Error("User already exists");
    return true;
  });
};

export default register;
