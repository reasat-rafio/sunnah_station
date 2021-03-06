import React from "react";
import { Poster } from "../../../utils/_components/Poster";
import { Deals } from "../Deals/Deals";

interface SpeicalDealsProps {
   speicalDeals: any[];
}

export const SpeicalDeals: React.FC<SpeicalDealsProps> = ({ speicalDeals }) => {
   return (
      <section className="container  mx-auto px-2 font-title">
         <div className="my-10 flex md:block justify-center items-center flex-col">
            <h3 className="italic font-semibold text-blue-600 py-1 text-xl ">
               - Our Products
            </h3>
            <div className="flex  flex-col md:flex-row">
               <h4 className="text-smTitle md:text-lgTitle font-extrabold flex-1 text-nevyBlue font-title">
                  Explore out Products and Deals
               </h4>
            </div>
         </div>
         <Poster
            src="https://res.cloudinary.com/dapjxqk64/image/upload/v1618802229/sunnah%20statoin/bar1_d8cjot.jpg"
            to="/"
            alt="special deals"
         />
         {/* Poster  */}
         <div>
            <Deals
               deals={speicalDeals}
               to="/special-deals"
               name="RAMADAN SALE"
            />
         </div>
      </section>
   );
};
