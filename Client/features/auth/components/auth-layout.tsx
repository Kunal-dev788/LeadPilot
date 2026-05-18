import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  leftPanel: ReactNode;
}

export function AuthLayout({ children, leftPanel }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen bg-[#fcfcfd]">
      {/* LEFT SIDE */}
      {leftPanel}

      {/* RIGHT SIDE */}
      <section className="flex flex-1 items-center justify-center px-8 py-16">
        <div className="w-full max-w-130">{children}</div>
      </section>
    </main>
  );
}
