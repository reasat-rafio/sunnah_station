import React from "react";
import { CategoriesSidebar } from "../ShopPage/CategoriesSidebar";
import { ProductCategories } from "../ShopPage/ProductCategories";

interface ShopLayoutProps {
   children: React.ReactNode;
}

export const ShopLayout: React.FC<ShopLayoutProps> = ({ children }) => {
   return (
      <>
         <main className="w-full">
            <div className="grid grid-cols-12 container mx-auto ">
               <section className="col-span-3 hidden lg:block ">
                  <ProductCategories />
               </section>
               <section className="lg:col-span-9 col-span-12 px-2 lg:px-0">
                  {children}
               </section>
            </div>
         </main>
         <CategoriesSidebar />
      </>
   );
};
