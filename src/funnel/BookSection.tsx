import { useState } from "react";

import { CTAButton } from "../components/CTAButton";
import { ImageLightbox } from "../components/ImageLightbox";
import {
  BOOK_COVER_PLACEHOLDER,
  BOOK_PAGE_PREVIEW_PLACEHOLDER,
  SELLER_CHECKOUT_URL,
} from "../config";

type ChapterPreview = {
  chapterNumber: number;
  title: string;
  hook: string;
  pageImage?: string;
};

type PagePreview = {
  id: string;
  src: string;
  alt: string;
  title: string;
};

const chapters: ChapterPreview[] = [
  {
    chapterNumber: 1,
    title:
      "Recognize the specific fears facing you before you make the decision.",
    hook: "Chapter-specific practical hook to be supplied.",
  },
];

const pagePreviews: PagePreview[] = [
  {
    id: "page-1",
    src: BOOK_PAGE_PREVIEW_PLACEHOLDER,
    alt: "Placeholder preview for a page from Fearless Through Faith.",
    title: "Page preview placeholder",
  },
  {
    id: "page-2",
    src: BOOK_PAGE_PREVIEW_PLACEHOLDER,
    alt: "Placeholder preview for another page from Fearless Through Faith.",
    title: "Page preview placeholder",
  },
];

export function BookSection() {
  const [selectedPreview, setSelectedPreview] = useState<PagePreview | null>(
    null,
  );

  return (
    <section className='mt-[88px]' aria-labelledby='book-heading'>
      <div className='mb-6'>
        <p className='mb-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#8b5e34]'>
          Inside the book
        </p>
        <h2
          id='book-heading'
          className='text-[clamp(2rem,3vw,3rem)] leading-tight tracking-[-0.05em] text-[#1b120d]'
        >
          Fearless Through Faith shows you exactly how to move from fear to
          faith, step by step.
        </h2>
      </div>

      <div className='mt-7 grid grid-cols-1 items-center gap-7 min-[1101px]:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)]'>
        <div className='min-[1101px]:min-w-[380px]'>
          <div className='relative grid w-full place-items-center p-[18px] min-[641px]:p-[22px]'>
            <div
              className='absolute inset-[12%_12%_auto] h-[72%] rounded-full bg-[radial-gradient(circle,rgba(166,99,55,0.18),transparent_70%)] blur-[22px]'
              aria-hidden='true'
            />
            <img
              src={BOOK_COVER_PLACEHOLDER}
              alt='Fearless Through Faith book cover'
              className='relative z-[1] w-full max-w-[420px] rounded-3xl border border-[rgba(95,72,56,0.18)] bg-[#f4ecdf] shadow-[0_30px_60px_rgba(41,30,24,0.18)] min-[641px]:max-w-[460px]'
            />
          </div>
        </div>

        <div>
          <div className='pt-2'>
            <h3 className='mb-[18px] text-[clamp(1.5rem,2vw,2rem)] tracking-[-0.04em] text-[#1b120d]'>
              Inside this book, you will discover how to...
            </h3>
            <div className='grid gap-4'>
              {chapters.map((chapter) => (
                <article
                  key={chapter.chapterNumber}
                  className='grid grid-cols-1 gap-3 rounded-[18px] border border-[rgba(95,73,59,0.12)] bg-white/[0.6] px-4 py-4 min-[641px]:grid-cols-[auto_1fr] min-[641px]:gap-4 min-[641px]:px-[18px]'
                >
                  <span className='inline-flex size-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(103,70,49,0.12),rgba(160,122,76,0.2))] text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[#5d3e2a] min-[641px]:size-[46px]'>
                    {String(chapter.chapterNumber).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className='mb-1.5 text-[1.1rem] leading-[1.4] text-[#1b120d]'>
                      {chapter.title}
                    </h4>
                    <p className='m-0 leading-[1.6] text-[#4f443f]'>
                      {chapter.hook}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-12'>
        <h3 className='mb-[18px] text-[clamp(1.5rem,2vw,2rem)] tracking-[-0.04em] text-[#1b120d]'>
          Here&apos;s a look inside a few pages that shows you exactly what to
          expect.
        </h3>

        <div className='grid grid-cols-1 gap-[18px] min-[641px]:grid-cols-2 min-[1101px]:grid-cols-3'>
          {pagePreviews.map((preview) => (
            <button
              key={preview.id}
              type='button'
              className='relative cursor-pointer overflow-hidden rounded-[18px] border border-[rgba(100,76,61,0.14)] bg-white/[0.7] p-0 transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(93,68,51,0.25)] hover:shadow-[0_20px_32px_rgba(44,33,27,0.08)]'
              onClick={() => setSelectedPreview(preview)}
              aria-label={`Open preview: ${preview.title}`}
            >
              <span className='absolute inset-x-3 bottom-3 rounded-full bg-[rgba(18,13,10,0.76)] px-3 py-2 text-center text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[#fff7f1]'>
                View Preview
              </span>
              <img
                className='block h-[180px] w-full object-cover min-[641px]:h-[220px]'
                src={preview.src}
                alt={preview.alt}
              />
            </button>
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
        isOpen={Boolean(selectedPreview)}
        imageSrc={selectedPreview?.src ?? ""}
        alt={selectedPreview?.alt ?? ""}
        title={selectedPreview?.title}
        onClose={() => setSelectedPreview(null)}
      />
    </section>
  );
}
