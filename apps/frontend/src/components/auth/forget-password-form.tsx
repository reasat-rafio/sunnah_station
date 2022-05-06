import Button from "@components/ui/button";
import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import { useUI } from "src/contexts/ui.context";

type FormValues = {
  email: string;
};

const defaultValues = {
  email: "",
};

const ForgetPasswordForm = () => {
  const { setModalView, openModal, closeModal } = useUI();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
  });

  function handleSignIn() {
    setModalView("LOGIN_VIEW");
    return openModal();
  }

  const onSubmit = (values: FormValues) => {
    console.log(values, "token");
  };

  return (
    <div className="py-6 px-5 sm:p-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
      <div className="text-center mb-9 pt-2.5">
        <div onClick={closeModal}>
          {/* <Logo /> */}
          LOGO
        </div>
        <p className="text-sm md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10">
          We'll send you a link to reset your password
        </p>
      </div>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className="flex flex-col justify-center"
        noValidate
      >
        <Input
          labelKey="forms:label-email"
          type="email"
          variant="solid"
          className="mb-4"
          {...register("email", {
            required: `Email is required`,
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email is required",
            },
          })}
          errorKey={errors.email?.message}
        />

        <Button type="submit" className="h-11 md:h-12 w-full mt-2">
          Reset Password
        </Button>
      </form>
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-10 mb-6 sm:mb-7">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-white">OR</span>
      </div>
      <div className="text-sm sm:text-base text-body text-center">
        Back to
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

export default ForgetPasswordForm;
