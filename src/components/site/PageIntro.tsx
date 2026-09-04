export function PageIntro({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="container-site pt-[clamp(4rem,10vw,7.5rem)]">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[1.02] tracking-[-0.01em] text-ink">
        {title}
      </h1>
      {lead && (
        <div className="mt-7 max-w-[64ch] text-base leading-7 text-stone sm:text-lg sm:leading-8">
          {lead}
        </div>
      )}
      {children}
    </section>
  );
}
