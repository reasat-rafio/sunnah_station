import { motion } from "framer-motion";
import { RegisterAction } from "../../Components/Authentication/Register/RegisterAction";
import { RegisterSvg } from "../../Components/Authentication/Register/RegisterSvg";

const register = () => {
   return (
      <div className=" w-full bg-nevyBlue min-h-screen flex justify-center items-center">
         <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            className="container w-full  bg-gray-50  rounded-lg grid grid-cols-12 "
         >
            <RegisterAction />
            <RegisterSvg />
         </motion.div>
      </div>
   );
};

export default register;
