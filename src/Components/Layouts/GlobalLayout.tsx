import { useRouter } from "next/router";
import React, { useRef } from "react";
import { useCtx } from "../../store";
import { usePageResizerGlobal } from "../../utils/hooks/usePageResize";

interface GlobalLayoutsProps {
   children: React.ReactNode;
}

export const GlobalLayout: React.FC<GlobalLayoutsProps> = ({ children }) => {
   const router = useRouter();

   const {
      domDispatch,
      domState: { showCartSidebar, pageWidth },
   } = useCtx();

   const pageRef = useRef<HTMLDivElement>(null);
   usePageResizerGlobal(pageRef, router.pathname);
   return <main ref={pageRef}>{children}</main>;
};
