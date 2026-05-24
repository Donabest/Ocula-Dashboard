import { Input } from "#components/shacnUi/input";
import { NavLink, useNavigate } from "react-router-dom";
import PasswordInput from "../../ui/PasswordInput";
import LoginDashBoardPreview from "../../ui/LoginDashBoardPreview";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import type { signUpType } from "../../utilities/type";
import FormError from "../../ui/FormError";
import { useSignUp } from "./useSignUp";
import { useSignUpWithOAuth } from "./useSignUpWithOAuth";
import { toast } from "react-hot-toast";

function SignUpForm() {
  const { register, handleSubmit, formState, getValues, clearErrors, reset } =
    useForm<signUpType>();

  const navigate = useNavigate();

  const { signUp } = useSignUp();
  const { googleSignUp } = useSignUpWithOAuth();
  const { errors } = formState;

  function handleOnSubmit({ fullName, email, password }: signUpType) {
    signUp(
      { fullName, email, password },
      {
        onSettled: () => {
          reset();
          navigate("/Login");
        },
      },
    );
  }
  return (
    <section className="grid grid-cols-2 font-poppin  ">
      <div className="flex flex-col justify-center items-center h-screen border-r ">
        <div className="flex flex-col justify-start items-start text-start w-1/2 space-y-4">
          <h1 className="text-4xl  font-normal">Get Started Now</h1>
          <p className="text-gray-500  text-sm">
            Enter your crediential to access your dashboard.
          </p>
        </div>

        <div className="flex justify-start items-start gap-2 w-1/2 mt-4">
          <div
            className="loginWith "
            onClick={() =>
              googleSignUp(undefined, {
                onError: (err) => {
                  toast.error(err.message);
                },
              })
            }
          >
            <FcGoogle />
            Google
          </div>
          <div className="loginWith ">
            <IoLogoApple />
            Apple
          </div>
        </div>

        <div className="flex justify-start items-center w-1/2  gap-1.5 mt-4 ">
          <span className="w-full border"></span>
          <span className="w-full text-center text-gray-400 text-sm ">
            Or Sign Up with
          </span>
          <span className="w-full border"></span>
        </div>

        <form
          className="mt-8 space-y-2 w-1/2"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <div className="mb-5 ">
            <label htmlFor="email">FullName</label>
            <Input
              type="fullName"
              placeholder="John Doe"
              className="mt-1.5 font-montserrat"
              {...register("fullName", { required: "This field is required" })}
            />
            <FormError error={errors.fullName?.message} clear={clearErrors} />
          </div>
          <div className="mb-5 ">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              placeholder="johnDoe@gmail.com"
              className="mt-1.5 font-montserrat"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
            <FormError error={errors.email?.message} clear={clearErrors} />
          </div>

          <PasswordInput
            label="Password"
            text="Enter your password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "password need a minimum of 8 characters",
              },
            })}
          />
          <FormError error={errors.password?.message} clear={clearErrors} />

          <PasswordInput
            label="Confirm Password"
            text="Confirm your password"
            {...register("confirmPassword", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Password need to match",
            })}
          />
          <FormError
            error={errors.confirmPassword?.message}
            clear={clearErrors}
          />

          <label
            htmlFor="remember"
            className="flex gap-1.5 items-start justify-start mt-4  text-sm text-gray-400"
          >
            <input type="checkbox" />I agree to the Term & Policy
          </label>

          <button
            type="submit"
            className="block w-full mt-4 text-center bg-blue-700 text-white py-2 rounded-sm cursor-pointer shadow-blue-700 hover:text-gray-100 shadow-sm active:scale-101"
          >
            Sign Up
          </button>

          <span className="flex justify-center items-center text-center gap-2 text-sm text-gray-500 mt-5">
            Have an Account ?
            <NavLink to="/LogIn" className="text-blue-800">
              Sign In
            </NavLink>
          </span>
        </form>
      </div>
      <LoginDashBoardPreview />
    </section>
  );
}

export default SignUpForm;
