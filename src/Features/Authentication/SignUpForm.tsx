import { Input } from "#components/shacnUi/input";
import { NavLink } from "react-router-dom";
import PasswordInput from "../../ui/PasswordInput";
import LoginDashBoardPreview from "../../ui/LoginDashBoardPreview";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

function SignUpForm() {
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
          <div className="loginWith ">
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
            Or logIn with
          </span>
          <span className="w-full border"></span>
        </div>

        <form className="mt-8 space-y-2 w-1/2">
          <div className="mb-5 ">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              placeholder="johnDoe@gmail.com"
              className="mt-1.5 font-montserrat"
            />
          </div>

          <PasswordInput label="Password" text="Enter your password" />
          <PasswordInput
            label="Confirm Password"
            text="Confirm your password"
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
