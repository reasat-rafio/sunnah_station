import { GetStaticProps } from "next";
import axios from "axios";
import { InitialLayout } from "../Components/Layouts/InitialLayout";
import { Products } from "../Components/Products/Products";
import { FilterProductSection } from "../Components/ShopPage/FilterProductSection";
import { useState } from "react";

const New_Arrival = ({ new_arrival }) => {
   return (
      <InitialLayout>
         <div className="w-full pt-16 md:pt-32 ">
            <div className="container mx-auto">
               <Products products={new_arrival} />
            </div>
         </div>
      </InitialLayout>
   );
};

export default New_Arrival;

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await axios.get(`${process.env.URL}/new-arrivals`);

   return {
      props: {
         new_arrival: data,
      },
      revalidate: 10,
   };
};
