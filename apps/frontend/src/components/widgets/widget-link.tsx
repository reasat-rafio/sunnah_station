import type { FC } from "react";
import Link from "next/link";
import { SanityImg } from "sanity-react-extra";
import { imageUrlBuilder } from "@utils/sanity";

interface Props {
  className?: string;
  data: FooterWidget;
}

const WidgetLink: FC<Props> = ({ className, data }) => {
  const { title, lists } = data;
  return (
    <div className={`${className}`}>
      <h4 className="text-heading text-sm md:text-base xl:text-lg font-semibold mb-5 2xl:mb-6 3xl:mb-7">
        {title}
      </h4>
      <ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
        {lists.map((list) => (
          <li
            key={`widget-list--key${list._key}`}
            className="flex items-baseline"
          >
            {list.icon && (
              <span className="me-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                {/* {list.icon} */}
                <SanityImg
                  width={20}
                  image={list.icon}
                  builder={imageUrlBuilder}
                  alt={`${title}'s logo`}
                />
              </span>
            )}
            <Link href={list.path ? list.path : "#!"}>
              <a className="transition-colors duration-200 hover:text-black">
                {list.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetLink;
