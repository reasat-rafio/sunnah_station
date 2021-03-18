import { GET_ALL_PRODUCTS } from "../types";

export const getAllTheProducts = (payload: any) => {
   return {
      type: GET_ALL_PRODUCTS,
      payload,
   };
};
