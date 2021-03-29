import Head from "next/head";

export const Seo = ({
   title,
   description,
   url,
   shareImage,
   keywords,
   preventIndexing,
}) => {
   //    const {

   //    } = useContext(SeoContext);
   return (
      <Head>
         <title>{title}</title>

         <meta name="description" content={description} key="description" />
         <meta name="keywords" content="{keywords}" />
         <meta
            name="twitter:card"
            content="summary_large_image"
            key="twitter:card"
         />
         <meta property="og:url" content={url} key="og:url" />
         <meta property="og:title" content={title} key="og:title" />
         <meta
            property="og:description"
            content={description}
            key="og:description"
         />
         <meta property="og:image" content={shareImage} key="og:image" />
         <meta
            property="og:image:alt"
            content={"shareImage"}
            key="og:image:alt"
         />
         <link rel="canonical" href={url} />
         {preventIndexing && (
            <>
               <meta name="robots" content="noindex"></meta>
               <meta name="googlebot" content="noindex"></meta>
            </>
         )}
      </Head>
   );
};
