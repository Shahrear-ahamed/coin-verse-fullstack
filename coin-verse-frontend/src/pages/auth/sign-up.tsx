import UserContext, { UserContextType } from "@/context/userContext";
import HeadContent from "@/libs/head";
import { signUp } from "@/service/apiRequest";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";

interface SignUpFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const router = useRouter();
  const callbackUrl = router.query?.callbackUrl;
  const navigate = callbackUrl
    ? `/auth/sign-in?callbackUrl=${callbackUrl}`
    : "/auth/sign-in";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const context: UserContextType = useContext(UserContext);

  const onSubmit = async (data: SignUpFormInputs) => {
    const { email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      toast.error("Your passwords do no match");
      return;
    }

    const result = await signUp({ email, password });

    if (result.statusCode === 201 && result.status) {
      context.setUser(result.data);
      toast.success(result.message);
      router.replace("/");
      return;
    }
    toast.error(result.message);
  };

  return (
    <>
      <HeadContent title="Sign up" />
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-white">
          <div className="text-center">
            <Link href="/">
              <Image
                src={logo}
                width={220}
                className="mx-auto"
                alt="coin verse logo"
              />
            </Link>
            <div className="mt-5 space-y-2">
              <h3 className="text-2xl font-bold sm:text-3xl">
                Create a new account
              </h3>
              <p className="">
                Have already an account?
                <Link
                  href={navigate}
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-3">
            <div>
              <label className="font-medium text-base">Email</label>
              <input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {errors.email && (
                <span className="text-red-400 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label className="font-medium text-base">Password</label>
              <input
                id="password"
                type="password"
                {...register("password", { required: "Password is required" })}
                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {errors.password && (
                <span className="text-red-400 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div>
              <label className="font-medium text-base">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (val: string) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
                className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              {errors.confirmPassword && (
                <span className="text-red-400 text-xs">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Sign Up
            </button>
            <div className="text-center">
              <Link href="/forget-password" className="hover:text-indigo-600">
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignUp;
