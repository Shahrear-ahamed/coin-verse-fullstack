import UserContext, { UserContextType } from "@/context/userContext";
import HeadContent from "@/libs/head";
import { signIn } from "@/service/apiRequest";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const callbackUrl = router.query?.callbackUrl;

  const redirectUser = callbackUrl || "/";
  const navigate = callbackUrl
    ? `/auth/sign-up?callbackUrl=${callbackUrl}`
    : "/auth/sign-up";

  const context: UserContextType = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (userData: LoginFormInputs) => {
    const { email, password } = userData;

    const result = await signIn({ email, password });

    if (result.statusCode === 200 && result.status) {
      context.setUser(result.data);
      window.location.href = redirectUser as string;
      toast.success(result.message);
      return;
    }
    toast.error(result.message);
  };

  return (
    <>
      <HeadContent title="Sign up" />
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full ">
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
                Log in to your account
              </h3>
              <p className="">
                Don&apos;t have an account ?{" "}
                <Link
                  href={navigate as string}
                  className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-7 space-y-3">
            <div>
              <label className="font-medium">Email</label>
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
              <label className="font-medium">Password</label>
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

            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Log in
            </button>

            <div className="text-center">
              <Link
                href="/auth/forget-password"
                className="text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
