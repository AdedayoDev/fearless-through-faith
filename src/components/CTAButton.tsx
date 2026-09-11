import type { ReactNode } from "react";

export type CTAButtonVariant = "primary" | "secondary";
export type CTAButtonSize = "md" | "lg";

export interface CTAButtonProps {
  label: string;
  href: string;
  variant?: CTAButtonVariant;
  size?: CTAButtonSize;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
}

export function CTAButton({
  label,
  href,
  variant = "primary",
  size = "lg",
  className,
  icon,
  external = false,
}: CTAButtonProps) {
  const classes = [
    "inline-flex max-w-full items-center justify-center gap-2.5 rounded-2xl border border-transparent text-center no-underline transition duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-3 focus-visible:outline-[rgba(120,82,41,0.3)] focus-visible:outline-offset-3",
    variant === "primary"
      ? "bg-[linear-gradient(135deg,#1b120d_0%,#3c2a20_100%)] text-[#f9f3eb] shadow-[0_18px_32px_rgba(34,22,15,0.22)] hover:shadow-[0_22px_38px_rgba(34,22,15,0.28)]"
      : "border-[rgba(120,82,41,0.28)] bg-white/[0.4] text-[#2b201a]",
    size === "lg"
      ? "min-h-[58px] px-7 text-base font-bold max-[640px]:w-full"
      : "min-h-12 px-[22px] text-[0.95rem] font-semibold max-[640px]:w-full",
  ];

  if (className) {
    classes.push(className);
  }

  return (
    <a
      className={classes.join(" ")}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
    >
      {icon ? (
        <span className='inline-flex items-center justify-center leading-none'>
          {icon}
        </span>
      ) : null}
      <span>{label}</span>
    </a>
  );
}
