import { motion } from "framer-motion";
import { RegisterAction } from "../../components/Authentication/Register/RegisterAction";
import { RegisterSvg } from "../../components/Authentication/Register/RegisterSvg";
import { getSession } from "next-auth/client";

const register = () => {
  return (
    <section className=" w-full bg-nevyBlue min-h-screen flex justify-center items-center">
      <>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          className="container w-full  bg-gray-50  rounded-lg grid grid-cols-12 "
        >
          <RegisterAction />
          <RegisterSvg />
        </motion.div>
      </>
    </section>
  );
};

export default register;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  return { props: { session } };
}
