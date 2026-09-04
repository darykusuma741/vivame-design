export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  className,
  id,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} ${className ?? ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag
        id={id}
        className={`mt-5 font-display text-[clamp(2.1rem,5vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.01em] text-ink ${
          centered ? "mx-auto max-w-[22ch]" : "max-w-[20ch]"
        }`}
      >
        {title}
      </Tag>
      {lead && (
        <p
          className={`mt-6 max-w-[62ch] text-base leading-7 text-stone sm:text-lg sm:leading-8 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
