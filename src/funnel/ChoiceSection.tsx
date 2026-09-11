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
    <section
      className='relative mt-[68px] overflow-hidden rounded-3xl border border-[rgba(181,147,112,0.18)] bg-[radial-gradient(circle_at_top,rgba(145,111,73,0.12),transparent_26%),linear-gradient(180deg,rgba(21,15,11,0.98),rgba(34,25,18,0.96))] px-4 pb-[26px] pt-9 shadow-[0_28px_60px_rgba(18,12,8,0.18)] min-[641px]:mt-24 min-[641px]:px-7 min-[641px]:pb-[38px] min-[641px]:pt-[54px]'
      aria-labelledby='choice-heading'
    >
      <div className='relative z-[1] mb-7 text-center'>
        <p className='mb-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#8b5e34]'>
          The decision
        </p>
        <h2
          id='choice-heading'
          className='m-0 text-[clamp(1.9rem,8vw,3.2rem)] leading-tight tracking-[-0.06em] text-[clamp(1.9rem,9vw,3.5rem)] text-[#f9f3eb]'
        >
          At this point, the choice is yours.
        </h2>
      </div>

      <div className='relative z-[1] mx-auto grid max-w-[960px] gap-[18px]'>
        {choices.map((choice) => (
          <ChoiceItem
            key={choice.id}
            number={choice.number}
            text={choice.text}
            featured={"featured" in choice ? choice.featured : false}
          />
        ))}
      </div>

      <div className='relative z-[1] mt-8 flex justify-center max-[640px]:w-full'>
        <CTAButton
          label='Get Fearless Through Faith Now'
          href={SELLER_CHECKOUT_URL}
          variant='primary'
          size='lg'
          external
        />
      </div>

      <p className='relative z-[1] mx-auto mt-3.5 max-w-[720px] text-center text-[0.8rem] text-[rgba(244,232,222,0.8)] min-[641px]:text-[0.86rem]'>
        You will be taken to the secure purchase page to continue.
      </p>
    </section>
  );
}
