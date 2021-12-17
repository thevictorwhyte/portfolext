import { useEffect, useRef } from "react";

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const useDimensions = (ref) => {
  const window = useRef({ width: 0, height: 0 });

  useEffect(() => {
    window.current.width = ref.current.offsetWidth;
    window.current.height = ref.current.offsetHeight;
    console.log(window.current.width, window.current.height);
  }, []);

  return window.current;
};
