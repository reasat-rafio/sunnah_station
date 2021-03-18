import { USER_LOG_IN, USER_LOG_OUT } from "../types";

type Action = {
   type: string;
   payload: any;
};
export const initialUserState = {
   isLoggedIn: false,
   user: [],
};

export const userReducer = (state: any, action: Action) => {
   switch (action.type) {
      case USER_LOG_IN:
         return { ...state, isLoggedIn: true, user: [action.payload] };

      case USER_LOG_OUT:
         return {
            ...state,
            isLoggedIn: false,
            user: [],
         };
      default:
         return state;
   }
};
