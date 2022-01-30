import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";
import { SanityImg, SanityImage } from "sanity-react-extra";
import { imageUrlBuilder } from "@utils/sanity";

const Logo: React.FC<
  React.AnchorHTMLAttributes<{}> & { image: SanityImage }
> = ({ image, className, ...props }) => {
  return (
    <Link
      href={"/"}
      className={cn("inline-flex focus:outline-none", className)}
      {...props}
    >
      <SanityImg
        image={image}
        builder={imageUrlBuilder}
        width={120}
        alt="Sunnah Station Logo"
      />
    </Link>
  );
};

export default Logo;
