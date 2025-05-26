import LoginForm from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center">
          Log in to your account
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}
