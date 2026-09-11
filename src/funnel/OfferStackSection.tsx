import { CTAButton } from "../components/CTAButton";
import { BOOK_COVER_PLACEHOLDER, SELLER_CHECKOUT_URL } from "../config";
import { OfferItem } from "./OfferItem";

interface OfferEntry {
  id: string;
  type: "primary" | "bonus";
  title: string;
  description: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
  icon?: string;
}

const offerEntries: OfferEntry[] = [
  {
    id: "primary-book",
    type: "primary",
    title: "Fearless Through Faith",
    description: "The complete digital ebook.",
    badge: "The complete digital ebook",
    image: BOOK_COVER_PLACEHOLDER,
    imageAlt: "Fearless Through Faith book cover",
  },
  {
    id: "bonus-one",
    type: "bonus",
    title: "Bonus #1 — Companion Prayer & Reflection Guide",
    description:
      "A companion resource designed to help you reflect, pray, and apply the message beyond the pages of the book.",
    badge: "Bonus #1",
    icon: "✦",
  },
  {
    id: "bonus-two",
    type: "bonus",
    title: "Bonus #2 — Access to the Readers Community & Devotional Group",
    description:
      "A chance to continue engaging with the message and devotional journey through a community setting designed to help you stay encouraged and connected.",
    badge: "Bonus #2",
    icon: "◎",
  },
];

export function OfferStackSection() {
  return (
    <section
      className='relative mt-[68px] overflow-hidden rounded-3xl border border-[rgba(118,86,62,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(251,246,240,0.86))] px-3.5 pb-[22px] pt-[30px] shadow-[0_28px_60px_rgba(35,24,15,0.06)] min-[641px]:mt-24 min-[641px]:px-7 min-[641px]:pb-8 min-[641px]:pt-[52px]'
      aria-labelledby='offer-heading'
    >
      <div className='relative z-[1] mb-8 text-center'>
        <p className='mb-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#8b5e34]'>
          What you get today
        </p>
        <h2
          id='offer-heading'
          className='m-0 text-[clamp(1.9rem,8vw,3.2rem)] leading-tight tracking-[-0.06em] text-[#1b120d]'
        >
          Here&apos;s everything you are getting today.
        </h2>
      </div>

      <div className='relative z-[1] mx-auto grid max-w-[960px] gap-[18px]'>
        {offerEntries.map((offer) => (
          <OfferItem
            key={offer.id}
            title={offer.title}
            description={offer.description}
            badge={offer.badge}
            image={offer.image}
            imageAlt={offer.imageAlt}
            icon={
              offer.icon ? (
                <span aria-hidden='true'>{offer.icon}</span>
              ) : undefined
            }
            variant={offer.type}
          />
        ))}
      </div>

      <div className='relative z-[1] mt-8 flex justify-center max-[640px]:w-full'>
        <CTAButton
          label='Yes, I Want Fearless Through Faith'
          href={SELLER_CHECKOUT_URL}
          variant='primary'
          size='lg'
          external
        />
      </div>

      <p className='relative z-[1] mx-auto mt-3.5 max-w-[720px] text-center text-[0.8rem] text-[#615954] min-[641px]:text-[0.86rem]'>
        You will be taken to the purchase page to continue.
      </p>
    </section>
  );
}
