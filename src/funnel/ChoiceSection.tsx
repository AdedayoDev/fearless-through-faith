import { CTAButton } from "../components/CTAButton";
import { SELLER_CHECKOUT_URL } from "../config";
import { ChoiceItem } from "./ChoiceItem";

const choices = [
  {
    id: "choice-1",
    number: "Choice 01",
    text: "You can keep letting fear make decisions faith was supposed to make.",
  },
  {
    id: "choice-2",
    number: "Choice 02",
    text: "You can keep waiting for a someday that fear keeps pushing back.",
  },
  {
    id: "choice-3",
    number: "Choice 03",
    text: "Or you can start today with a book written to walk you step by step from fear to faith.",
    featured: true,
  },
] as const;

export function ChoiceSection() {
  return (
    <section className='choice-section' aria-labelledby='choice-heading'>
      <div className='choice-section__header'>
        <p className='section-kicker'>The decision</p>
        <h2 id='choice-heading'>At this point, the choice is yours.</h2>
      </div>

      <div className='choice-list'>
        {choices.map((choice) => (
          <ChoiceItem
            key={choice.id}
            number={choice.number}
            text={choice.text}
            featured={"featured" in choice ? choice.featured : false}
          />
        ))}
      </div>

      <div className='choice-section__cta-wrap'>
        <CTAButton
          label='Get Fearless Through Faith Now'
          href={SELLER_CHECKOUT_URL}
          variant='primary'
          size='lg'
          external
        />
      </div>

      <p className='choice-section__supporting-text'>
        You will be taken to the secure purchase page to continue.
      </p>
    </section>
  );
}
