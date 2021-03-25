import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useCtx } from "../../store";
import { usePageResizerGlobal } from "../../utils/hooks/usePageResize";
import { useSession } from "next-auth/client";
import { loginUserAction, logOutAaction } from "../../store/actions/userAction";

interface GlobalLayoutsProps {
   children: React.ReactNode;
}

export const GlobalLayout: React.FC<GlobalLayoutsProps> = ({ children }) => {
   const router = useRouter();
   const [session, loading] = useSession();

   const { userDispatch } = useCtx();

   useEffect(() => {
      if (session) {
         userDispatch(loginUserAction(session.user));
      } else {
         userDispatch(logOutAaction());
      }
   }, [session]);

   const {
      domDispatch,
      domState: { showCartSidebar, pageWidth },
   } = useCtx();

   const pageRef = useRef<HTMLDivElement>(null);
   usePageResizerGlobal(pageRef, router.pathname);
   return <main ref={pageRef}>{children}</main>;
};
