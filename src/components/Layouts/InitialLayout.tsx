import Footer from "@components/footer/footer";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useCtx } from "../../store";
import { loadingEnd, loadingstart } from "../../store/actions/domAction";
import { Loading } from "../Loading/Loading";
import { SmBottomNav } from "../Navs/BottomNav/BottomNav";
import { SmSearchPage } from "../overLayComponents/SmSearchPage";
import { NavSideBars } from "../Sidebars/NavSideBars";
import { ShoppingCartSideBar } from "../Sidebars/ShoppingCartSidebar";

interface InitialLayoutProps {
  children: React.ReactNode;
}

export const InitialLayout: React.FC<InitialLayoutProps> = ({ children }) => {
  const router = useRouter();
  // const {
  //   domDispatch,
  //   domState: { isLoading },
  // } = useCtx();

  // useEffect(() => {
  //   if (router.isFallback) {
  //     domDispatch(loadingstart());
  //   } else {
  //     domDispatch(loadingEnd());
  //   }
  // }, [router.isFallback]);

  return (
    <div id="top">
      {/* <NavSideBars /> */}
      {/* <ShoppingCartSideBar /> */}
      {/* <SmSearchPage /> */}
      {/* <Loading /> */}
      {children}
      {/* <SmBottomNav /> */}
      {/* <Footer /> */}
    </div>
  );
};
