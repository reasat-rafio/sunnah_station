import {
   HIDE_SEARCH_PAGE,
   HIDE_SIDE_BAR,
   SET_PAGE_WIDTH_ON_RESIZE,
   SHOW_CART_SIDEBAR,
   SHOW_SEARCH_PAGE,
   SHOW_SIDE_BAR,
   HIDE_CART_SIDEBAR,
   SHOW_BACK_TO_THE_TOP,
   HIDE_BACK_TO_THE_TOP,
   SHOW_CATEGORIES_SIDEBAR,
   HIDE_CATEGORIES_SIDEBAR,
   LOADING_START,
   LOADING_END,
} from "../types";

type Action = {
   type: string;
   payload?: any;
};

interface stateInterFace {
   isLoggedIn: boolean;
   showSidebar: boolean;
   showOverlayAuthPage: boolean;
   showSearchPage: boolean;
   pageWidth: number;
   showBackToTheTop: boolean;
   showCategorySidebar: boolean;
   isLoading: boolean;
}

export const initialDomState = {
   isLoggedIn: false,
   showSidebar: false,
   showOverlayAuthPage: false,
   showSearchPage: false,
   showCartSidebar: false,
   pageWidth: 0,
   showBackToTheTop: false,
   showCategorySidebar: false,
   isLoading: false,
};

export const domReducer = (state: stateInterFace, action: Action) => {
   switch (action.type) {
      case SHOW_SIDE_BAR:
         return {
            ...state,
            showSidebar: true,
         };
      case HIDE_SIDE_BAR:
         return {
            ...state,
            showSidebar: false,
         };
      case SHOW_CART_SIDEBAR:
         return {
            ...state,
            showCartSidebar: true,
         };
      case HIDE_CART_SIDEBAR:
         return {
            ...state,
            showCartSidebar: false,
         };
      case SHOW_SEARCH_PAGE:
         return {
            ...state,
            showSearchPage: true,
         };
      case HIDE_SEARCH_PAGE:
         return {
            ...state,
            showSearchPage: false,
         };
      case SET_PAGE_WIDTH_ON_RESIZE:
         return {
            ...state,
            pageWidth: action.payload,
         };

      case SHOW_BACK_TO_THE_TOP:
         return {
            ...state,
            showBackToTheTop: true,
         };
      case HIDE_BACK_TO_THE_TOP:
         return {
            ...state,
            showBackToTheTop: false,
         };

      case SHOW_CATEGORIES_SIDEBAR:
         return {
            ...state,
            showCategorySidebar: true,
         };

      case HIDE_CATEGORIES_SIDEBAR:
         return {
            ...state,
            showCategorySidebar: false,
         };

      case LOADING_START:
         return {
            ...state,
            isLoading: true,
         };

      case LOADING_END:
         return {
            ...state,
            isLoading: false,
         };

      default:
         return state;
   }
};
