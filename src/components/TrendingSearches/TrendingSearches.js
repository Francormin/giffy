import { useEffect, useState } from "react";
import getTrendingGifs from "services/getTrendingGifs";
import Category from "components/Category";

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingGifs().then(setTrends);
  }, []);

  return trends?.length
    ? <Category name="Trendings" options={trends} />
    : null;
};

export default TrendingSearches;
