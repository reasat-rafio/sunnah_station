import { RegisterAction } from "../../Components/Authentication/Register/RegisterAction";
import { RegisterSvg } from "../../Components/Authentication/Register/RegisterSvg";

const register = () => {
   return (
      <div className="w-full bg-nevyBlue h-screen py-20 flex justify-center items-center">
         <div className="container w-full  bg-gray-50  rounded-lg grid grid-cols-12 ">
            <RegisterAction />
            <RegisterSvg />
         </div>
      </div>
   );
};

export default register;
