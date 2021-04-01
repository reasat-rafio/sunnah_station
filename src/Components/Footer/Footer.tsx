import Link from "next/link";
import { useState } from "react";
import { WhatsApp } from "../../utils/svgs/Svg";
import { FacebookSvg } from "../Authentication/Register/_helper";

export const Footer = () => {
   const [year, setYear] = useState(new Date());

   return (
      <div className="relative mt-16  bg-nevyBlue  font-text">
         <svg
            className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-nevyBlue"
            preserveAspectRatio="none"
            viewBox="0 0 1440 54"
         >
            <path
               fill="currentColor"
               d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
            />
         </svg>
         <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
               <div className="md:max-w-md lg:col-span-2">
                  <Link href="/">
                     <a
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                     >
                        <img
                           className="min-w-24 w-28 "
                           src="https://res.cloudinary.com/dapjxqk64/image/upload/v1616398446/sunnah%20statoin/sunnah_station_png_hfs68x.png"
                           alt="sunnah station logo"
                        />
                     </a>
                  </Link>

                  <div className="mt-4 lg:max-w-sm">
                     <p className="text-sm text-gray-400">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam.
                     </p>
                     <p className="mt-4 text-sm text-gray-400 ">
                        Eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.
                     </p>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                  <div>
                     <p className="font-bold tracking-wide text-teal-accent-400 font-title text-lg text-gray-300">
                        HELP ZONE
                     </p>
                     <ul className="mt-2 space-y-2">
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              FAQ
                           </a>
                        </li>
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Creating Account
                           </a>
                        </li>
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Payment Guides
                           </a>
                        </li>
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Warranty Policy
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <p className="font-bold tracking-wide text-teal-accent-400 font-title text-lg text-gray-300">
                        CUSTOMER ZONE
                     </p>
                     <ul className="mt-2 space-y-2">
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Account
                           </a>
                        </li>
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Order List
                           </a>
                        </li>
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Account Details
                           </a>
                        </li>
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Feedback
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <p className="font-bold tracking-wide text-teal-accent-400 font-title text-lg text-gray-300">
                        QUICK LINKS
                     </p>
                     <ul className="mt-2 space-y-2">
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Create an Account
                           </a>
                        </li>
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              New Arrivals
                           </a>
                        </li>
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Best Selling
                           </a>
                        </li>
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Hot Deals
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <p className="font-bold tracking-wide text-teal-accent-400 font-title text-lg text-gray-300">
                        USEFUL LINKS
                     </p>
                     <ul className="mt-2 space-y-2">
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Terms & Conditions
                           </a>
                        </li>
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Returns & Refund
                           </a>
                        </li>
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              Contact Us
                           </a>
                        </li>
                        <li>
                           <a
                              href="/"
                              className="transition-colors duration-300 text-gray-400 hover:no-underline hover:text-lightBlue hover:text-teal-accent-400"
                           >
                              About Us
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
               <p className="text-sm text-gray-100">
                  © {year.getFullYear()} sunnahstation.com | All Rights
                  Reserved.
               </p>
               <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                  <a
                     href="/"
                     className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                  >
                     <svg
                        height="30"
                        width="30"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        aria-labelledby="title"
                        aria-describedby="desc"
                        role="img"
                     >
                        <title>Mail</title>
                        <desc>
                           A color styled icon from Orion Icon Library.
                        </desc>
                        <path
                           data-name="layer1"
                           fill="#fff4e3"
                           d="M2 12h60v40H2z"
                        ></path>
                        <path
                           data-name="opacity"
                           fill="#000064"
                           opacity=".14"
                           d="M2 12l30 27.4L62 12 29 47 5 18v34H2V12z"
                        ></path>
                        <path
                           data-name="stroke"
                           fill="none"
                           stroke="#2e4369"
                           strokeLinecap="round"
                           strokeMiterlimit="10"
                           strokeWidth="2"
                           d="M2 12l30 29 30-29M42 31.6L62 52M2 52l20-20.4"
                           strokeLinejoin="round"
                        ></path>
                        <path
                           data-name="stroke"
                           fill="none"
                           stroke="#2e4369"
                           strokeLinecap="round"
                           strokeMiterlimit="10"
                           strokeWidth="2"
                           d="M2 12h60v40H2z"
                           strokeLinejoin="round"
                        ></path>
                     </svg>
                  </a>
                  <a
                     href="/"
                     className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                  >
                     <WhatsApp />
                  </a>
                  <a
                     href="/"
                     className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                  >
                     <FacebookSvg />
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};
