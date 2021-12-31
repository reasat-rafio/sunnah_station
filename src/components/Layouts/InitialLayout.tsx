import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useCtx } from "../../store";
import { loadingEnd, loadingstart } from "../../store/actions/domAction";
import { Footer } from "../Footer/Footer";
import { Loading } from "../Loading/Loading";
import { SmBottomNav } from "../Navs/BottomNav/BottomNav";
import { Navs } from "../Navs/Navs";
import { SmSearchPage } from "../overLayComponents/SmSearchPage";
import { NavSideBars } from "../Sidebars/NavSideBars";
import { ShoppingCartSideBar } from "../Sidebars/ShoppingCartSidebar";

interface InitialLayoutProps {
  children: React.ReactNode;
}

export const InitialLayout: React.FC<InitialLayoutProps> = ({ children }) => {
  const router = useRouter();
  const {
    domDispatch,
    domState: { isLoading },
  } = useCtx();

  useEffect(() => {
    if (router.isFallback) {
      domDispatch(loadingstart());
    } else {
      domDispatch(loadingEnd());
    }
  }, [router.isFallback]);

  return (
    <div id="top">
      <Navs />

      <NavSideBars />
      <ShoppingCartSideBar />
      <SmSearchPage />
      <Loading />
      {children}
      {/* <SmBottomNav /> */}
      <Footer />
    </div>
  );
};
