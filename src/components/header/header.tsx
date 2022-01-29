import { useWindowScroll } from "@libs/hooks";
import { useRouter } from "next/router";
import { useState } from "react";

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
import AuthMenu from "./auth-menu";

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

  function handleLogin() {
    setModalView("LOGIN_VIEW");
    return openModal();
  }

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
              <div className="-mt-0.5 flex-shrink-0">
                <AuthMenu
                  isAuthorized={false}
                  href="/my-account"
                  className="text-sm xl:text-base text-heading font-semibold"
                  btnProps={{
                    className:
                      "text-sm xl:text-base text-heading font-semibold focus:outline-none",
                    children: "Sign In",
                    onClick: handleLogin,
                  }}
                >
                  Account
                </AuthMenu>
              </div>
              <CartButton />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
