const mapGif = ({ id, type, title, alt_text, rating, username, images }) => ({
  id,
  type,
  title,
  description: alt_text,
  rating,
  username,
  url: images?.original?.url
});

export const fromApiResponseToGifs = apiResponse => {
  if ("data" in apiResponse === false) return [];
  
  const { data } = apiResponse;

  if (Array.isArray(data)) {
    if (data.length === 0) return data;
    return data.map(mapGif);
  }

  if (Object.keys(data).length === 0) return data;
  return mapGif(data);
};
