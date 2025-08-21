import { useEffect, useRef, useState } from "react";

const useNearScreen = ({ distance = "100px" } = {}) => {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const isIntersecting = entries[0].isIntersecting;

      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  });

  return { show, elementRef };
};

export default useNearScreen;
