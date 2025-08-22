import { useEffect, useState } from "react";
import getTrendingGifs from "services/getTrendingGifs";
import Category from "components/Category";

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingGifs().then(setTrends);
  }, []);

  return <Category name="Trendings" options={trends} />;
};

export default TrendingSearches;
