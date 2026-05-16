import { AuthLayout } from "@/components/auth/auth-layout";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="space-y-8">
        <div className="space-y-3 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-950">
            Create your account
          </h1>

          <p className="text-lg text-zinc-500">
            Start managing leads in minutes.
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
