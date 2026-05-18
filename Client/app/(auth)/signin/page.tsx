import { AuthLayout } from "@/features/auth/components/auth-layout";
import { SignInLeftPanel } from "@/features/auth/components/signin/signin-left-panel";
import { SignInForm } from "@/shared/components/forms/login/login-form";

export default function SignInPage() {
  return (
    <AuthLayout leftPanel={<SignInLeftPanel />}>
      <div className="space-y-3 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-950">
          Sign in to your account
        </h1>

        <p className="text-lg text-zinc-500">
          Enter your credentials to continue.
        </p>
      </div>

      <SignInForm />
    </AuthLayout>
  );
}
