import { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-[#fafafa]">
      <div className="mx-auto w-full max-w-400 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
