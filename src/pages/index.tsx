import { GetStaticProps } from "next";
import Head from "next/head";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function Home({ data }) {
   console.log(data[0]);

   return (
      <div>
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <p>Sunnah Station</p>
         <Image
            src="https://res.cloudinary.com/dapjxqk64/image/upload/v1615423794/ps4_pro_2_1_0e2b438e1e.jpg"
            layout="responsive"
            height={1}
            width={1}
            alt="asdasd"
         />
         {/* <ReactMarkdown
            className="markdown"
            source={data[0].details}
            escapeHtml={false}
         /> */}
      </div>
   );
}

export const getStaticProps: GetStaticProps = async () => {
   return {
      props: { data: "daa" },
   };
};
