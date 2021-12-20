import { useEffect } from "react";

// https://usehooks.com/useOnClickOutside/

const useOnClickOutside = (refs, handler) => {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        // refs.map((ref) => {
        //   if (!ref.current || ref.current.contains(event.target)) {
        //     return;
        //   }

        //   handler(event);
        // });
        if (
          !refs[0].current ||
          refs[0].current.contains(event.target) ||
          !refs[1].current ||
          refs[1].current.contains(event.target)
        ) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [refs, handler]
  );
};

export default useOnClickOutside;
