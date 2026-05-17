import { Check, X } from "lucide-react";

interface PasswordStrengthProps {
  password: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const rules = [
    {
      label: "8 Characters",
      valid: password.length >= 8,
    },
    {
      label: "1 Uppercase",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "1 Number",
      valid: /[0-9]/.test(password),
    },
    {
      label: "1 Special Character",
      valid: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-zinc-600">Password Requirements</p>

      <div className="grid grid-cols-2 gap-3">
        {rules.map((rule) => (
          <div key={rule.label} className="flex items-center gap-2">
            {/* ICON */}
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full transition-all duration-200 ${
                rule.valid
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-red-100 text-red-500"
              }`}
            >
              {rule.valid ? <Check size={12} /> : <X size={12} />}
            </div>

            {/* LABEL */}
            <span
              className={`text-sm transition-colors duration-200 ${
                rule.valid ? "text-zinc-700" : "text-zinc-400"
              }`}
            >
              {rule.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
