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
            <div className="container mx-auto">
               <div className="pt-16 md:pt-32">
                  {data && (
                     <ReactMarkdown
                        className="prose max-w-none"
                        plugins={[gfm]}
                        children={data[0].return_refynd_policies}
                        escapeHtml={false}
                     />
                  )}
               </div>
            </div>
         </div>
      </InitialLayout>
   );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/return-refund-policies`
   );
   return {
      props: {
         data,
      },
   };
};

export default ReturnsRefunds;
