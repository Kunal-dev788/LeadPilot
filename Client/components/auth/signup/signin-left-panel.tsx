import { Logo } from "../shared/logo";
import { AuthHero } from "./auth-hero";
import { SignInFloatingPanels } from "../signin/signin-floating-panels";
import { SignInTestimonial } from "./signin-testimonial";

export function SignInLeftPanel() {
  return (
    <aside className="relative hidden w-[42%] max-w-180 flex-col overflow-hidden bg-[#050816] px-10 py-8 text-white lg:flex">
      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* GLOW */}
      <div className="absolute -top-30 -left-30 h-80 w-[320px] rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        {/* LOGO */}
        <Logo />

        {/* HERO */}
        <div className="mt-16">
          <AuthHero
            title={
              <>
                Welcome back to
                <br />
                LeadPilot
              </>
            }
            description="Manage leads, track performance, and streamline your sales workflow."
          />
        </div>

        {/* FLOATING PANELS */}
        <div className="mt-14">
          <SignInFloatingPanels />
        </div>

        {/* TESTIMONIAL */}
        <div className="mt-auto">
          <SignInTestimonial />
        </div>
      </div>
    </aside>
  );
}
