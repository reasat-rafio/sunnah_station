import axios from "axios";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCtx } from "../../store";
import {
   minuTheQuantityOfTheExistingItem,
   plusTheQuantityOfTheExistingItem,
   removeFromCart,
   resetCart,
} from "../../store/actions/CartAction";
import { loadingEnd } from "../../store/actions/domAction";
import { MdCross } from "../../utils/svgs/Svg";
import { Notify } from "../../utils/Toast";
import { BkashPeyment } from "./BkashPeyment";
import moment from "moment";

interface CartProductListProps {
   orderInfo: any;
   setOrderConfirmComplete: any;
   orderConfrimComplete: any;
   setOrderPaymentStepComplete: any;
}

export const ProductCheckoutList: React.FC<CartProductListProps> = ({
   orderInfo,
   setOrderConfirmComplete,
   orderConfrimComplete,
   setOrderPaymentStepComplete,
}) => {
   const {
      userState: { user },
      cartDispatch,
      cartState,
      domDispatch,
      cartState: { inCartProducts },
   } = useCtx();

   // getting the current date
   const [time, setTime] = useState(new Date());

   // Total subtotal
   const [___subTotal, setSubTotal] = useState<number>(0);

   // Transaction ID
   const [transactionId, setTransactionId] = useState<string>("");

   // Payment method
   const [cashOnDelivery, setCashOnDelivery] = useState<boolean>(true);
   const [BikashPayment, setBikahsPeyment] = useState<boolean>(false);

   // Agree with the terms and condition and more
   const [agree, setAgree] = useState<boolean>(false);

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

   // Order submit action
   const orderSubmitAction = async () => {
      // Finding the user
      const loggedInUser: any = await axios.get(
         `${process.env.NEXT_PUBLIC_API_URL}/users/${user[0].user.id}`
      );
      console.log("asdasd", loggedInUser);

      orderInfo.peyment_method = cashOnDelivery ? "cash on devivery" : "bkash";
      if (BikashPayment) {
         orderInfo.transaction_id = transactionId;
         if (transactionId.length < 1) {
            Notify("error", "please fill the transaction id");
            return;
         }
      }

      const {
         additional_info,
         email_address,
         first_name,
         last_name,
         phone,
         street_address,
         town_city,
         district,
         peyment_method,
         transaction_id,
      } = orderInfo;
      // Submitin the order

      const { data } = await axios.post(
         `${process.env.NEXT_PUBLIC_API_URL}/orders`,
         {
            name: `${first_name} ${last_name}`,
            email_address,
            phone_number: phone,
            district,
            street_address,
            town_city,
            total_price:
               orderInfo.district == "Dhaka"
                  ? ___subTotal + 60
                  : ___subTotal + 100,
            additional_info,
            ordered_products: inCartProducts.map(
               ({ name, price, quantity, id, subtotal }) => [
                  { name, price, quantity, id, subtotal },
               ]
            ),
            peyment_method,
            transaction_id,
            delivery_complete: false,
            order_placed_at: moment(time).format("MMMM Do YYYY, h:mm:ss a"),
         }
      );

      const userOrderHistory = [data];
      console.log("asd", loggedInUser.data);

      // updating the users
      try {
         const updatedUserOrderHistory = [
            ...userOrderHistory,
            loggedInUser.data.order_history[0],
         ];

         await axios.put(
            `${process.env.NEXT_PUBLIC_API_URL}/users/${user[0].user.id}`,
            { order_history: updatedUserOrderHistory }
         );
      } catch (error) {
         console.log(error);
      }

      setOrderPaymentStepComplete(true);
      setOrderConfirmComplete(data);
      cartDispatch(resetCart());
      domDispatch(loadingEnd());
   };

   return (
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
         {inCartProducts && inCartProducts.length > 0 && (
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg flex  justify-center items-center">
               <table className="divide-y divide-gray-200 table-fixed w-full">
                  <thead className="bg-gray-50">
                     <tr>
                        <th
                           scope="col"
                           className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-7/12"
                        >
                           PRODUCT
                        </th>
                        <th
                           scope="col"
                           className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider  w-2/12"
                        >
                           PRICE
                        </th>
                        <th
                           scope="col"
                           className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"
                        >
                           QUANTITY
                        </th>
                        <th
                           scope="col"
                           className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider  w-2/12"
                        >
                           SUBTOTAL
                        </th>
                     </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                     {inCartProducts.map(
                        (
                           { name, img, price, quantity, id, subtotal },
                           i: number
                        ) => (
                           <tr key={i}>
                              <td className="px-1 py-4 ">
                                 <div className="flex items-center">
                                    <div className="ml-4">
                                       <div
                                          className="text-sm text-gray-500 "
                                          onClick={() =>
                                             cartDispatch(removeFromCart(id))
                                          }
                                       >
                                          <MdCross />
                                       </div>
                                    </div>
                                    <div className="flex-shrink-0 h-10 w-10">
                                       <Image
                                          className="h-10 w-10 rounded-full"
                                          layout="responsive"
                                          height="1"
                                          width="1"
                                          src={img[0].url || img}
                                          alt={name}
                                       />
                                    </div>
                                    <p className="text-sm text-gray-500 ml-1">
                                       {name}
                                    </p>
                                 </div>
                              </td>
                              <td className="px-1 py-4 whitespace-nowrap">
                                 <div className="text-sm text-gray-900">
                                    ৳ {price}
                                 </div>
                              </td>
                              <td className="px-1 py-4 whitespace-nowrap">
                                 <span className="px-2 inline-flex text-xs leading-5 font-semibold 0 text-green-800">
                                    <div className="flex justify-center items-center">
                                       <button
                                          className="py-3 px-2 border rounded-l-md transition-all duration-150 hover:bg-lightBlue outline-none"
                                          onClick={() => {
                                             if (quantity > 1) {
                                                cartDispatch(
                                                   minuTheQuantityOfTheExistingItem(
                                                      { id, quantity: 1 }
                                                   )
                                                );
                                             }
                                          }}
                                       >
                                          -
                                       </button>
                                       <span className="py-3 px-2 border-t border-b">
                                          {/* {productQuantity} */} {quantity}
                                       </span>
                                       <button
                                          className="py-3 px-2 border rounded-r-md hover:bg-lightBlue transition-all duration-150 outline-none"
                                          onClick={() =>
                                             cartDispatch(
                                                plusTheQuantityOfTheExistingItem(
                                                   {
                                                      id,
                                                      quantity: 1,
                                                   }
                                                )
                                             )
                                          }
                                       >
                                          +
                                       </button>
                                    </div>
                                 </span>
                              </td>
                              <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
                                 ৳ {subtotal}
                              </td>
                           </tr>
                        )
                     )}
                  </tbody>
               </table>
            </div>
         )}

         <ul className="flex flex-col divide-y-2">
            <li className="flex p-3">
               <p className="flex-1">Subtotal</p>
               <p>{___subTotal}</p>
            </li>

            <li className="flex  p-3">
               <p className="flex-1">Delivery</p>
               <p>{orderInfo.district == "Dhaka" ? 60 : 100}</p>
            </li>

            <li className="flex  p-3">
               <p className="flex-1">bKash Cashout Charges</p>
               <p>00 (Free)</p>
            </li>

            <li className="flex  p-3">
               <p className="flex-1">Total</p>
               <p>
                  {orderInfo.district == "Dhaka"
                     ? ___subTotal + 60
                     : ___subTotal + 100}
               </p>
            </li>
         </ul>

         <div className="flex flex-col justify-start">
            {/* Cash on Delivery */}
            <label className="inline-flex items-center mt-3">
               <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-lightBlue"
                  onChange={() => {
                     setCashOnDelivery((prev) => !prev);
                     if (BikashPayment) {
                        setBikahsPeyment(false);
                     }
                  }}
                  checked={cashOnDelivery ? true : false}
               />
               <span className="ml-2 text-gray-700 flex  items-center gap-2">
                  Cash On Delivery
               </span>
            </label>

            {/* Bkash send money */}
            <label className="inline-flex items-center mt-3  i">
               <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-lightBlue"
                  onChange={() => {
                     setBikahsPeyment((prev) => !prev);
                     if (cashOnDelivery) {
                        setCashOnDelivery(false);
                     }
                  }}
                  checked={BikashPayment ? true : false}
               />
               <span className="ml-2 text-gray-700 flex  items-center gap-2">
                  bKash (Send Money)
                  <Image
                     src="https://res.cloudinary.com/dapjxqk64/image/upload/v1617776652/sunnah%20statoin/bkash-1-1_njtt3i.png"
                     alt="bikash logo"
                     layout="intrinsic"
                     height="20"
                     width="20"
                  />
               </span>
            </label>
            <AnimatePresence>
               {BikashPayment && (
                  <BkashPeyment setTransactionId={setTransactionId} />
               )}
            </AnimatePresence>
         </div>

         <div className="flex my-5">
            <label className="flex items-center">
               <input
                  type="checkbox"
                  className="form-checkbox "
                  onChange={() => setAgree((prev) => !prev)}
               />
               <span className="ml-2">
                  I have read and agree to the website
                  <Link href="/">
                     <a> terms and conditions</a>
                  </Link>
                  ,
                  <Link href="">
                     <a> privacy policy</a>
                  </Link>
                  ,
                  <Link href="/">
                     <a> returns & refunds</a>
                  </Link>
                  <span className="text-red-500">*</span>
               </span>
            </label>
         </div>

         <div className="grid grid-cols-12 border-t py-3 gap-3">
            <ul className=" col-span-12 md:col-span-6">
               <li>
                  ⚠ Delivery time: 24-48 hours inside Dhaka, outside it takes
                  2-3 days depending on courier services.
               </li>
               <li>⚠ Pay via bkash, Rocket to get priority base delivery.</li>
               <li>
                  ⚠ Urgent, emergency delivery not available. Please do not
                  submit that type of request.
               </li>
            </ul>
            <div className="flex col-span-12 md:col-span-6 text-white font-title font-semibold items-center justify-end gap-3">
               <button className="bg-gray-700 py-3 px-5 rounded">
                  PREVIOUS
               </button>
               <button
                  className={`bg-lightBlue  py-3 px-5 rounded ${
                     !agree && "cursor-not-allowed"
                  }`}
                  disabled={agree ? false : true}
                  onClick={() => {
                     if (inCartProducts.length > 0) {
                        orderSubmitAction();
                     } else {
                        Notify("error", "Cart is empty");
                     }
                  }}
               >
                  CONFIRM ORDER
               </button>
            </div>
         </div>
      </div>
   );
};
