import Image from "next/image";

export function SignInTestimonial() {
  return (
    <div className="max-w-155">
      <p className="text-[18px] leading-10 text-zinc-400 italic">
        “LeadPilot made our sales pipeline easier to manage and scale.”
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="h-10 w-10 rounded-full">
          <Image
            src="/profileImg.webp"
            alt="Kunal Rathore"
            width={42}
            height={42}
            className="rounded-full border border-white/10"
          />
        </div>

        <div>
          <h4 className="text-[16px] font-semibold text-white">
            Kunal Rathore
          </h4>

          <p className="text-[12px] text-zinc-500">VP of Sales, TechFlow</p>
        </div>
      </div>
    </div>
  );
}
