import { AuthLayout } from "@/components/auth/auth-layout";
import { SignUpLeftPanel } from "@/components/auth/singup-left-panel";
import { RegisterForm } from "@/components/forms/register/register-form";

export default function RegisterPage() {
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

      <RegisterForm />
    </AuthLayout>
  );
}
