const login = async ({ username, password }) => {
  const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  if (response.status === 401) throw new Error("Credentials are invalid");
  if (!response.ok) throw new Error("Login failed");

  const parsedResponse = await response.json();
  const { jwt } = parsedResponse;
  return jwt;
};

export default login;
