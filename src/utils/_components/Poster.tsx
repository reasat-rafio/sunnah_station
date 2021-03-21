import Link from "next/link";

interface PosterProps {
   src: string;
   to: string;
}

export const Poster: React.FC<PosterProps> = ({ src, to }) => {
   return (
      <div className="my-4 relative posterDiv">
         <Link href={to}>
            <a className="">
               <div className="posterImg" />
               <img
                  className="w-full md:rounded-none  rounded-xl"
                  src={src}
                  alt=""
               />
            </a>
         </Link>
      </div>
   );
};
