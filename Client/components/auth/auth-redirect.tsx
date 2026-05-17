import Link from "next/link";

interface AuthRedirectProps {
  text: string;
  linkText: string;
  href: string;
}

export function AuthRedirect({ text, linkText, href }: AuthRedirectProps) {
  return (
    <p className="pt-2 text-center text-[15px] text-zinc-500">
      {text}{" "}
      <Link
        href={href}
        className="font-semibold text-indigo-600 transition hover:text-indigo-500"
      >
        {linkText}
      </Link>
    </p>
  );
}
