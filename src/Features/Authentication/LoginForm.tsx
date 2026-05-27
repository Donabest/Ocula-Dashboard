import { Input } from "../../components/shacnUi/input";
import { FcGoogle } from "react-icons/fc";
import PasswordInput from "../../ui/PasswordInput";
import { IoLogoApple } from "react-icons/io";
import LoginDashBoardPreview from "../../ui/LoginDashBoardPreview";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLoginUser } from "./useLoginUser";
import Spinner from "../../ui/Spinner";
import { useSignUpWithOAuth } from "./useSignUpWithOAuth";
import { toast } from "react-hot-toast";

function LoginForm() {
  const [email, setEmail] = useState<string>("dashboardExmple@gmail.com");
  const [password, setPassword] = useState<string>("Abest123??");
  const { loginUser, isLoading } = useLoginUser();
  const { googleSignUp } = useSignUpWithOAuth();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) return;
    loginUser(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }
  return (
    <section className="xl:grid grid-cols-2 font-poppin  ">
      <div className="flex flex-col justify-center items-center h-screen xl:border-r ">
        <div className="text-center space-y-4 w-xs">
          <h1 className="text-4xl  font-medium">Welcome Back</h1>
          <p className="text-gray-500  text-sm">
            Enter your email and password to access your dashboard.
          </p>
        </div>
        <form className="mt-8 space-y-2 w-xs" onSubmit={handleSubmit}>
          <div className="mb-5 ">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              autoComplete="username"
              placeholder="johnDoe@gmail.com"
              className="mt-1.5 font-montserrat"
              value={email}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
              ) => setEmail(e.target.value)}
            />
          </div>
          <PasswordInput
            label="Password"
            text="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-between items-center mt-3">
            <label
              htmlFor="remember"
              className="flex gap-1.5 items-center justify-center  text-sm text-gray-400"
            >
              <input type="checkbox" />
              Remember Me
            </label>
            <p className="text-sm  text-blue-800 cursor-pointer">
              Forget Your Password ?
            </p>
          </div>

          <button
            type="submit"
            className="block w-full mt-4 text-center bg-blue-700 text-white py-2 rounded-sm cursor-pointer shadow-blue-700 hover:text-gray-100 shadow-sm active:scale-101"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : " Log In"}
          </button>

          <div className="flex justify-between items-center gap-1.5 mt-4">
            <span className="w-full border"></span>
            <span className="w-full text-center text-gray-400 text-sm ">
              Or logIn with
            </span>
            <span className="w-full border"></span>
          </div>
          <div className="flex justify-center items-center gap-2 mt-4">
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
          <span className="flex justify-center items-center text-center gap-2 text-sm text-gray-500 mt-5">
            Don't Have an Account ?
            <NavLink to="/SignUp" className="text-blue-800">
              Register Now
            </NavLink>
          </span>
        </form>
      </div>
      <LoginDashBoardPreview />
    </section>
  );
}

export default LoginForm;
