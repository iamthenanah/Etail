"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Enter a valid email",
          },
        })}
        className="w-full px-4 py-2 border rounded"
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}

      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "Minimum 6 characters" },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
            message: "Must include letters and numbers",
          },
        })}
        className="w-full px-4 py-2 border rounded"
      />
      {errors.password && (
        <p className="text-sm text-red-500">{errors.password.message}</p>
      )}

      <button className="cursor-pointer w-full bg-[#ff8e3a] text-white py-2 rounded hover:bg-gray-800">
        Log in
      </button>

      <div className="flex justify-between text-sm mt-2">
        <button
          type="button"
          onClick={() => router.push("/signup")}
          className="cursor-pointer text-[#ff8e3a] hover:text-gray-600 hover:underline "
        >
          Don’t have an account? Sign up
        </button>
        <button
          type="button"
          onClick={() => router.push("/forgot-password")}
          className="cursor-pointer text-gray-600 underline hover:text-[#ff8e3a]"
        >
          Forgot password?
        </button>
      </div>
      <button
        type="button"
        onClick={() => router.back()}
        className="cursor-pointer relative px-8 py-2 bg-[#ff8e3a] text-white rounded-full font-semibold hover:bg-gray-800 transition"
      >
        Back
      </button>
    </form>
  );
}
