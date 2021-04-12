import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { UpArrow } from "../../../utils/svgs/Svg";
import { Notify } from "../../../utils/Toast";
import { NewsletterSchema } from "../../../utils/yupSchema";
import { NewsLettterIcon } from "./_Data";

interface NewsletterProps {}

export const Newsletter: React.FC<NewsletterProps> = ({}) => {
   // Setting up Yup as useFrom resolver
   const { handleSubmit, register, errors } = useForm({
      mode: "onBlur",
      resolver: yupResolver(NewsletterSchema),
   });

   // Form Submit action
   const onSubmitAction = async (data) => {
      const { email } = data;
      try {
         await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/newsletters`, {
            email: email,
         });
         Notify("info", "Thank you for subscribe");
      } catch (error) {
         Notify(
            "error",
            `${error.response.data.message[0].messages[0].message}`
         );
      }
   };

   return (
      <section className="w-full my-5">
         <div className="bg-nevyBlue relative container mx-auto rounded-lg">
            <div className="ax-w-screen-xl mx-auto py-20 lg:py-24">
               <div className="flex items-center justify-center flex-col lg:flex-row px-8">
                  <div className="flex items-center flex-col sm:flex-row">
                     <NewsLettterIcon />
                     <div className="sm:ml-6 mt-6 sm:mt-0`">
                        <h2 className="text-gray-100 sm:text-left leading-none text-4xl sm:text-5xl font-black tracking-wide text-center">
                           Newsletter
                        </h2>
                        <p className="text-gray-500 font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left">
                           Subscribe now to get our latest update.
                        </p>
                     </div>
                  </div>

                  <div className="mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto">
                     <form
                        className="text-sm max-w-sm sm:max-w-none mx-auto"
                        onSubmit={handleSubmit(onSubmitAction)}
                     >
                        <input
                           ref={register}
                           type="email"
                           name="email"
                           className="w-full sm:w-auto block sm:inline-block px-6 py-4 rounded bg-secondary-600 tracking-wider font-bold border border-secondary-600 focus:border-secondary-300 focus:outline-none sm:rounded-r-none hover:bg-secondary-500 transition duration-300 text-gray-200"
                        />
                        {/* {errors.email && (
                           <span className="text-xs text-red-600 my-0 flex py-2 items-center">
                              <UpArrow /> {errors.email.message}
                           </span>
                        )} */}
                        <button
                           type="submit"
                           className="w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-lightBlue  hocus:bg-green-700 hocus:text-gray-300 border border-lightBlue hocus:border-green-700 px-8  font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300"
                        >
                           Subscribe Now
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
