import { motion } from "framer-motion";
import { getSession, useSession } from "next-auth/client";
import { SignInAction } from "../../Components/Authentication/Signin/SignInAction";
import { SigninSvg } from "../../Components/Authentication/Signin/SignInSvg";

const signin = () => {
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

export async function getServerSideProps(ctx) {
   const session = await getSession(ctx);
   return { props: { session } };
}
