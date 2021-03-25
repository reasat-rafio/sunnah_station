import { motion } from "framer-motion";
import { SignInAction } from "../../Components/Authentication/Signin/SignInAction";
import { RegisterSvg } from "../../Components/Authentication/Register/RegisterSvg";

const register = () => {
   return (
      <div className="w-full bg-nevyBlue h-screen py-20 flex justify-center items-center">
         <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            className="container w-full  bg-gray-50  rounded-lg grid grid-cols-12 "
         >
            <SignInAction />
            <RegisterSvg />
         </motion.div>
      </div>
   );
};

export default register;
