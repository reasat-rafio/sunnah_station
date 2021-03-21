import { useEffect } from "react";

export const SaveToLocalStorage = ({ state, initialState, locationName }) => {
   useEffect(() => {
      localStorage.setItem(locationName, JSON.stringify(state));
   }, [state]);

   if (typeof window !== "undefined") {
      const localData = localStorage.getItem(locationName);
      return localData ? JSON.parse(localData) : initialState;
   }
   return initialState;
};
