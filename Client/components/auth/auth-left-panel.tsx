import { AuthFloatingCards } from "./auth-floating-cards";
import { AuthHero } from "./auth-hero";
import { AuthLogo } from "./auth-logo";
import { AuthTestimonial } from "./auth-testimonial";

export function AuthLeftPanel() {
  return (
    <aside className="relative hidden min-w-170 w-[42%] overflow-hidden bg-[#050816] px-12 py-10 text-white lg:flex flex-col">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* GLOW */}
      <div className="absolute -left-30 -top-30 h-80 w-[320px] rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">

        {/* TOP */}
        <AuthLogo />

        {/* HERO */}
        <div className="mt-14">
          <AuthHero />
        </div>

        {/* FLOATING CARDS */}
        <div className="mt-12">
          <AuthFloatingCards />
        </div>

        {/* TESTIMONIAL */}
        <div className="mt-auto pt-12">
          <AuthTestimonial />
        </div>

      </div>
    </aside>
  );
}