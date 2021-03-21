import { useState, useEffect } from "react";

export const useClientSize = (myRef: any) => {
   const [Pageheight, setPageHeight] = useState(0);
   const [compHeight, setCompHeight] = useState(0);
   useEffect(() => {
      setPageHeight(window.pageYOffset);
      setCompHeight(myRef.current.getBoundingClientRect().y);

      const handleResize = () => {
         if (myRef.current) {
            setPageHeight(window.pageYOffset);
            setCompHeight(myRef.current.getBoundingClientRect().y);
         }
      };
      window.addEventListener("scroll", handleResize);

      return () => {
         window.removeEventListener("scroll", handleResize);
      };
   }, [myRef]);
   return { Pageheight, compHeight };
};
