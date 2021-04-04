import { useContext, createContext, useReducer, useEffect } from "react";
import { cartReducer, initialCartState } from "./reducers/cartReducer";
import { domReducer, initialDomState } from "./reducers/domReducer";
import { initialProductState, productReducer } from "./reducers/productReducer";
import { initialUserState, userReducer } from "./reducers/userReducer";

const Store = createContext<any>(null);

interface StoreProps {
   children: React.ReactNode;
}

type Action = {
   type: string;
   payload: any;
};

type ProfileReducer = (state: any, action: Action) => any;

export const GlobalState: React.FC<StoreProps> = ({ children }) => {
   // USER STATE
   const [userState, userDispatch] = useReducer(
      userReducer,
      initialUserState,
      () => {
         if (typeof window !== "undefined") {
            const localData = localStorage.getItem("sunnahStationUserState");
            return localData ? JSON.parse(localData) : initialUserState;
         }
         return initialUserState;
      }
   );
   useEffect(() => {
      localStorage.setItem("sunnahStationUserState", JSON.stringify(userState));
   }, [userState]);

   // CART STATE
   const [cartState, cartDispatch] = useReducer(
      cartReducer,
      initialCartState,
      () => {
         if (typeof window !== "undefined") {
            const localData = localStorage.getItem("sunnahStationCartState");
            return localData ? JSON.parse(localData) : initialCartState;
         }
         return initialCartState;
      }
   );
   useEffect(() => {
      localStorage.setItem("sunnahStationCartState", JSON.stringify(cartState));
   }, [cartState]);

   // PRODUCTS STATE
   const [productsState, productsDispatch] = useReducer(
      productReducer,
      initialProductState,
      () => {
         if (typeof window !== "undefined") {
            const localData = localStorage.getItem("sunnahStationProductState");
            return localData ? JSON.parse(localData) : initialProductState;
         }
         return initialProductState;
      }
   );
   useEffect(() => {
      localStorage.setItem(
         "sunnahStationProductState",
         JSON.stringify(productsState)
      );
   }, [productsState]);

   // DOM STATE
   const [domState, domDispatch] = useReducer(domReducer, initialDomState);

   // A

   return (
      <Store.Provider
         value={{
            domState,
            userState,
            productsState,
            domDispatch,
            userDispatch,
            cartState,
            cartDispatch,
            productsDispatch,
         }}
      >
         {children}
      </Store.Provider>
   );
};

export const useCtx = () => useContext(Store);
