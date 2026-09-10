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
    "cta-button",
    `cta-button--${variant}`,
    `cta-button--${size}`,
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
      {icon ? <span className='cta-button__icon'>{icon}</span> : null}
      <span>{label}</span>
    </a>
  );
}
