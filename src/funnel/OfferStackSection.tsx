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
    <section className='offer-section' aria-labelledby='offer-heading'>
      <div className='offer-section__header'>
        <p className='section-kicker'>What you get today</p>
        <h2 id='offer-heading'>
          Here&apos;s everything you are getting today.
        </h2>
      </div>

      <div className='offer-stack'>
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

      <div className='offer-section__cta'>
        <CTAButton
          label='Yes, I Want Fearless Through Faith'
          href={SELLER_CHECKOUT_URL}
          variant='primary'
          size='lg'
          external
        />
      </div>

      <p className='offer-section__microcopy'>
        You will be taken to the purchase page to continue.
      </p>
    </section>
  );
}
