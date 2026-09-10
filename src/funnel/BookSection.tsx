import { useState } from "react";

import { CTAButton } from "../components/CTAButton";
import { ImageLightbox } from "../components/ImageLightbox";
import { SELLER_CHECKOUT_URL } from "../config";

type ChapterPreview = {
  chapterNumber: string;
  title: string;
  hook: string;
};

type PagePreview = {
  id: string;
  src: string;
  alt: string;
  title: string;
};

const chapters: ChapterPreview[] = [
  {
    chapterNumber: "Chapter 1",
    title:
      "Recognize the specific fears facing you before you make the decision.",
    hook: "Learn to identify what fear is actually trying to do in your decision-making.",
  },
  {
    chapterNumber: "Chapter 2",
    title: "Build a pattern of faith that is steady even when emotions rise.",
    hook: "Move beyond emotional pressure and into a more grounded, spiritual response.",
  },
  {
    chapterNumber: "Chapter 3",
    title: "Step into the room, conversation, and season fear kept you from.",
    hook: "See how the book helps you act from conviction instead of hesitation.",
  },
];

const pagePreviews: PagePreview[] = [
  {
    id: "page-1",
    src: "/images/fearless-through-faith-page-placeholder-1.jpg",
    alt: "Placeholder page preview inside the book showing a spiritual reflection prompt.",
    title: "Reflection prompt preview",
  },
  {
    id: "page-2",
    src: "/images/fearless-through-faith-page-placeholder-2.jpg",
    alt: "Placeholder page preview inside the book showing a practical framework page.",
    title: "Practical framework preview",
  },
  {
    id: "page-3",
    src: "/images/fearless-through-faith-page-placeholder-3.jpg",
    alt: "Placeholder page preview inside the book showing a step-by-step approach to moving forward in faith.",
    title: "Action-oriented preview",
  },
];

const bookCoverPlaceholder =
  "/images/fearless-through-faith-cover-placeholder.jpg";

export function BookSection() {
  const [selectedPreview, setSelectedPreview] = useState<PagePreview | null>(
    null,
  );

  return (
    <section className='book-section' aria-labelledby='book-heading'>
      <div className='book-section__intro'>
        <p className='section-kicker'>Inside the book</p>
        <h2 id='book-heading'>
          Fearless Through Faith shows you exactly how to move from fear to
          faith, step by step.
        </h2>
      </div>

      <div className='book-showcase'>
        <div className='book-showcase__media'>
          <div className='book-cover-wrap'>
            <div className='book-cover-glow' aria-hidden='true' />
            <img
              src={bookCoverPlaceholder}
              alt='Fearless Through Faith book cover placeholder'
              className='book-cover'
            />
          </div>
        </div>

        <div className='book-showcase__content'>
          <div className='chapter-preview-block'>
            <h3>Inside this book, you will discover how to...</h3>
            <div className='chapter-preview-list'>
              {chapters.map((chapter) => (
                <article
                  key={chapter.chapterNumber}
                  className='chapter-preview-item'
                >
                  <span className='chapter-preview-item__number'>
                    {chapter.chapterNumber}
                  </span>
                  <div>
                    <h4>{chapter.title}</h4>
                    <p>{chapter.hook}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='page-preview-block'>
        <h3>
          Here&apos;s a look inside a few pages that shows you exactly what to
          expect.
        </h3>

        <div className='page-preview-grid'>
          {pagePreviews.map((preview) => (
            <button
              key={preview.id}
              type='button'
              className='page-preview-card'
              onClick={() => setSelectedPreview(preview)}
              aria-label={`Open preview: ${preview.title}`}
            >
              <span className='page-preview-card__label'>View Preview</span>
              <img src={preview.src} alt={preview.alt} />
            </button>
          ))}
        </div>
      </div>

      <div className='book-section__cta'>
        <CTAButton
          label='Get Fearless Through Faith Now'
          href={SELLER_CHECKOUT_URL}
          variant='primary'
          size='lg'
          external
        />
      </div>

      <ImageLightbox
        isOpen={Boolean(selectedPreview)}
        imageSrc={selectedPreview?.src ?? ""}
        alt={selectedPreview?.alt ?? ""}
        title={selectedPreview?.title}
        onClose={() => setSelectedPreview(null)}
      />
    </section>
  );
}
