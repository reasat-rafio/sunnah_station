import React from "react";
import { PenPaperSvg, TakaSvg } from "../../utils/svgs/Svg";

interface StepBarProps {
   adressStepComplete: boolean;
   orderPaymentStepComplete: boolean;
}

export const StepBar: React.FC<StepBarProps> = ({
   adressStepComplete,
   orderPaymentStepComplete,
}) => {
   return (
      <>
         <div className="w-full py-6 shadow-md my-3">
            <div className="flex">
               <div className="w-1/3">
                  <div className="relative mb-2">
                     <div className="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center">
                        <span className="text-center text-white w-full">
                           <PenPaperSvg />
                        </span>
                     </div>
                  </div>

                  <div className="text-xs text-center md:text-base">
                     YOUR ADDRESS
                  </div>
               </div>

               <div className="w-1/3">
                  <div className="relative mb-2">
                     <div
                        className="absolute flex align-center items-center align-middle content-center"
                        style={{
                           width: "calc(100% - 2.5rem - 1rem)",
                           top: "50%",
                           transform: "translate(-50%, -50%)",
                        }}
                     >
                        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                           <div
                              className="w-0 bg-green-300 py-1 rounded"
                              style={{
                                 width: `${adressStepComplete && "100%"}`,
                              }}
                           ></div>
                        </div>
                     </div>

                     <div
                        className={`w-10 h-10 mx-auto ${
                           adressStepComplete
                              ? "bg-green-500 text-white "
                              : "bg-white text-gray-600 border-gray-200  border-2 "
                        } rounded-full text-lg  flex items-center `}
                     >
                        <span className="text-center  w-full">
                           <TakaSvg />
                        </span>
                     </div>
                  </div>

                  <div className="text-xs text-center md:text-base">
                     ORDER & PAYMENT
                  </div>
               </div>

               <div className="w-1/3">
                  <div className="relative mb-2">
                     <div
                        className="absolute flex align-center items-center align-middle content-center"
                        style={{
                           width: "calc(100% - 2.5rem - 1rem)",
                           top: "50%",
                           transform: "translate(-50%, -50%)",
                        }}
                     >
                        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                           <div
                              className="w-0 bg-green-300 py-1 rounded"
                              style={{
                                 width: `${orderPaymentStepComplete && "100%"}`,
                              }}
                           ></div>
                        </div>
                     </div>

                     <div
                        className={`w-10 h-10 mx-auto  rounded-full text-lg  flex items-center ${
                           orderPaymentStepComplete
                              ? "bg-green-500 text-white "
                              : "bg-white text-gray-600 border-gray-200  border-2 "
                        }}`}
                     >
                        <span className="text-center w-full">
                           <svg
                              className="w-full fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                           >
                              <path
                                 className="heroicon-ui"
                                 d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                              />
                           </svg>
                        </span>
                     </div>
                  </div>
                  <div className="text-xs text-center md:text-base">DONE</div>
               </div>
            </div>
         </div>
      </>
   );
};
