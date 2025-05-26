import SignupForm from "@/components/forms/SignupForm";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center">Create your account</h2>
        <SignupForm />
      </div>
    </div>
  );
}
