const register = async ({ username, password }) => {
  const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  if (response.status === 409) throw new Error("User already exists");
  if (!response.ok) throw new Error("Register failed");
  return true;
};

export default register;
