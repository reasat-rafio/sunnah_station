import Image from "next/image";
import { useEffect, useState } from "react";
import TextTruncate from "react-text-truncate";
import { useCtx } from "../../store";
import {
   minuTheQuantityOfTheExistingItem,
   plusTheQuantityOfTheExistingItem,
   removeFromCart,
} from "../../store/actions/CartAction";
import { MdCross } from "../../utils/svgs/Svg";

interface CartProductListProps {
   orderInfo: any;
}

export const ProductCheckoutList: React.FC<CartProductListProps> = ({
   orderInfo,
}) => {
   const {
      cartDispatch,
      cartState,
      cartState: { inCartProducts },
   } = useCtx();

   const [___subTotal, setSubTotal] = useState<number>(0);

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

   return (
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                                             plusTheQuantityOfTheExistingItem({
                                                id,
                                                quantity: 1,
                                             })
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
         <ul className="flex flex-col">
            <li className="flex">
               <p className="flex-1">Subtotal</p>
               <p>{___subTotal}</p>
            </li>
            <li className="flex">
               <p className="flex-1">Shipping</p>
               <p>{orderInfo.district == "Dhaka" ? 60 : 100}</p>
            </li>
            <li className="flex">
               <p className="flex-1">bKash Cashout Charges</p>
               <p>00 (Free)</p>
            </li>
            <li className="flex">
               <p className="flex-1">Total</p>
               <p>
                  {orderInfo.district == "Dhaka"
                     ? ___subTotal + 60
                     : ___subTotal + 100}
               </p>
            </li>
         </ul>
      </div>
   );
};
