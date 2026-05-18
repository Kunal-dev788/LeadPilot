interface ILeadHeadingProps {
  title: string;
  description?: string;
}

export function Heading({ title, description }: ILeadHeadingProps) {
  return (
    <div>
      <h1 className="text-3xl leading-none font-bold tracking-tight text-zinc-950 sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 text-sm text-zinc-500">{description}</p>
      ) : null}
    </div>
  );
}
