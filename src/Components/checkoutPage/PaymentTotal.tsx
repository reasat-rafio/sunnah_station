import React, { useEffect, useState } from "react";
import { useCtx } from "../../store";

interface CartTotalProps {
   setOrderPaymentStepComplete: any;
   setAdressStepComplete: any;
   setOrderInfo: any;
   orderInfo: any;
}

export const PaymentTotal: React.FC<CartTotalProps> = ({
   setOrderPaymentStepComplete,
   setAdressStepComplete,
   setOrderInfo,
   orderInfo,
}) => {
   //   GLOBAL STORE
   const {
      cartState: { inCartProducts },
      cartState,
   } = useCtx();

   // items subtotal
   const [subTotal, setSubTotal] = useState<number>(0);
   //  doing the sum of the items price
   useEffect(() => {
      if (inCartProducts && inCartProducts.length > 0) {
         const _subtotal = inCartProducts.reduce(
            (result: number, { subtotal }) => result + subtotal,
            0
         );
         setSubTotal(_subtotal);
      } else {
         setSubTotal(0);
      }
   }, [cartState]);

   // FILTERING DISTRICT STATE
   const [district, setDistrict] = useState<string>("Dhaka");

   //    confirm order onclick action
   const confirmOrderAction = () => {
      setOrderPaymentStepComplete(true);
      setOrderInfo({
         ...orderInfo,
         total: district == "Dhaka" ? subTotal + 60 : subTotal + 100,
         orderedProducts: inCartProducts,
      });
   };

   return (
      <div className="col-span-12 lg:col-span-4  p-6  border-2  duration-150  border-gray-200 ">
         <div className="border-b">
            <h1 className="py-2 font-semibold text-lg">CART TOTALS</h1>
            <div className="flex items-center py-2 text-sm">
               <h5 className=" flex-1 font-medium">Subtotal</h5>
               <p className="text-gray-500">৳ {subTotal.toLocaleString()}</p>
            </div>
         </div>
         <div className="border-b py-3 text-sm ">
            <div className="flex items-center py-2">
               <h5 className=" flex-1  font-medium">Shipping</h5>
               <div className="text-sm">
                  <div className="my-1 text-gray-500">
                     <p className="">
                        Home Delivery:
                        <span className="text-nevyBlue font-semibold">
                           {" "}
                           ৳ {district === "Dhaka" ? "60" : "100"}
                        </span>
                     </p>
                     <p className="">
                        Shipping to{" "}
                        <span className="font-semibold">{district}</span>
                     </p>
                  </div>
               </div>
            </div>
            {/* ADDRESS */}
         </div>

         <div className="py-3">
            <div className="flex flex-col justify-center py-2">
               <div className="flex ">
                  <h3 className="flex-1">Total</h3>
                  <p>
                     ৳ {district == "Dhaka" ? subTotal + 60 : subTotal + 100}
                  </p>
               </div>
               <div className="grid grid-cols-12 gap-2 justify-center items-center">
                  <button
                     className=" col-span-12 md:col-span-6 bg-gray-800 p-2 rounded-lg text-sm font-semibold text-white shadow-sm mt-3"
                     onClick={() => setAdressStepComplete(false)}
                  >
                     PREVIOUS
                  </button>
                  <button
                     className="col-span-12 md:col-span-6  bg-nevyBlue p-2 rounded-lg text-sm font-semibold text-white shadow-sm mt-3"
                     onClick={confirmOrderAction}
                  >
                     CONFIRM ORDER
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
