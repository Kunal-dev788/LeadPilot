import { AuthLayout } from "@/features/auth/components/auth-layout";
import { SignUpLeftPanel } from "@/features/auth/components/signup/signup-left-panel";
import { SignUpForm } from "@/shared/components/forms/register/register-form";

export default function SignUpPage() {
  return (
    <AuthLayout leftPanel={<SignUpLeftPanel />}>
      <div className="space-y-3 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-950">
          Create your account
        </h1>

        <p className="text-lg text-zinc-500">
          Start managing leads in minutes.
        </p>
      </div>

      <SignUpForm />
    </AuthLayout>
  );
}
