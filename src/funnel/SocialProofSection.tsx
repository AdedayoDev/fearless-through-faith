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
    image: "/social-proof-1.jpeg",
    alt: "Placeholder screenshot of a reader review for Fearless Through Faith",
    quote:
      "This helped me understand what fear was doing in my life and how to respond with faith.",
    reviewerName: "Reader",
    source: "Proof screenshot",
    rating: 5,
  },
  {
    id: "testimonial-2",
    image: "/social-proof-2.jpeg",
    alt: "Placeholder screenshot of a rating result for Fearless Through Faith",
    quote:
      "The message was clear, practical, and deeply relevant to what I was facing.",
    reviewerName: "Reader",
    source: "Proof screenshot",
    rating: 5,
  },
  {
    id: "testimonial-3",
    image: "/social-proof-3.jpeg",
    alt: "Placeholder screenshot of a review card for Fearless Through Faith",
    quote:
      "I finally had language for the fear I was wrestling with and a pathway forward.",
    reviewerName: "Reader",
    source: "Proof screenshot",
    rating: 5,
  },
  {
    id: "testimonial-4",
    image: "/social-proof-4.jpeg",
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
    <section className='mt-[88px]' aria-labelledby='social-proof-heading'>
      <div className='mb-6'>
        <p className='mb-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#8b5e34]'>
          Social proof
        </p>
        <h2
          id='social-proof-heading'
          className='text-[clamp(2rem,3vw,3rem)] leading-tight tracking-[-0.05em] text-[#1b120d]'
        >
          Don&apos;t just take our word for it.
        </h2>
      </div>

      <div className='mt-0 grid grid-cols-1 items-center gap-7 rounded-[26px] border border-[rgba(118,90,68,0.14)] bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(245,236,225,0.76))] p-4 min-[641px]:p-5 min-[1101px]:grid-cols-[minmax(0,1.35fr)_minmax(220px,0.65fr)]'>
        <div>
          <button
            type='button'
            className='relative block w-full cursor-pointer overflow-hidden rounded-[20px] border-0 bg-transparent p-0 text-left'
            onClick={() => setSelectedImage(testimonialData[1])}
            aria-label='Open proof image preview'
          >
            <img
              src={testimonialData[1].image}
              alt={testimonialData[1].alt}
              className='block h-[220px] w-full rounded-[20px] border border-[rgba(103,72,54,0.12)] object-cover min-[641px]:h-[250px]'
            />
            <span className='absolute bottom-3 right-3 rounded-full bg-[rgba(18,13,10,0.76)] px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[#fff7f1]'>
              View proof
            </span>
          </button>
        </div>

        <div>
          <p className='mb-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#8b5e34]'>
            Reader response
          </p>
          <p className='m-0 text-[1.06rem] leading-[1.7] text-[#4f453d]'>
            Real encouragement from people connecting with the same struggle and
            the same hope.
          </p>
        </div>
      </div>

      <div
        className='relative mt-7 overflow-hidden rounded-[26px] border border-[rgba(104,78,60,0.12)] bg-white/[0.5] py-5'
        aria-label='Reader testimonial carousel'
      >
        <div
          className='flex w-max gap-[18px] motion-safe:animate-[testimonial-scroll_var(--testimonial-scroll-speed,32s)_linear_infinite] hover:[animation-play-state:paused]'
          style={{
            ["--testimonial-scroll-speed" as string]: `${TESTIMONIAL_SCROLL_SPEED}s`,
          }}
        >
          {loopedTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.id}-${index}`}
              className='w-[min(86vw,320px)] shrink-0 overflow-hidden rounded-[22px] border border-[rgba(109,82,63,0.12)] bg-white/[0.78] shadow-[0_18px_32px_rgba(39,30,24,0.04)] min-[641px]:w-[min(360px,72vw)]'
            >
              <button
                type='button'
                className='relative block w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 text-left'
                onClick={() => setSelectedImage(testimonial)}
                aria-label={`Open testimonial image: ${testimonial.alt}`}
              >
                <img
                  className='block h-[180px] w-full object-cover min-[561px]:h-[220px]'
                  src={testimonial.image}
                  alt={testimonial.alt}
                />
                <span className='absolute bottom-3 right-3 rounded-full bg-[rgba(18,13,10,0.76)] px-2.5 py-[7px] text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[#fff7f1]'>
                  View
                </span>
              </button>

              {testimonial.quote ? (
                <div className='px-[18px] pb-[18px] pt-4'>
                  <p className='m-0 text-[0.98rem] leading-[1.6] text-[#2f261f]'>
                    “{testimonial.quote}”
                  </p>
                  {(testimonial.reviewerName || testimonial.source) && (
                    <div className='mt-3 flex flex-wrap gap-2 text-[0.76rem] tracking-[0.04em] text-[#6a564d]'>
                      {testimonial.reviewerName ? (
                        <span>{testimonial.reviewerName}</span>
                      ) : null}
                      {testimonial.source ? (
                        <span>{testimonial.source}</span>
                      ) : null}
                    </div>
                  )}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>

      <div className='mt-8 flex justify-center max-[640px]:w-full'>
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
