type LeadAvatarProps = {
  name: string;
};

export function LeadAvatar({ name }: LeadAvatarProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600">
      {initials}
    </div>
  );
}
