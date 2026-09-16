import { BOOK_COVER_PLACEHOLDER } from "../config";

const painPoints = [
  "You said you trust God, but fear still makes you make the final decision.",
  "You stayed silent, stayed small, or stayed stuck because moving forward feels too risky.",
  // "You prayed about it, but the anxiety doesn’t leave.",
  "You’ve watched fear cost you an opportunity, a relationship, or a season you can’t get back.",
  // "You know the Scriptures about fear, but knowing them hasn’t been enough.",
  // "You wonder if this is just who you are now.",
];

export function PainPointRecognitionSection() {
  return (
    <section className='mt-[88px]' aria-labelledby='pain-point-heading'>
      <div className='mb-6'>
        <p className='mb-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#8b5e34]'>
          Recognize it?
        </p>
        <h2
          id='pain-point-heading'
          className='text-[clamp(2rem,3vw,3rem)] leading-tight tracking-[-0.05em] text-[#1b120d]'
        >
          You&apos;ve probably felt one or more of these.
        </h2>
      </div>

      <div className='grid grid-cols-1 gap-[18px] min-[861px]:grid-cols-2 min-[1101px]:grid-cols-3'>
        {painPoints.map((point, index) => (
          <article
            key={point}
            className='grid grid-cols-1 gap-3 rounded-[20px] border border-[rgba(97,77,59,0.15)] bg-white/[0.55] px-4 py-[18px] shadow-[0_12px_28px_rgba(48,37,31,0.04)] min-[641px]:grid-cols-[auto_1fr] min-[641px]:gap-4 min-[641px]:px-[18px] min-[641px]:py-[22px] motion-safe:animate-[card-in_0.45s_ease_both]'
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <span
              className='inline-flex size-10 items-center justify-center rounded-xl bg-[rgba(120,82,41,0.1)] text-[0.8rem] font-bold text-[#7d4a1f]'
              aria-hidden='true'
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className='m-0 text-base leading-[1.6] text-[#3c332e]'>
              {point}
            </p>
          </article>
        ))}
      </div>

      <div className='mt-10 grid grid-cols-1 items-center gap-7 rounded-[26px] border border-[rgba(118,90,68,0.14)] bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(245,236,225,0.76))] p-5 min-[1101px]:grid-cols-[minmax(0,1.35fr)_minmax(220px,0.65fr)]'>
        <div className='max-w-2xl'>
          <p className='m-0 text-[clamp(1.9rem,3vw,3rem)] font-bold leading-tight tracking-[-0.06em] text-[#1b120d]'>
            What if you don&apos;t have to keep managing fear for the rest of
            your life?
          </p>
          <p className='mt-2.5 text-[clamp(1.1rem,1.6vw,1.4rem)] leading-[1.6] text-[#4f453d]'>
            What if you could actually walk free of it, starting with what you
            read this week?
          </p>
        </div>

        <div
          className='flex  justify-center'
          aria-label='Book cover placeholder for Fearless Through Faith'
        >
          <img
            src={BOOK_COVER_PLACEHOLDER}
            alt='Fearless Through Faith book cover placeholder'
            className='w-full  rounded-[18px] border border-[rgba(116,89,69,0.2)] bg-[#efe6dd] shadow-[0_30px_50px_rgba(46,34,28,0.18)]'
          />
        </div>
      </div>
    </section>
  );
}
