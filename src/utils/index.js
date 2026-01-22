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
  if (!apiResponse?.data) return [];
  
  const { data } = apiResponse;

  if (Array.isArray(data)) return data.map(mapGif);
  if (!Object.keys(data).length) return [];
  return [mapGif(data)];
};
