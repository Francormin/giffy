const addFav = async ({ id, jwt }) => {
  const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/favs/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jwt })
  });

  if (response.status === 401) throw new Error("Unauthorized");
  if (!response.ok) throw new Error("Error adding fav");

  const parsedResponse = await response.json();
  const { favs } = parsedResponse;
  return favs;
};

export default addFav;
