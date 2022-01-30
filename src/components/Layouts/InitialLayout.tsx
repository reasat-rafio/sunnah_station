import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface InitialLayoutProps {
  children: React.ReactNode;
}

export const InitialLayout: React.FC<InitialLayoutProps> = ({ children }) => {
  const router = useRouter();

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
