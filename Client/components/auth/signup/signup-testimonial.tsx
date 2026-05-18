import Image from "next/image";

export function SignUpTestimonial() {
  return (
    <div className="max-w-130 rounded-3xl border border-white/10 bg-white/3 p-5 backdrop-blur-xl">
      {/* Content */}
      <div className="flex items-start gap-4">
        {/* Quote Icon */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl font-semibold text-white">
          ”
        </div>

        {/* Testimonial Text */}
        <p className="text-[15px] leading-7 font-medium tracking-[-0.02em] text-zinc-200">
          LeadPilot helped our sales team organize leads 3x faster. The
          interface gets out of the way so we can focus on closing deals.
        </p>
      </div>

      {/* User */}
      <div className="mt-3 flex items-center gap-3">
        <Image
          src="/profileImg.webp"
          alt="Kunal Rathore"
          width={42}
          height={42}
          className="rounded-full border border-white/10"
        />

        <div>
          <h4 className="text-[14px] font-semibold text-white">
            Kunal Rathore
          </h4>

          <p className="mt-0.5 text-[12px] text-zinc-400">
            VP of Sales, Acme Corp
          </p>
        </div>
      </div>
    </div>
  );
}
