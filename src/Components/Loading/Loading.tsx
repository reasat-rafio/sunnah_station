import React from "react";
import Lottie from "react-lottie";
import { useCtx } from "../../store";
import * as loading from "./9844-loading-40-paperplane.json";

interface LoadingProps {}

const loadinganimation: any = loading;

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: loadinganimation.default,
   rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
   },
};

export const Loading: React.FC<LoadingProps> = ({}) => {
   const {
      domState: { isLoading },
   } = useCtx();

   return (
      <div className="">
         <div
            className={`fixed h-full w-full right-0 top-0 left-0 bottom-0  transition-all duration-300 ${
               isLoading ? " z-50  block " : " z-0 hidden "
            }`}
            style={{ background: "rgba(0, 0, 0, 0.7)" }}
         ></div>

         {isLoading && (
            <div className="fixed w-full  inset-0    justify-center items-center  z-50 flex">
               <button disabled className="cursor-not-allowed">
                  <Lottie options={defaultOptions} height={150} width={150} />
               </button>
            </div>
         )}
      </div>
   );
};
