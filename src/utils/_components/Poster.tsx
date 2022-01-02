import { imageUrlBuilder } from "@utils/sanity";
import Link from "next/link";
import { SanityImg } from "sanity-react-extra";

interface PosterProps {
  src: string;
  to: string;
  alt?: string;
}

export const Poster: React.FC<PosterProps> = ({ src, to, alt }) => {
  return (
    <div className="my-4 relative posterDiv ">
      <Link href={to}>
        <a className="">
          <div className="posterImg rounded-2xl" />

          <SanityImg
            className="w-full"
            width={1200}
            image={src}
            builder={imageUrlBuilder}
            alt={alt}
          />
        </a>
      </Link>
    </div>
  );
};
