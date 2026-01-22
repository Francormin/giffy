const addFav = async ({ id, jwt }) => {
  const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/favs/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jwt })
  });

  if (!response.ok) throw new Error();

  const parsedResponse = await response.json();
  const { favs } = parsedResponse;
  return favs;
};

export default addFav;
