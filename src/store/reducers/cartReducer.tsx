import {
   ADD_TO_THE_CART,
   ADD_FIRST_ITEM,
   PLUS_QUANTITY,
   ADD_ITEM,
   REMOVE_ITEM,
   MINUS_QUANTITY,
} from "../types";

type Action = {
   type: string;
   payload?: any;
};

interface stateInterFace {
   name: string;
   id: string;
   quantity: number | string;
   subTotal: number | string;
}

export const initialCartState = {
   inCartProducts: [],
};

export const cartReducer = (state: any, action: Action) => {
   switch (action.type) {
      case ADD_FIRST_ITEM:
         return {
            ...state,
            inCartProducts: [action.payload],
         };
      case ADD_TO_THE_CART:
         return {
            ...state,
            inCartProducts: [...state.inCartProducts, action.payload],
         };

      case PLUS_QUANTITY:
         const findTheItem = state.inCartProducts.filter(
            (f) => f.id === action.payload.id
         );

         findTheItem[0].quantity =
            findTheItem[0].quantity + action.payload.quantity;
         findTheItem[0].subtotal =
            findTheItem[0].quantity *
            parseInt(findTheItem[0].price.replace(/,/g, ""), 10);

         return {
            ...state,
         };

      case MINUS_QUANTITY:
         const findTheItemDesc = state.inCartProducts.filter(
            (f) => f.id === action.payload.id
         );

         findTheItemDesc[0].quantity =
            findTheItemDesc[0].quantity - action.payload.quantity;
         findTheItemDesc[0].subtotal =
            findTheItemDesc[0].quantity *
            parseInt(findTheItemDesc[0].price.replace(/,/g, ""), 10);

         return {
            ...state,
         };

      case ADD_ITEM:
         return {
            ...state,
            inCartProducts: [...state.inCartProducts, action.payload],
         };

      case REMOVE_ITEM:
         return {
            ...state,
            inCartProducts: [
               ...state.inCartProducts.filter((f) => f.id !== action.payload),
            ],
         };
      default:
         state;
   }
};
