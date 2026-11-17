import { useEffect } from "react";

function ScrollTop() {

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

  }, []);

  return null;
}

export default ScrollTop;