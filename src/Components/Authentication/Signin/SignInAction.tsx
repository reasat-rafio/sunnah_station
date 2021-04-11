import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FacebookSvg, SignInSvg } from "../Register/_helper";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useCtx } from "../../../store";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../../utils/yupSchema";
import axios from "axios";
import { loginUserAction } from "../../../store/actions/userAction";
import { Notify } from "../../../utils/Toast";
import { loadingEnd, loadingstart } from "../../../store/actions/domAction";

interface SignInActionProps {}

interface onSubmitInterface {
   identifier: string;
   password: string;
}

export const SignInAction: React.FC<SignInActionProps> = () => {
   // router
   const router = useRouter();

   const [session, loading] = useSession();

   // store
   const { userState, userDispatch, domDispatch } = useCtx();

   //   setting up yup as useForm resolver
   const { handleSubmit, register, errors } = useForm({
      mode: "onBlur",
      resolver: yupResolver(LoginSchema),
   });

   const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/local`;

   // state for agring with the terms and policy
   const [agree, setAgree] = useState<boolean>(false);

   // this will change the button Disable for signup
   // const buttonRef = useRef<HTMLButtonElement>(null);

   // useEffect(() => {
   //    if (agree) {
   //       buttonRef.current.disabled = false;
   //    } else {
   //       buttonRef.current.disabled = true;
   //    }
   // }, [agree]);

   // form on submit
   const onSubmitAction = async ({
      identifier,
      password,
   }: onSubmitInterface) => {
      if (!agree) {
         Notify(
            "error",
            "You have to agree with our Terms and policy to sign in"
         );
      } else {
         domDispatch(loadingstart());
         try {
            const { data } = await axios.post(URL, {
               identifier,
               password,
            });

            Notify("info", `Assalamu Alaikum ${data.user.username} `);

            userDispatch(loginUserAction(data));
            domDispatch(loadingEnd());
            router.push("/");
         } catch (error) {
            Notify(
               "error",
               `${error.response.data.message[0].messages[0].message}`
            );
         }
      }
   };

   useEffect(() => {
      if (session) {
         userDispatch(loginUserAction(session.user));
      }
   }, [session]);

   return (
      <div className="lg:col-span-6 col-span-12 col-s xl:col-span-5 lg:px-14 px-4  py-5 ">
         <Link href="/">
            <div className="w-20 mx-auto cursor-pointer">
               <Image
                  src="https://res.cloudinary.com/dapjxqk64/image/upload/v1616298950/sunnah%20statoin/sunnah_station_rzv7ld.png"
                  layout="responsive"
                  height="1"
                  width="1"
                  alt="sunnah station logo"
               />
            </div>
         </Link>
         {session && <div>{session.user.name}</div>}
         <h2 className="text-center text-smTitle md:text-3xl font-bold font-title py-5">
            Sign In To Sunnah Station
         </h2>
         <div
            className="flex flex-col gap-3 my-4 
         "
         >
            {/* <Link href="/api/auth/signin/google"> */}
            <button
               className="border bg-gray-Plo100 hover:bg-gray-200 transition-colors p-3 rounded-md  flex justify-center items-center gap-3 font-text font-semibold"
               onClick={(e) => {
                  signIn("google");
               }}
            >
               <Image
                  className=""
                  src="https://res.cloudinary.com/dapjxqk64/image/upload/v1616603353/sunnah%20statoin/google-icon_zaw3zq.png"
                  layout="intrinsic"
                  height="30"
                  width="30"
               />
               <span> Sign In With Google</span>
            </button>
            {/* </Link> */}

            <button
               className="border bg-gray-100 hover:bg-gray-200 transition-colors p-3 rounded-md  flex justify-center items-center gap-3 font-text font-semibold "
               onClick={(e) => {
                  signIn("facebook");
               }}
            >
               <FacebookSvg /> <span className="">Sign In with Facebook</span>
            </button>
         </div>

         <div className="divide-solid flex justify-center items-center gap-2 my-12">
            <span className="bg-gray-200 flex-1  h-0.5"></span>
            <h2 className="flex-3 font-text  text-gray-500 text-sm">
               Or Sign in With your e-mail
            </h2>
            <span className="bg-gray-200 flex-1  h-0.5"></span>
         </div>

         <form
            className="flex flex-col gap-3 "
            onSubmit={handleSubmit(onSubmitAction)}
         >
            <div className="flex flex-col mb-2 ">
               <div className="flex relative ">
                  <span className="rounded-l-md inline-flex  items-center p-4 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                     <svg
                        width="15"
                        height="15"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                     </svg>
                  </span>
                  <input
                     type="text"
                     id="sign-in-email"
                     className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 p-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                     placeholder="Your email"
                     name="identifier"
                     ref={register}
                  />
               </div>
               {errors.identifier && (
                  <span className="text-xs text-red-600 my-0">
                     {errors.identifier.message}
                  </span>
               )}
            </div>
            <div className="flex flex-col mb-6">
               <div className="flex relative ">
                  <span className="rounded-l-md inline-flex  items-center  border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm p-4">
                     <svg
                        width="15"
                        height="15"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                     </svg>
                  </span>
                  <input
                     type="password"
                     id="sign-in-email"
                     className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2  p-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                     placeholder="Your password"
                     name="password"
                     ref={register}
                  />
               </div>
               {errors.password && (
                  <span className="text-xs text-red-600 my-0">
                     {errors.password.message}
                  </span>
               )}
            </div>

            <button
               // ref={buttonRef}
               type="submit"
               className={`bg-nevyBlue p-3 rounded-md text-gray-100  font-text font-semibold flex justify-center items-center gap-2 `}
            >
               <SignInSvg /> <span> Sign in</span>
            </button>
         </form>

         <div className="flex items-center py-5">
            <input
               type="checkbox"
               name="name-terms-and-privacy"
               id=""
               className="rounded"
               onChange={() => setAgree((prev) => !prev)}
            />
            <label className="ml-2 block text-sm text-gray-900">
               I agree to the{" "}
               <Link href="/terms-and-conditions">
                  <a className="text-indigo-600 hover:text-indigo-500 ">
                     Terms
                  </a>
               </Link>{" "}
               and{" "}
               <Link href="/privacy-policy">
                  <a className="text-indigo-600 hover:text-indigo-500 ">
                     Privecy policy
                  </a>
               </Link>
            </label>
         </div>
         <div className="text-sm  text-center my-4">
            <Link href="/">
               <a> Forget Password?</a>
            </Link>
         </div>

         <div className="text-sm text-center">
            Dont have an account?
            <Link href="/authentication/register">
               <a className="font-bold text-md text-optional"> Sign Up</a>
            </Link>
         </div>
      </div>
   );
};
