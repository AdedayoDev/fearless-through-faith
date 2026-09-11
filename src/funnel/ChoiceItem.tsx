export interface ChoiceItemProps {
  number: string;
  text: string;
  featured?: boolean;
  className?: string;
}

export function ChoiceItem({
  number,
  text,
  featured = false,
  className,
}: ChoiceItemProps) {
  const classes = [
    "grid min-w-0 grid-cols-1 items-center gap-3.5 rounded-[22px] border border-[rgba(225,202,171,0.08)] bg-white/[0.03] px-4 py-[18px] text-[#f5eeea] motion-safe:animate-[section-rise_0.45s_ease_both] min-[641px]:px-[22px] min-[641px]:py-5 min-[861px]:grid-cols-[130px_minmax(0,1fr)] min-[1101px]:grid-cols-[150px_minmax(0,1fr)]",
    featured
      ? "border-[rgba(214,177,120,0.26)] bg-[linear-gradient(135deg,rgba(146,110,74,0.18),rgba(255,255,255,0.05))]"
      : "",
  ];

  if (className) {
    classes.push(className);
  }

  return (
    <article className={classes.join(" ")}>
      <span className='inline-flex min-h-[42px] items-center justify-center justify-self-start rounded-full border border-[rgba(210,180,138,0.18)] bg-[rgba(241,214,176,0.08)] px-3 py-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-[#f2d5ab] min-[641px]:min-h-[52px] min-[641px]:px-3.5 min-[641px]:tracking-[0.14em]'>
        {number}
      </span>
      <p
        className={`m-0 break-words text-[1.04rem] leading-[1.5] tracking-[-0.03em] text-[#f2e9e1] min-[641px]:text-[clamp(1.05rem,1.6vw,1.5rem)] ${featured ? "text-[1.2rem] text-[#fffaf4] min-[641px]:text-[clamp(1.2rem,2vw,2rem)]" : ""}`}
      >
        {text}
      </p>
    </article>
  );
}
