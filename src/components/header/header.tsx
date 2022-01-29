import { useWindowScroll } from "@libs/hooks";
import { AnimatePresence, motion } from "framer-motion";

import { useRouter } from "next/router";
import { useState } from "react";

import {
  iconVariants,
  searchbarVariants,
} from "../../../utils/motion/animation";
import { CartBag, Menu, SmMenu } from "../../utils/svgs/Svg";
import Container from "@components/ui/container";
import SearchIcon from "@components/icons/search-icon";
import dynamic from "next/dynamic";
import clsx from "clsx";
const CartButton = dynamic(() => import("@components/cart/cart-button"), {
  ssr: false,
});
import { SanityImage, SanityImg } from "sanity-react-extra";
import { imageUrlBuilder } from "@utils/sanity";
import { useUI } from "@contexts/ui.context";

interface HeaderProps {
  navItems: NavItem[];
  logo: SanityImage;
}

export const Header: React.FC<HeaderProps> = ({ navItems, logo }) => {
  const {
    openSidebar,
    setDrawerView,
    openSearch,
    openModal,
    setModalView,
    isAuthorized,
  } = useUI();

  const router = useRouter();
  const scroll = useWindowScroll()?.y ?? 0;

  // This state is for hiding and showing the search input section
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [showSmMenu, setShowSmMenu] = useState<boolean>(false);

  // Search result state
  const [searFilteredItems, setSearchFilterItems] = useState<any>([]);

  return (
    <nav
      className={clsx(
        "fixed w-full transition-all duration-300 z-20",
        scroll ? "top-0" : "top-4 md:top-8"
      )}
    >
      <Container>
        <div
          className={clsx(
            "mx-auto px-4 rounded-md bg-white",
            scroll ? "py-1 md:py-2 shadow-lg" : "py-2 md:py-4"
          )}
        >
          <div className="flex items-center relative">
            <div onClick={() => router.push("/")}>
              <SanityImg
                image={logo}
                builder={imageUrlBuilder}
                width={120}
                alt="Sunnah Station Logo"
              />
            </div>
            <div className="hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0">
              <button
                className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
                onClick={openSearch}
                aria-label="search-button"
              >
                <SearchIcon />
              </button>
              <div className="-mt-0.5 flex-shrink-0"></div>
              <CartButton />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
