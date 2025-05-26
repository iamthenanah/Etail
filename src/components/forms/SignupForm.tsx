"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type SignupFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export default function SignupForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const onSubmit = (data: SignupFormInputs) => {
    console.log("Signup:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        placeholder="First Name"
        {...register("firstName", { required: "First name is required" })}
        className="w-full px-4 py-2 border rounded"
      />
      {errors.firstName && (
        <p className="text-sm text-red-500">{errors.firstName.message}</p>
      )}

      <input
        placeholder="Last Name"
        {...register("lastName", { required: "Last name is required" })}
        className="w-full px-4 py-2 border rounded"
      />
      {errors.lastName && (
        <p className="text-sm text-red-500">{errors.lastName.message}</p>
      )}

      <input
        placeholder="Email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
        })}
        className="w-full px-4 py-2 border rounded"
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}

      <input
        placeholder="Phone Number"
        type="tel"
        {...register("phone", {
          required: "Phone number is required",
          pattern: { value: /^[0-9]{10,15}$/, message: "Invalid phone number" },
        })}
        className="w-full px-4 py-2 border rounded"
      />
      {errors.phone && (
        <p className="text-sm text-red-500">{errors.phone.message}</p>
      )}

      <input
        placeholder="Password"
        type="password"
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

      <input
        placeholder="Repeat Password"
        type="password"
        {...register("confirmPassword", {
          required: "Please confirm your password",
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
        className="w-full px-4 py-2 border rounded"
      />
      {errors.confirmPassword && (
        <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
      )}

      <button className="cursor-pointer w-full bg-[#ff8e3a] text-white py-2 rounded hover:bg-gray-800">
        Sign up
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
