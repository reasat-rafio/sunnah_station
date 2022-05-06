import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
// import Logo from "@components/ui/logo";
import { ImGoogle2, ImFacebook2 } from "react-icons/im";
import Link from "@components/ui/link";
import { useUI } from "src/contexts/ui.context";

const SignUpForm: React.FC = () => {
  // const { t } = useTranslation();
  // const { mutate: signUp, isLoading } = useSignUpMutation();
  const { setModalView, openModal, closeModal } = useUI();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  function handleSignIn() {
    setModalView("LOGIN_VIEW");
    return openModal();
  }

  function onSubmit({ name, email, password }: any) {
    // signUp({
    // 	name,
    // 	email,
    // 	password,
    // });
    console.log(name, email, password, "sign form values");
  }
  return (
    <div className="py-5 px-5 sm:px-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
      <div className="text-center mb-6 pt-2.5">
        <div onClick={closeModal}>{/* <Logo /> */}</div>
        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
          By signing up, you agree to our{" "}
          <Link
            href={"/"}
            className="text-heading underline hover:no-underline focus:outline-none"
          >
            Terms
          </Link>{" "}
          &amp;{" "}
          <Link
            href={"/"}
            className="text-heading underline hover:no-underline focus:outline-none"
          >
            Policy
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
        noValidate
      >
        <div className="flex flex-col space-y-4">
          <Input
            labelKey="Name"
            type="text"
            variant="solid"
            {...register("name", {
              required: "forms:name-required",
            })}
            errorKey={errors.name?.message}
          />
          <Input
            labelKey="Email"
            type="email"
            variant="solid"
            {...register("email", {
              required: `Email is required`,
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email is not valid",
              },
            })}
            errorKey={errors.email?.message}
          />
          <PasswordInput
            labelKey="Password"
            errorKey={errors.password?.message}
            {...register("password", {
              required: `password is required`,
            })}
          />
          <div className="relative">
            <Button
              type="submit"
              //   loading={isLoading}
              //   disabled={isLoading}
              className="h-11 md:h-12 w-full mt-2"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-white">Or</span>
      </div>

      <Button
        type="submit"
        // loading={isLoading}
        // disabled={isLoading}
        className="h-11 md:h-12 w-full mt-2.5 bg-facebook hover:bg-facebookHover"
      >
        <ImFacebook2 className="text-sm sm:text-base me-1.5" />
        Login With Facebook
      </Button>
      <Button
        type="submit"
        // loading={isLoading}
        // disabled={isLoading}
        className="h-11 md:h-12 w-full mt-2.5 bg-google hover:bg-googleHover"
      >
        <ImGoogle2 className="text-sm sm:text-base me-1.5" />
        Login With Google
      </Button>
      <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
        Already have an account?{" "}
        <button
          type="button"
          className="text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none"
          onClick={handleSignIn}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
