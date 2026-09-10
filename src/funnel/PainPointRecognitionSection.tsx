import { BOOK_COVER_PLACEHOLDER } from "../config";

const painPoints = [
  "You say you trust God, but fear still makes you make the final decision.",
  "You stay silent, stay small, or stay stuck because moving forward feels too risky.",
  "You prayed about it, but the anxiety doesn’t leave.",
  "You’ve watched fear cost you an opportunity, a relationship, or a season you can’t get back.",
  "You know the Scriptures about fear, but knowing them hasn’t been enough.",
  "You wonder if this is just who you are now.",
];

export function PainPointRecognitionSection() {
  return (
    <section
      className='pain-point-section'
      aria-labelledby='pain-point-heading'
    >
      <div className='pain-point-section__header'>
        <p className='pain-point-section__eyebrow'>Recognize it?</p>
        <h2 id='pain-point-heading'>
          You&apos;ve probably felt one or more of these.
        </h2>
      </div>

      <div className='pain-point-grid'>
        {painPoints.map((point, index) => (
          <article
            key={point}
            className='pain-point-card'
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <span className='pain-point-card__number' aria-hidden='true'>
              {String(index + 1).padStart(2, "0")}
            </span>
            <p>{point}</p>
          </article>
        ))}
      </div>

      <div className='emotional-transition'>
        <div className='emotional-transition__copy'>
          <p className='emotional-transition__lead'>
            What if you don&apos;t have to keep managing fear for the rest of
            your life?
          </p>
          <p className='emotional-transition__bridge'>
            What if you could actually walk free of it, starting with what you
            read this week?
          </p>
        </div>

        <div
          className='book-mockup'
          aria-label='Book cover placeholder for Fearless Through Faith'
        >
          <img
            src={BOOK_COVER_PLACEHOLDER}
            alt='Fearless Through Faith book cover placeholder'
          />
        </div>
      </div>
    </section>
  );
}
