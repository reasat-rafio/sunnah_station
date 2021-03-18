import { GET_ALL_PRODUCTS } from "../types";

type Action = {
   type: string;
   payload: any;
};

export const initialProductState = {
   products: [],
};

export const productReducer = (state: any, action: Action) => {
   switch (action.type) {
      case GET_ALL_PRODUCTS:
         return {
            ...state,
            products: action.payload,
         };

      default:
         return state;
   }
};
