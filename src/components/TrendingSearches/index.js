import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

const LazyTrendingSearches = () => {
  const { show, elementRef } = useNearScreen({ distance: "0px" });

  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>
        {show ? <TrendingSearches /> : <Spinner />}
      </Suspense>
    </div>
  );
};

export default LazyTrendingSearches;
