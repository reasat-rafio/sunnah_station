import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkoutschema } from "../../utils/yupSchema";
import { UpArrow } from "../../utils/svgs/Svg";
import { useState } from "react";
import { subDistrict } from "../CartPage/CartTotal/_Data";
import { useFilterByInput } from "../../utils/hooks/useFilterByInput";
import { UpArrowSm, DownArrowSm, Search } from "../../utils/svgs/Svg";
import Link from "next/link";

interface CheckoutFormProps {
   orderInfo: any;
   setAdressStepComplete: any;
   setOrderInfo: any;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
   setAdressStepComplete,
   setOrderInfo,
   orderInfo,
}) => {
   // Setting up Yup as useFrom resolver
   const { handleSubmit, register, errors } = useForm({
      mode: "onBlur",
      resolver: yupResolver(Checkoutschema),
   });

   // FILTERING DISTRICT STATE
   const [showMoreDistrict, setShowMoreDistrict] = useState<boolean>(false);
   const [district, setDistrict] = useState<string>("Dhaka");
   const [allDistricts, setAllDistricts] = useState(subDistrict);
   const [filtredDistrict, setFiltredDistrict] = useState(subDistrict);

   // Form Submit action
   const onSubmitAction = (data) => {
      setAdressStepComplete(true);
      data.district = district;
      setOrderInfo(data);
   };

   //  Input onChange Action
   const onChangeAction = (value, setState, state) => {
      const { filteredItme } = useFilterByInput(state, value);
      setState(filteredItme);
   };

   // SETTING THE INPUT STATE ACTION
   const stateAction = (value: string, setState: any, hideState: any) => {
      setState(value);
      hideState(false);
   };

   return (
      <div className="w-full ">
         <form
            className="flex gap-3 font-nav container text-sm flex-col  mx-auto px-5"
            onSubmit={handleSubmit(onSubmitAction)}
         >
            {/* First name && last name */}
            <div className="grid grid-cols-12 w-full lg:gap-5">
               <div className="col-span-12 lg:col-span-6 ">
                  <span className="flex gap-1 py-2">
                     <p className=""> First Name </p>
                     <span className="text-red-600">*</span>
                  </span>

                  <input
                     type="text"
                     className={`input w-full ${
                        errors.first_name && "border-red-600"
                     }`}
                     name="first_name"
                     ref={register}
                  />
                  {errors.first_name && (
                     <span className="text-xs text-red-600 my-0 flex py-2 items-center">
                        <UpArrow /> {errors.first_name.message}
                     </span>
                  )}
               </div>
               {/* ----- */}
               <div className="col-span-12 lg:col-span-6">
                  <span className="flex gap-1 py-2">
                     <p className="">Last Name </p>
                     <span className="text-red-600">*</span>
                  </span>
                  <input
                     className={`input w-full ${
                        errors.first_name && "border-red-600"
                     }`}
                     type="text"
                     name="last_name"
                     ref={register}
                  />
                  {errors.last_name && (
                     <span className="text-xs text-red-600 my-0 flex py-2 items-center">
                        <UpArrow /> {errors.last_name.message}
                     </span>
                  )}
               </div>
               {/* ----- */}
            </div>
            {/* ----- */}

            {/* district */}
            <div>
               <span className="flex gap-1 py-2">
                  <p className="">District</p>
                  <span className="text-red-600">*</span>
               </span>
               <div
                  onClick={() => setShowMoreDistrict((prev) => !prev)}
                  className={`flex border-t border-l border-r p-3  cursor-pointer ${
                     showMoreDistrict ? "rounded-t-md" : "rounded-md"
                  }`}
               >
                  <p className="flex-1">{district}</p>
                  <span>
                     {showMoreDistrict ? <UpArrowSm /> : <DownArrowSm />}
                  </span>
               </div>

               {showMoreDistrict && (
                  <>
                     <div className="bg-gray-100 border px-3 py-4">
                        <div className="border flex bg-white rounded-md">
                           <input
                              type="text"
                              className="flex-1 bg-transparent outline-none p-2"
                              onChange={(e) =>
                                 onChangeAction(
                                    e.target.value,
                                    setFiltredDistrict,
                                    allDistricts
                                 )
                              }
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

            {/* Town / city */}

            <div>
               <span className="flex gap-1 py-2">
                  <p className="">Town / City</p>
                  <span className="text-red-600">*</span>
               </span>

               <input
                  type="text"
                  className={`input w-full  ${
                     errors.town_city && "border-red-600 "
                  }`}
                  name="town_city"
                  ref={register}
               />
               {errors.town_city && (
                  <span className="text-xs text-red-600 my-0 flex py-2 items-center">
                     <UpArrow /> {errors.town_city.message}
                  </span>
               )}
            </div>

            {/* Street address */}
            <div>
               <span className="flex gap-1 py-2">
                  <p className="">Street address </p>
                  <span className="text-red-600">*</span>
               </span>

               <input
                  type="text"
                  className={`input w-full ${
                     errors.street_address && "border-red-600"
                  }`}
                  name="street_address"
                  ref={register}
               />
               {errors.street_address && (
                  <span className="text-xs text-red-600 my-0 flex py-2 items-center">
                     <UpArrow /> {errors.street_address.message}
                  </span>
               )}
            </div>

            {/* phone */}
            <div>
               <span className="flex gap-1 py-2">
                  <p className="">Phone</p>
                  <span className="text-red-600">*</span>
               </span>

               <input
                  type="text"
                  className={`input w-full  ${
                     errors.phone && "border-red-600 "
                  }`}
                  name="phone"
                  ref={register}
               />
               {errors.phone && (
                  <span className="text-xs text-red-600 my-0 flex py-2 items-center">
                     <UpArrow /> {errors.phone.message}
                  </span>
               )}
            </div>

            {/* Email Address */}
            <div>
               <span className="flex gap-1 py-2">
                  <p className="">Email address</p>
               </span>

               <input
                  type="text"
                  className={`input w-full  ${
                     errors.email_address && "border-red-600 "
                  }`}
                  name="email_address"
                  ref={register}
               />
               {errors.email_address && (
                  <span className="text-xs text-red-600 my-0 flex py-2 items-center">
                     <UpArrow /> {errors.email_address.message}
                  </span>
               )}
            </div>

            {/* Additional information */}
            <div className="py-6 border-t border-b">
               <p>Additional information (optional)</p>

               <textarea
                  name="additional_info"
                  ref={register}
                  className={`input w-full  ${
                     errors.additional_info && "border-red-600 "
                  }`}
               ></textarea>
               {errors.additional_info && (
                  <span className="text-xs text-red-600 my-0 flex py-2 items-center">
                     <UpArrow /> {errors.additional_info.message}
                  </span>
               )}
            </div>

            <div className="grid grid-cols-12 items-center gap-4 py-3">
               <span className="col-span-12 lg:col-span-6">
                  <p>
                     ⚠ Read your information again and make sure its correct.{" "}
                  </p>
                  <p>
                     ⚠ Delivery time: 24-48 hours inside Dhaka, outside it takes
                     2-3 days depending on courier services.{" "}
                  </p>
                  <p>
                     ⚠ If urgent delivery is needed then{" "}
                     <Link href="/contact-us">
                        <a>connect </a>
                     </Link>{" "}
                     with us.
                  </p>
               </span>
               <span className="col-span-12 lg:col-span-6 flex">
                  <button
                     type="submit"
                     className="bg-nevyBlue m-auto text-white px-4 py-2 rounded-sm lg:w-auto  w-full"
                  >
                     NEXT
                  </button>
               </span>
            </div>
         </form>
      </div>
   );
};
