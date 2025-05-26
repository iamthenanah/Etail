"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type ForgotPasswordInputs = {
  email: string;
};

export default function ForgotPasswordForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInputs>();

  const onSubmit = (data: ForgotPasswordInputs) => {
    console.log("Reset email sent to:", data.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        placeholder="Enter your email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/, message: "Invalid email format" },
        })}
        className="w-full px-4 py-2 border rounded"
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}

      <button className="cursor-pointer w-full bg-[#ff8e3a] text-white py-2 rounded hover:bg-gray-800">
        Send reset link
      </button>

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
