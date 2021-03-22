import { GetStaticProps } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { InitialLayout } from "../Components/Layouts/InitialLayout";
import axios from "axios";
import Image from "next/image";

export default function Home({ data }) {
   return (
      <InitialLayout>
         <Head>
            <title>Home - Sunnah Station</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className="w-full">
            <section className="container mx-auto">
               <div className="min-h-screen mt-44  ">
                  <Image
                     className="rounded-3xl "
                     src="https://res.cloudinary.com/dapjxqk64/image/upload/v1616399374/sunnah%20statoin/Screenshot_2021-03-22_134155_mflxo3.png"
                     height="1"
                     width="3"
                     layout="responsive"
                  />
               </div>
            </section>
         </main>
         {/* <ReactMarkdown
            className="markdown"
            source={data[0].details}
            escapeHtml={false}
         /> */}
      </InitialLayout>
   );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
   // const { data } = await axios.get("http://localhost:1337/main-cover-images");
   return {
      props: { data: "data[0].img[0]" },
   };
};
