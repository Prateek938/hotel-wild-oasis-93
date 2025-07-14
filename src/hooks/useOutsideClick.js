import { useEffect, useRef } from "react";

//This component can be used universally anywhere!!

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
        //ref.current means the actual dom present before us
        // the second part checks for it target clicked is inside the dom or outside
        //here that is the modal window. if inside then true ->false (!) hence dont close
        // and if outside false->true hence close()->handler is initiated
      }

      document.addEventListener("click", handleClick, listenCapturing);
      //listencapturing should be set to true as eventlister are connected to root
      //dom thats why button won't work

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
