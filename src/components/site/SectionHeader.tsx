interface Props {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ index, eyebrow, title, description, align = "left" }: Props) {
  const alignCls =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignCls}`}>
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-electric">
        <span>{index}</span>
        <span className="h-px w-8 bg-electric/60" />
        <span className="text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}
