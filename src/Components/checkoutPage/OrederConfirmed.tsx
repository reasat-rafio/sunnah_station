import Lottie from "react-lottie";
import * as orderDoneAnimation from "./svg/23821-delivery-loader-animation.json";
import Link from "next/link";
import moment from "moment";
import { useCtx } from "../../store";
moment().format("MMM Do YY");

interface OrederConfirmedProps {
   orderConfrimComplete: any;
}

const orderRecivedAnimation: any = orderDoneAnimation;

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: orderRecivedAnimation.default,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
   },
};

export const OrederConfirmed: React.FC<OrederConfirmedProps> = ({
   orderConfrimComplete: {
      id,
      additional_info,
      createdAt,
      peyment_method,
      total_price,
   },
}) => {
   return (
      <div className="w-full">
         <div className="container mx-auto font-text px-2 ">
            <div>
               <h2 className="text-lightBlue font-semibold flex justify-center items-center py-6 border-dashed  border-4 mt-10 border-lightBlue text-xl font-title">
                  Thank you. Your order has been received
               </h2>
               <Lottie
                  options={defaultOptions}
                  height={"100%"}
                  width={"100%"}
               />
            </div>

            <p className="text-sm my-2">
               Thank you for your order. We will check and give you update as
               soon as possible. For any information call us at +019121212 or
               email us at sunnah.station.bd@gmail.com
            </p>

            <div className="my-10 text-black">
               <h4 className="text-xl font-semibold">ORDER DETAILS</h4>
               <ul className="flex flex-col divide-y-2">
                  <li className="flex p-3">
                     <p className="flex-1 font-medium text-lg">PRODUCT</p>
                     <p className=" font-medium text-lg">TOTAL</p>
                  </li>

                  <li className="flex p-3">
                     <p className="flex-1">Order Id</p>
                     <p>{id}</p>
                  </li>
                  <li className="flex p-3">
                     <p className="flex-1">Date</p>
                     <p>{moment(createdAt).format("MMMM Do YYYY")}</p>
                  </li>
                  <li className="flex p-3">
                     <p className="flex-1">Payment method</p>
                     <p>{peyment_method}</p>
                  </li>

                  <li className="flex p-3">
                     <p className="flex-1">Total</p>
                     <p>{total_price}</p>
                  </li>
                  <li className="flex p-3">
                     <p className="flex-1">Note:</p>
                     <p>{additional_info}</p>
                  </li>
               </ul>
            </div>
            <div className="flex justify-center items-center gap-3 text-white ">
               <Link href="/">
                  <button className="bg-gray-700 py-3 px-5 rounded">
                     RETURN TO HOME
                  </button>
               </Link>
               <Link href="/shop">
                  <button className="bg-lightBlue  py-3 px-5 rounded">
                     SHOP MORE
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};
