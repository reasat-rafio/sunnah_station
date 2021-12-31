import Link from "next/link";
import React from "react";
import { leftSideUtilities } from "./_helpers";

interface UtilityNavigationProps {}

type leftSideUtilitiesTypes = {
   name: string;
   link: string;
   icon?: any;
};

export const UtilityNavigation: React.FC<UtilityNavigationProps> = ({}) => {
   return (
      <nav className=" w-full bg-lightBlue  lg:block text-xs hidden ">
         <ul className="container  m-auto flex justify-between items-center font-title text-lightest_gray">
            <div className="flex divide-x">
               {leftSideUtilities.map(
                  ({ name, link, icon }: leftSideUtilitiesTypes, i: number) => (
                     <li className="" key={i}>
                        {link ? (
                           <Link href={link}>
                              <a className="flex p-2 hover:text-nevyBlue transition-colors duration-150">
                                 {icon && <span>{icon}</span>} {name}
                              </a>
                           </Link>
                        ) : (
                           <p className="flex p-2 hover:text-nevyBlue transition-colors duration-150">
                              {icon && <span>{icon}</span>} {name}
                           </p>
                        )}
                     </li>
                  )
               )}
            </div>
            <div className="flex divide-x ">
               <li className="hover:text-nevyBlue transition-colors duration-150">
                  <p className="p-2">WELCOME TO SUNNAH STATION</p>
               </li>
               <li
                  className="hover:text-nevyBlue transition-colors duration-150"
                  // onClick={() => router.push("/customer/account/auth")}
               >
                  <button className="p-2">LOGIN / REGISTER</button>
               </li>
            </div>
         </ul>
      </nav>
   );
};
