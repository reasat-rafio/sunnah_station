import { GetStaticProps } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { InitialLayout } from "../Components/Layouts/InitialLayout";
import axios from "axios";
import { HomePoster } from "../Components/Home/HomePoster";
import { BrowseByCategory } from "../Components/Home/BrowsByCategory/BrowseByCategory";

export default function Home({ coverImg }) {
   return (
      <InitialLayout>
         <Head>
            <title>Home - Sunnah Station</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className="w-full">
            <HomePoster coverImg={coverImg} />
            <BrowseByCategory />
         </main>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
         sapiente ducimus soluta suscipit sint quis molestias voluptates at
         aperiam neque sequi rerum facere expedita rem adipisci voluptatem?
         Architecto deleniti molestias delectus repudiandae facere veniam iure
         maxime dicta debitis maiores quod animi vitae. Id cum reiciendis vel
         harum vitae, reprehenderit quis non! Nisi mollitia aut ducimus in
         dolorem reiciendis deserunt quae natus eaque perferendis rem laboriosam
         impedit consectetur voluptatum est nam non molestiae aliquid dolore,
         quis porro excepturi? Consequatur est qui et molestiae eum illum vitae
         impedit voluptas odit delectus assumenda aut accusantium quos doloribus
         ex, aliquam voluptates ab, eius repellat. Quam voluptas eos pariatur
         minus minima alias sit? Est voluptate praesentium quidem dolorem esse
         placeat voluptatem, unde molestiae nostrum ab dicta error sit deserunt
         fugit minima, tempora architecto. Nostrum, autem id. Perspiciatis,
         alias veritatis facere reprehenderit ut cumque eveniet consectetur
         autem delectus error cupiditate cum, commodi voluptatibus vero ipsam
         inventore minima tempore fugiat obcaecati expedita eos non! Voluptatum
         possimus corporis saepe, harum, cupiditate expedita vero quibusdam e
         ducimus autem perspiciatis omnis et repudiandae sint veniam qui? Ad
         cumque quaerat laudantium odio molestiae exercitationem ullam tenetur
         deleniti nostrum. Quibusdam eaque maiores vel enim. Placeat ut qui
         sequi nemo enim dolorum voluptate facere, labore cumque veritatis
         perferendis dolor magnam! Minima, suscipit dicta?
         {/* <ReactMarkdown
            className="markdown"
            source={data[0].details}
            escapeHtml={false}
         /> */}
      </InitialLayout>
   );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
   const { data } = await axios.get("http://localhost:1337/main-cover-images");
   return {
      props: { coverImg: data[0].img },
   };
};
