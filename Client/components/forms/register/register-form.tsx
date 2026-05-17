"use client";

import { useMemo, useState } from "react";

import { Lock, Mail, User } from "lucide-react";

import { InputField } from "@/components/shared/input-field";
import { PasswordInput } from "@/components/shared/password-input";

import { PasswordStrength } from "./password-strength";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // VALIDATIONS

  const isValidName = name.trim().length >= 3;

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPassword = useMemo(() => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    );
  }, [password]);

  const isPasswordMatched =
    password === confirmPassword && confirmPassword.length > 0;

  // FINAL FORM VALID

  const isFormValid =
    isValidName && isValidEmail && isValidPassword && isPasswordMatched;

  return (
    <form className="mt-10 space-y-6">
      {/* NAME */}
      <InputField
        label="Full Name"
        placeholder="Jane Doe"
        icon={User}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* EMAIL */}
      <InputField
        label="Email Address"
        type="email"
        placeholder="jane@example.com"
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

      {/* CONFIRM PASSWORD */}
      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm password"
        icon={Lock}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={
          confirmPassword.length > 0 && !isPasswordMatched
            ? "Passwords do not match"
            : undefined
        }
      />

      {/* PASSWORD RULES */}
      <PasswordStrength password={password} />

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={!isFormValid}
        className={`flex h-14 w-full items-center justify-center rounded-2xl text-sm font-semibold text-white transition-all duration-200 ${
          isFormValid
            ? "bg-indigo-600 hover:bg-indigo-500"
            : "cursor-not-allowed bg-zinc-300"
        }`}
      >
        Create Account
      </button>
    </form>
  );
}
