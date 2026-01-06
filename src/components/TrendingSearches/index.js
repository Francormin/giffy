import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/Spinner";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

const LazyTrendingSearches = () => {
  const { show, elementRef } = useNearScreen();

  return (
    <div ref={elementRef}>
      {show ? (
        <Suspense fallback={<Spinner />}>
          <TrendingSearches />
        </Suspense>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default LazyTrendingSearches;
