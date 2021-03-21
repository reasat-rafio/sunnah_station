import { useState, useEffect } from "react";
import { useCtx } from "../../store";
import { pageResizeWidth } from "../../store/actions/domActions";

export const usePageResize = (myRef: any) => {
   const [width, setWidth] = useState<number>(0);
   const [height, setHeight] = useState<number>(0);

   useEffect(() => {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
      const handleResize = () => {
         setWidth(myRef.current.offsetWidth);
         setHeight(myRef.current.offsetHeight);
      };
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [myRef]);
   return { width, height };
};

export const usePageResizerGlobal = (myRef, con: any) => {
   const { domDispatch } = useCtx();

   const [width, setWidth] = useState<number>(0);
   const [height, setHeight] = useState<number>(0);

   useEffect(() => {
      domDispatch(pageResizeWidth(myRef.current.offsetWidth));

      const handleResize = () => {
         domDispatch(pageResizeWidth(myRef.current.offsetWidth));
      };
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, [myRef, con]);
   return { width, height };
};
