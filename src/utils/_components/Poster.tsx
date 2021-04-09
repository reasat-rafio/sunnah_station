import Link from "next/link";

interface PosterProps {
   src: string;
   to: string;
   alt: string;
}

export const Poster: React.FC<PosterProps> = ({ src, to, alt }) => {
   return (
      <div className="my-4 relative posterDiv ">
         <Link href={to}>
            <a className="">
               <div className="posterImg rounded-2xl" />
               <img className="w-full  rounded-2xl" src={src} alt={alt} />
            </a>
         </Link>
      </div>
   );
};
