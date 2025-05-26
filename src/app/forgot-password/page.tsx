import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Reset your password
        </h2>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
