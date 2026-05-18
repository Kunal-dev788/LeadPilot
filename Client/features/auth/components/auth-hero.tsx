import { ReactNode } from "react";

interface AuthHeroProps {
  title: ReactNode;
  description: string;
}

export function AuthHero({ title, description }: AuthHeroProps) {
  return (
    <div className="max-w-135">
      <h1 className="text-[44px] leading-[0.95] font-bold tracking-[-0.04em] text-white">
        {title}
      </h1>

      <p className="mt-6 max-w-110 text-[18px] leading-9 text-zinc-400">
        {description}
      </p>
    </div>
  );
}
