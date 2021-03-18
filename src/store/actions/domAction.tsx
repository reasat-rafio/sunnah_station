import {
   HIDE_SIDE_BAR,
   SHOW_SEARCH_PAGE,
   SHOW_SIDE_BAR,
   HIDE_SEARCH_PAGE,
   SET_PAGE_WIDTH_ON_RESIZE,
   SHOW_CART_SIDEBAR,
   HIDE_CART_SIDEBAR,
   SHOW_BACK_TO_THE_TOP,
   HIDE_BACK_TO_THE_TOP,
   SHOW_CATEGORIES_SIDEBAR,
   HIDE_CATEGORIES_SIDEBAR,
} from "../types";

export const showSideNavBar = () => {
   return {
      type: SHOW_SIDE_BAR,
   };
};

export const hideSideNavBar = () => {
   return {
      type: HIDE_SIDE_BAR,
   };
};

export const showSearchPage = () => {
   return {
      type: SHOW_SEARCH_PAGE,
   };
};

export const hideSearchPage = () => {
   return {
      type: HIDE_SEARCH_PAGE,
   };
};

export const pageResizeWidth = (payload: number) => {
   return {
      type: SET_PAGE_WIDTH_ON_RESIZE,
      payload,
   };
};

export const showCart = () => {
   return {
      type: SHOW_CART_SIDEBAR,
   };
};

export const hideCart = () => {
   return {
      type: HIDE_CART_SIDEBAR,
   };
};

export const showBackToTheTopAction = () => {
   return {
      type: SHOW_BACK_TO_THE_TOP,
   };
};

export const hideBackToTheTopAction = () => {
   return {
      type: HIDE_BACK_TO_THE_TOP,
   };
};

export const showCategorySidebar = () => {
   return {
      type: SHOW_CATEGORIES_SIDEBAR,
   };
};

export const hideCategorySidebar = () => {
   return {
      type: HIDE_CATEGORIES_SIDEBAR,
   };
};
