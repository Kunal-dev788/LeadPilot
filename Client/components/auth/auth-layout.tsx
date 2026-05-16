import { ReactNode } from "react";
import { AuthLeftPanel } from "./auth-left-panel";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen bg-[#fcfcfd]">

      {/* LEFT SIDE */}
      <AuthLeftPanel />

      {/* RIGHT SIDE */}
      <section className="flex flex-1 items-center justify-center px-8 py-16">

        <div className="w-full max-w-130">
          {children}
        </div>

      </section>
    </main>
  );
}