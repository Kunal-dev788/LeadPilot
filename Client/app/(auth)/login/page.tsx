import { AuthLayout } from "@/components/auth/auth-layout";
import { SignInLeftPanel } from "@/components/auth/signin-left-panel";
import { LoginForm } from "@/components/forms/login/login-form";

export default function LoginPage() {
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

      <LoginForm />
    </AuthLayout>
  );
}
