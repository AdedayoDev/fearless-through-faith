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
  const classes = ["choice-item"];

  if (featured) {
    classes.push("choice-item--featured");
  }

  if (className) {
    classes.push(className);
  }

  return (
    <article className={classes.join(" ")}>
      <span className='choice-item__number'>{number}</span>
      <p className='choice-item__text'>{text}</p>
    </article>
  );
}
