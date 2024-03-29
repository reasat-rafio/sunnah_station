import { motion } from "framer-motion";
import { getSession, useSession } from "next-auth/react";
import { SignInAction } from "../../components/Authentication/Signin/SignInAction";
import { SigninSvg } from "../../components/Authentication/Signin/SignInSvg";

const signin = () => {
  return (
    <section className=" w-full bg-nevyBlue min-h-screen flex justify-center items-center">
      <>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          className="container w-full  bg-gray-50  rounded-lg grid grid-cols-12 "
        >
          <SignInAction />
          <SigninSvg />
        </motion.div>
      </>
    </section>
  );
};

export default signin;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  return { props: { session } };
}
