import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useCtx } from "../../store";
import { resetCart } from "../../store/actions/CartAction";
import { loadingEnd, loadingstart } from "../../store/actions/domAction";
import { ChangeAddressVariants } from "../../utils/animation";
import { useFilterByInput } from "../../utils/hooks/useFilterByInput";
import { DownArrowSm, Search, UpArrowSm } from "../../utils/svgs/Svg";
import { Notify } from "../../utils/Toast";
import { Country, subDistrict } from "../CartPage/CartTotal/_Data";

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
   console.log(orderInfo);

   //   GLOBAL STORE
   const {
      cartState: { inCartProducts },
      cartDispatch,
      domDispatch,
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

   // ADDRESS STATE
   const [showMoreAdress, setShowMoreAdress] = useState<boolean>(true);
   const [showMoreCountry, setShowMoreCountry] = useState<boolean>(false);
   const [showMoreDistrict, setShowMoreDistrict] = useState<boolean>(false);

   // FILTERING COURTY STATE
   const [country, setCountry] = useState<string>("Bangladesh");
   const [allCountries, setAllCountries] = useState(Country);
   const [filtredCountry, setFiltedCountry] = useState(Country);

   // FILTERING DISTRICT STATE
   const [district, setDistrict] = useState<string>(() => orderInfo.district);
   const [allDistricts, setAllDistricts] = useState(subDistrict);
   const [filtredDistrict, setFiltredDistrict] = useState(subDistrict);
   console.log(filtredDistrict);

   // CITY AND ZIP STATE
   const [townOrCity, setTownORCity] = useState<string>(orderInfo.town_city);
   const [zip, setZip] = useState<string>("");

   useEffect(() => {
      setDistrict(orderInfo.district);
   }, []);

   // SETTING THE INPUT STATE ACTION
   const stateAction = (value: string, setState: any, hideState: any) => {
      setState(value);
      hideState(false);
   };

   //    confirm order onclick action
   const confirmOrderAction = async () => {
      if (inCartProducts.length < 1) {
         Notify("info", "Your cart is empty");
      } else {
         domDispatch(loadingstart());
         setOrderPaymentStepComplete(true);
         setOrderInfo({
            ...orderInfo,
            total: district == "Dhaka" ? subTotal + 60 : subTotal + 100,
            orderedProducts: inCartProducts,
         });

         const {
            additional_info,
            email_address,
            first_name,
            last_name,
            phone,
            street_address,
            town_city,
         } = orderInfo;

         const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/orders`,
            {
               name: `${first_name} ${last_name}`,
               email_address,
               phone_number: phone,
               district: orderInfo.district,
               street_address,
               town_city,
               total_price:
                  orderInfo.district == "Dhaka"
                     ? subTotal + 60
                     : subTotal + 100,
               additional_info,
               ordered_products: inCartProducts.map(
                  ({ name, price, quantity, id, subtotal }) => [
                     { name, price, quantity, id, subtotal },
                  ]
               ),
               peyment_methord: "",
               transaction_id: "",
            }
         );
         console.log(data);
         cartDispatch(resetCart());
         domDispatch(loadingEnd());
      }
   };

   //  Input onChange Action
   const onChangeAction = (value, setState, state) => {
      const { filteredItme } = useFilterByInput(state, value);

      setState(filteredItme);
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
                  <button
                     className="text-nevyBlue font-semibold my-3"
                     onClick={() => setShowMoreAdress((prev) => !prev)}
                  >
                     Change address
                  </button>
               </div>
            </div>
            {/* ADDRESS */}
            <AnimatePresence exitBeforeEnter>
               {showMoreAdress && (
                  <motion.div
                     className="flex flex-col gap-4 text-gray-500"
                     variants={ChangeAddressVariants}
                     initial="inital"
                     animate="animate"
                     exit="exit"
                  >
                     {/* country */}
                     <div className="">
                        <div
                           onClick={() => setShowMoreCountry((prev) => !prev)}
                           className={`flex border-t border-l border-r p-3  cursor-pointer ${
                              showMoreCountry ? "rounded-t-md" : "rounded-md"
                           }`}
                        >
                           <p className="flex-1">{country}</p>
                           <span>
                              {showMoreCountry ? (
                                 <UpArrowSm />
                              ) : (
                                 <DownArrowSm />
                              )}
                           </span>
                        </div>

                        {showMoreCountry && (
                           <>
                              <div className="bg-gray-100 border px-3 py-4">
                                 <div className="border flex bg-white rounded-md">
                                    <input
                                       type="text"
                                       className="flex-1 bg-transparent outline-none p-2"
                                       onChange={(e) =>
                                          onChangeAction(
                                             e.target.value,
                                             setFiltedCountry,
                                             allCountries
                                          )
                                       }
                                    />
                                    <button className="bg-transparent px-3">
                                       <Search />
                                    </button>
                                 </div>
                              </div>
                              <ul className="border-l border-r border-b">
                                 {filtredCountry.map((p, i) => (
                                    <li
                                       key={i}
                                       onClick={() => {
                                          stateAction(
                                             p,
                                             setCountry,
                                             setShowMoreCountry
                                          );
                                       }}
                                       className=" p-3 cursor-pointer hover:bg-lightBlue hover:text-white hover:font-semibold"
                                    >
                                       {p}
                                    </li>
                                 ))}
                              </ul>
                           </>
                        )}
                     </div>

                     {/* District */}
                     <div>
                        <div
                           onClick={() => setShowMoreDistrict((prev) => !prev)}
                           className={`flex border-t border-l border-r p-3  cursor-pointer ${
                              showMoreDistrict ? "rounded-t-md" : "rounded-md"
                           }`}
                        >
                           <p className="flex-1">{district}</p>
                           <span>
                              {showMoreDistrict ? (
                                 <UpArrowSm />
                              ) : (
                                 <DownArrowSm />
                              )}
                           </span>
                        </div>

                        {showMoreDistrict && (
                           <>
                              <div className="bg-gray-100 border px-3 py-4">
                                 <div className="border flex bg-white rounded-md">
                                    <input
                                       type="text"
                                       className="flex-1 bg-transparent outline-none p-2"
                                       onChange={(e) => {
                                          onChangeAction(
                                             e.target.value,
                                             setFiltredDistrict,
                                             allDistricts
                                          );
                                          setDistrict(e.target.value);
                                       }}
                                    />
                                    <button className="bg-transparent px-3">
                                       <Search />
                                    </button>
                                 </div>
                              </div>
                              <ul className="border-l border-r border-b max-h-32 overflow-auto">
                                 {filtredDistrict.map((p, i) => (
                                    <li
                                       key={i}
                                       onClick={() =>
                                          stateAction(
                                             p,
                                             setDistrict,
                                             setShowMoreDistrict
                                          )
                                       }
                                       className=" p-3 cursor-pointer hover:bg-lightBlue hover:text-white hover:font-semibold"
                                    >
                                       {p}
                                    </li>
                                 ))}
                              </ul>
                           </>
                        )}
                     </div>

                     {/* Town / City */}
                     <div className="flex">
                        <input
                           onChange={(e) => setTownORCity(e.target.value)}
                           className=" border p-3  flex-1  rounded-md outline-none"
                           type="text "
                           placeholder="Town / City"
                        />
                     </div>

                     {/* Postcode / Zip */}
                     <div className="flex">
                        <input
                           onChange={(e) => setZip(e.target.value)}
                           className=" border p-3  flex-1  rounded-md outline-none"
                           type="text "
                           placeholder="Postcode / Zip"
                        />
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
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
                     className=" col-span-12 xl:col-span-6 bg-gray-800 p-2 rounded-lg text-sm font-semibold text-white shadow-sm mt-3"
                     onClick={() => setAdressStepComplete(false)}
                  >
                     PREVIOUS
                  </button>
                  <button
                     className="col-span-12 xl:col-span-6  bg-nevyBlue p-2 rounded-lg text-sm font-semibold text-white shadow-sm mt-3"
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
