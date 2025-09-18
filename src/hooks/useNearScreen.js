import { useEffect, useRef, useState } from "react";

const useNearScreen = ({ distance = "100px", externalRef, once = true } = {}) => {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = externalRef ? externalRef.current : elementRef.current;    

    const onChange = (entries, observer) => {
      const isIntersecting = entries[0].isIntersecting;

      if (isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance
    });
    
    element && observer.observe(element);

    return () => observer.disconnect();
  });

  return { show, elementRef };
};

export default useNearScreen;
