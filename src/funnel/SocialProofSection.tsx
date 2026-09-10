import { useMemo, useState } from "react";

import { ImageLightbox } from "../components/ImageLightbox";
import { CTAButton } from "../components/CTAButton";
import { SELLER_CHECKOUT_URL } from "../config";

type Testimonial = {
  id: string;
  image: string;
  alt: string;
  quote?: string;
  reviewerName?: string;
  source?: string;
  rating?: number;
};

const testimonialData: Testimonial[] = [
  {
    id: "testimonial-1",
    image: "/images/social-proof-placeholder-1.jpg",
    alt: "Placeholder screenshot of a reader review for Fearless Through Faith",
    quote:
      "This helped me understand what fear was doing in my life and how to respond with faith.",
    reviewerName: "Reader",
    source: "Proof screenshot",
    rating: 5,
  },
  {
    id: "testimonial-2",
    image: "/images/social-proof-placeholder-2.jpg",
    alt: "Placeholder screenshot of a rating result for Fearless Through Faith",
    quote:
      "The message was clear, practical, and deeply relevant to what I was facing.",
    reviewerName: "Reader",
    source: "Proof screenshot",
    rating: 5,
  },
  {
    id: "testimonial-3",
    image: "/images/social-proof-placeholder-3.jpg",
    alt: "Placeholder screenshot of a review card for Fearless Through Faith",
    quote:
      "I finally had language for the fear I was wrestling with and a pathway forward.",
    reviewerName: "Reader",
    source: "Proof screenshot",
    rating: 5,
  },
  {
    id: "testimonial-4",
    image: "/images/social-proof-placeholder-4.jpg",
    alt: "Placeholder screenshot of a reader testimonial for Fearless Through Faith",
    quote: "It felt personal, biblical, and practical at the same time.",
    reviewerName: "Reader",
    source: "Proof screenshot",
    rating: 5,
  },
];

const TESTIMONIAL_SCROLL_SPEED = 32;

export function SocialProofSection() {
  const [selectedImage, setSelectedImage] = useState<Testimonial | null>(null);

  const loopedTestimonials = useMemo(
    () => [...testimonialData, ...testimonialData],
    [],
  );

  return (
    <section
      className='social-proof-section'
      aria-labelledby='social-proof-heading'
    >
      <div className='social-proof__header'>
        <p className='section-kicker'>Social proof</p>
        <h2 id='social-proof-heading'>Don&apos;t just take our word for it.</h2>
      </div>

      <div className='proof-spotlight'>
        <div className='proof-spotlight__image-wrap'>
          <button
            type='button'
            className='proof-spotlight__button'
            onClick={() => setSelectedImage(testimonialData[1])}
            aria-label='Open proof image preview'
          >
            <img
              src={testimonialData[1].image}
              alt={testimonialData[1].alt}
              className='proof-spotlight__image'
            />
            <span className='proof-spotlight__badge'>View proof</span>
          </button>
        </div>

        <div className='proof-spotlight__content'>
          <p className='proof-spotlight__eyebrow'>Reader response</p>
          <p className='proof-spotlight__note'>
            Real encouragement from people connecting with the same struggle and
            the same hope.
          </p>
        </div>
      </div>

      <div
        className='testimonial-carousel'
        aria-label='Reader testimonial carousel'
      >
        <div
          className='testimonial-track'
          style={{
            ["--testimonial-scroll-speed" as string]: `${TESTIMONIAL_SCROLL_SPEED}s`,
          }}
        >
          {loopedTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.id}-${index}`}
              className='testimonial-card'
            >
              <button
                type='button'
                className='testimonial-card__media'
                onClick={() => setSelectedImage(testimonial)}
                aria-label={`Open testimonial image: ${testimonial.alt}`}
              >
                <img src={testimonial.image} alt={testimonial.alt} />
                <span className='testimonial-card__view'>View</span>
              </button>

              {testimonial.quote ? (
                <div className='testimonial-card__body'>
                  <p className='testimonial-card__quote'>
                    “{testimonial.quote}”
                  </p>
                  {(testimonial.reviewerName || testimonial.source) && (
                    <div className='testimonial-card__meta'>
                      {testimonial.reviewerName ? (
                        <span className='testimonial-card__name'>
                          {testimonial.reviewerName}
                        </span>
                      ) : null}
                      {testimonial.source ? (
                        <span className='testimonial-card__source'>
                          {testimonial.source}
                        </span>
                      ) : null}
                    </div>
                  )}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>

      <div className='social-proof__cta'>
        <CTAButton
          label='Get Fearless Through Faith Now'
          href={SELLER_CHECKOUT_URL}
          variant='primary'
          size='lg'
          external
        />
      </div>

      <ImageLightbox
        isOpen={Boolean(selectedImage)}
        imageSrc={selectedImage?.image ?? ""}
        alt={selectedImage?.alt ?? ""}
        title={selectedImage?.source ?? "Testimonial proof"}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
