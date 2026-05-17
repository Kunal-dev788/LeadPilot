import { AuthLogo } from "./auth-logo";
import { AuthHero } from "./auth-hero";
import { SignUpFloatingCards } from "./signup-floating-cards";
import { SignUpTestimonial } from "./signup-testimonial";

export function SignUpLeftPanel() {
  return (
    <aside className="relative hidden w-[42%] min-w-170 flex-col overflow-hidden bg-[#050816] px-12 py-10 text-white lg:flex">
      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* GLOW */}
      <div className="absolute -top-30 -left-30 h-80 w-[320px] rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        {/* TOP */}
        <AuthLogo />

        {/* HERO */}
        <div className="mt-14">
          <AuthHero
            title={
              <>
                Manage Leads
                <br />
                Smarter
              </>
            }
            description="Track, organize, and convert leads with a clean modern workflow designed for high-performance sales teams."
          />
        </div>

        {/* FLOATING CARDS */}
        <div className="mt-12">
          <SignUpFloatingCards />
        </div>

        {/* TESTIMONIAL */}
        <div className="mt-auto pt-12">
          <SignUpTestimonial />
        </div>
      </div>
    </aside>
  );
}
