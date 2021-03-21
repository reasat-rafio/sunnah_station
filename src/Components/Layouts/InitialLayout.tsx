import React from "react";
import { Navs } from "../Navs/Navs";
import { SmSearchPage } from "../overLayComponents/SmSearchPage";
import { NavSideBars } from "../Sidebars/NavSideBars";
import { ShoppingCartSideBar } from "../Sidebars/ShoppingCartSidebar";

interface InitialLayoutProps {
   children: React.ReactNode;
}

export const InitialLayout: React.FC<InitialLayoutProps> = ({ children }) => {
   return (
      <>
         <Navs />
         <NavSideBars />
         <ShoppingCartSideBar />
         <SmSearchPage />
         {children}
      </>
   );
};
