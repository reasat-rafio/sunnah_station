import { GetStaticProps } from "next";
import axios from "axios";
import { Products } from "../Components/Products/Products";
import { InitialLayout } from "../Components/Layouts/InitialLayout";

const Flash_Deals = ({ flash_deals }) => {
   return (
      <InitialLayout>
         <div className=" pt-16 md:pt-32">
            <Products products={flash_deals} />
         </div>
      </InitialLayout>
   );
};

export default Flash_Deals;

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await axios.get(`${process.env.URL}/special-deals`);

   return {
      props: {
         flash_deals: data,
      },
      revalidate: 1,
   };
};
