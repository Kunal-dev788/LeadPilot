"use client";

import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { InputField } from "@/components/shared/input-field";
import { PasswordInput } from "@/components/shared/password-input";
import { AuthRedirect } from "@/components/auth/auth-redirect";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.length > 0 && password.length > 0;

  return (
    <div className="flex flex-col gap-4">
      <form className="mt-10 space-y-6">
        {/* EMAIL */}
        <InputField
          label="Email Address"
          type="email"
          placeholder="name@company.com"
          icon={Mail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={!isValid}
          className={`mt-2 flex h-14 w-full items-center justify-center rounded-2xl text-sm font-semibold text-white transition-all duration-200 ${
            isValid
              ? "bg-indigo-600 hover:bg-indigo-500"
              : "cursor-not-allowed bg-zinc-300"
          }`}
        >
          Sign In
        </button>
      </form>

      {/* FOOTER */}
      <AuthRedirect
        text="Don't have an account?"
        linkText="Create account"
        href="/register"
      />
    </div>
  );
}
