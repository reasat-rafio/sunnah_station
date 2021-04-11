import axios from "axios";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import { InitialLayout } from "../Components/Layouts/InitialLayout";
import gfm from "remark-gfm";
interface returnsRefundsProps {
   data: any;
}

const ReturnsRefunds: React.FC<returnsRefundsProps> = ({ data }) => {
   return (
      <InitialLayout>
         <div className="w-full">
            <div className="container mx-auto min-h-screen">
               <div className="pt-16 md:pt-32">
                  {data && (
                     <ReactMarkdown
                        className="prose max-w-none"
                        plugins={[gfm]}
                        children={data.return_refund}
                        escapeHtml={false}
                     />
                  )}
               </div>
            </div>
         </div>
      </InitialLayout>
   );
};

export default ReturnsRefunds;

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/return-refund`
   );

   return {
      props: {
         data,
      },
      revalidate: 1,
   };
};
