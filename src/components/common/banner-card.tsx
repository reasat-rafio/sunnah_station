import Image from "next/image";
import type { FC } from "react";
import cn from "classnames";
import { LinkProps } from "next/link";
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
}) => {
  const windwoWidth = useWindowSize()?.width ?? 0;
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
          builder={imageUrlBuilder}
          width={430}
          height={600}
          image={banner}
          alt={alt}
        />

        {effectActive && (
          <div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        )}
      </Link>
    </div>
  );
};

export default BannerCard;
