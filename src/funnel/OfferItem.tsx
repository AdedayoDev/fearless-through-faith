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
  const classes = ["offer-item", `offer-item--${variant}`];

  if (className) {
    classes.push(className);
  }

  return (
    <article className={classes.join(" ")}>
      {badge ? <span className='offer-item__badge'>{badge}</span> : null}

      {(image || icon) && (
        <div
          className='offer-item__media'
          aria-hidden={image ? undefined : true}
        >
          {image ? (
            <img
              src={image}
              alt={imageAlt ?? title}
              className='offer-item__image'
            />
          ) : (
            <span className='offer-item__icon'>{icon}</span>
          )}
        </div>
      )}

      <div className='offer-item__content'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
