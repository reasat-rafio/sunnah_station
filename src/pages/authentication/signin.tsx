import { motion } from "framer-motion";
import { SignInAction } from "../../Components/Authentication/Signin/SignInAction";
import { SigninSvg } from "../../Components/Authentication/Signin/SignInSvg";
import { getSession } from "next-auth/client";

const signin = ({ session }) => {
   return (
      <div className=" w-full bg-nevyBlue min-h-screen flex justify-center items-center">
         <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            className="container w-full  bg-gray-50  rounded-lg grid grid-cols-12 "
         >
            <SignInAction />
            <SigninSvg />
         </motion.div>
      </div>
   );
};

export default signin;

export const getServerSideProps = async ({ req }) => {
   const session = await getSession({ req });
   return {
      props: {
         session,
      },
   };
};
