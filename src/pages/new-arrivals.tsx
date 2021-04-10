import { GetStaticProps } from "next";
import axios from "axios";
import { InitialLayout } from "../Components/Layouts/InitialLayout";
import { Products } from "../Components/Products/Products";

const New_Arrival = ({ new_arrival }) => {
   return (
      <InitialLayout>
         <div className=" pt-16 md:pt-32">
            <Products products={new_arrival} />
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
      revalidate: 1,
   };
};
