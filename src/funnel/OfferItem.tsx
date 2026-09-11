import type { ReactNode } from "react";

export type OfferItemVariant = "primary" | "bonus";

export interface OfferItemProps {
  title: string;
  description: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
  icon?: ReactNode;
  variant?: OfferItemVariant;
  className?: string;
}

export function OfferItem({
  title,
  description,
  badge,
  image,
  imageAlt,
  icon,
  variant = "bonus",
  className,
}: OfferItemProps) {
  const classes = [
    "grid min-w-0 grid-cols-1 items-center gap-4 rounded-[18px] border border-[rgba(120,90,66,0.16)] bg-white/[0.7] p-3.5 shadow-[0_14px_26px_rgba(32,22,15,0.05)] motion-safe:animate-[section-rise_0.45s_ease_both] min-[641px]:grid-cols-[140px_minmax(0,1fr)] min-[641px]:gap-[22px] min-[641px]:rounded-3xl min-[641px]:p-[22px]",
    variant === "primary"
      ? "border-[rgba(116,80,42,0.22)] bg-[linear-gradient(180deg,rgba(255,249,243,0.96),rgba(255,255,255,0.82))]"
      : "",
  ];

  if (className) {
    classes.push(className);
  }

  return (
    <article className={classes.join(" ")}>
      {badge ? (
        <span className='inline-flex items-center justify-center rounded-full border border-[rgba(125,83,50,0.18)] bg-[rgba(125,83,50,0.08)] px-2.5 py-[7px] text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#705131]'>
          {badge}
        </span>
      ) : null}

      {(image || icon) && (
        <div
          className='flex min-h-[180px] items-center justify-center overflow-hidden rounded-[18px] border border-[rgba(119,88,62,0.12)] bg-[linear-gradient(180deg,#f2e6d8_0%,#e6d6c0_100%)]'
          aria-hidden={image ? undefined : true}
        >
          {image ? (
            <img
              src={image}
              alt={imageAlt ?? title}
              className='block h-full w-full object-cover'
            />
          ) : (
            <span className='inline-flex size-[54px] items-center justify-center rounded-2xl bg-[rgba(96,67,45,0.09)] text-xl font-bold text-[#5f4032]'>
              {icon}
            </span>
          )}
        </div>
      )}

      <div>
        <h3 className='mb-2.5 text-[1.1rem] font-bold leading-[1.18] tracking-[-0.04em] text-[#1b120d] min-[641px]:text-[clamp(1.2rem,1.8vw,1.7rem)]'>
          {title}
        </h3>
        <p className='m-0 text-[0.94rem] leading-[1.7] text-[#514640] min-[641px]:text-[0.98rem]'>
          {description}
        </p>
      </div>
    </article>
  );
}
