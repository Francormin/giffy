import { useEffect, useState } from "react";
import getTrendingGifs from "services/getTrendingGifs";
import useNearScreen from "hooks/useNearScreen";
import Category from "components/Category";

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingGifs().then(setTrends);
  }, []);

  return <Category name="Trendings" options={trends} />;
};

const LazyTrendingSearches = () => {
  const { show, elementRef } = useNearScreen({ distance: "200px" });

  return (
    <div ref={elementRef}>
      {show ? <TrendingSearches /> : null}
    </div>
  );
};

export default LazyTrendingSearches;
