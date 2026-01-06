import { useEffect, useRef } from "react";
import debounce from "just-debounce-it";
import useNearScreen from "./useNearScreen";

const useInfiniteScroll = ({ isLoading, onLoadMore, delay = 500, once = false }) => {
  const externalRef = useRef();
  const isFetching = useRef(false);

  const { show } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once
  });

  const debouncedLoadMore = useRef(debounce(onLoadMore, delay)).current;

  useEffect(() => {
    if (!show || isLoading) return;
    if (isFetching.current) return;

    isFetching.current = true;
    debouncedLoadMore();
  }, [show, isLoading, debouncedLoadMore]);

  useEffect(() => {
    if (!isLoading) {
      isFetching.current = false;
    }
  }, [isLoading]);

  return { externalRef };
};

export default useInfiniteScroll;
