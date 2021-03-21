import { useEffect } from "react";
import { useCtx } from "../../store";

export const useOutsideAlerter = (ref, action: string, dispatch: any) => {
   useEffect(() => {
      function handleClickOutside(event) {
         if (ref.current && !ref.current.contains(event.target)) {
            dispatch({
               type: action,
            });
         }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         // Unbind the event listener on clean up
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [ref]);
};
