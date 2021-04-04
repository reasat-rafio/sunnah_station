import {
   ADD_FIRST_ITEM,
   ADD_TO_THE_CART,
   PLUS_QUANTITY,
   ADD_ITEM,
   REMOVE_ITEM,
   MINUS_QUANTITY,
   CONFIRM_ORDER,
} from "../types";

export const addToTheCart = (item) => {
   return {
      type: ADD_TO_THE_CART,
      payload: item,
   };
};

export const addFirstItemToTheCart = (item) => {
   return {
      type: ADD_FIRST_ITEM,
      payload: item,
   };
};

export const plusTheQuantityOfTheExistingItem = (payload) => {
   return {
      type: PLUS_QUANTITY,
      payload: payload,
   };
};

export const minuTheQuantityOfTheExistingItem = (payload) => {
   return {
      type: MINUS_QUANTITY,
      payload: payload,
   };
};

export const addNonExistingItemInTheCart = (item) => {
   return {
      type: ADD_ITEM,
      payload: item,
   };
};

export const removeFromCart = (id) => {
   return {
      type: REMOVE_ITEM,
      payload: id,
   };
};

export const resetCart = () => {
   return {
      type: CONFIRM_ORDER,
   };
};
