import React from "react";
import { Footer } from "../Footer/Footer";
import { Navs } from "../Navs/Navs";
import { SmSearchPage } from "../overLayComponents/SmSearchPage";
import { NavSideBars } from "../Sidebars/NavSideBars";
import { ShoppingCartSideBar } from "../Sidebars/ShoppingCartSidebar";

interface InitialLayoutProps {
   children: React.ReactNode;
}

export const InitialLayout: React.FC<InitialLayoutProps> = ({ children }) => {
   return (
      <div id="top">
         <Navs />
         <NavSideBars />
         <ShoppingCartSideBar />
         <SmSearchPage />
         {children}
         <Footer />
      </div>
   );
};
