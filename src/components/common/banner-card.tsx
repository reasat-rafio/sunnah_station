import type { FC } from "react";
import cn from "classnames";
import Link from "@components/ui/link";
import { useWindowSize } from "@libs/hooks";
import { SanityImage, SanityImg } from "sanity-react-extra";
import { imageUrlBuilder } from "@utils/sanity";

interface BannerProps {
  banner: SanityImage;
  variant?: "rounded" | "default";
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
  alt: string;
  height?: number;
  width?: number;
  href: string;
}

const BannerCard: FC<BannerProps> = ({
  banner,
  className,
  variant = "rounded",
  effectActive = false,
  classNameInner,
  alt,
  href,
  height,
  width,
}) => {
  return (
    <div className={cn("mx-auto", className)}>
      <Link
        href={href}
        className={cn(
          "h-full group flex justify-center relative overflow-hidden",
          classNameInner
        )}
      >
        <SanityImg
          className={cn("bg-gray-300 object-cover w-full", {
            "rounded-md": variant === "rounded",
          })}
          builder={imageUrlBuilder}
          width={width}
          height={height}
          image={banner}
          alt={alt}
        />

        {effectActive && (
          <div className="absolute top-0 left-[-100%] h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        )}
      </Link>
    </div>
  );
};

export default BannerCard;
