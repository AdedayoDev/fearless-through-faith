import { useState } from "react";

import { CTAButton } from "../components/CTAButton";
import { VideoFrame } from "../components/VideoFrame";
import { VideoLightbox } from "../components/VideoLightbox";
import { SELLER_CHECKOUT_URL } from "../config";

type ProofVideo = {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
};

const proofVideos: ProofVideo[] = [
  {
    id: "proof-1",
    title: "Fearless Through Faith",
    description: "Watch the first featured message.",
    youtubeUrl: "https://youtube.com/shorts/e9FID1wRewk?si=VYkh04bcFyLWeLo0",
  },
  {
    id: "proof-2",
    title: "A message of faith",
    description: "Watch the second featured message.",
    youtubeUrl: "https://youtube.com/shorts/vqf08_PkIwQ?si=BPz5j1NvCuSXlj_y",
  },
  {
    id: "proof-3",
    title: "Walking by faith",
    description: "Watch the third featured message.",
    youtubeUrl: "https://youtube.com/shorts/MqvQcUellRc?si=QjTt8YoT4yiC1aL6",
  },
  {
    id: "proof-4",
    title: "A word for the journey",
    description: "Watch the fourth featured message.",
    youtubeUrl: "https://youtube.com/shorts/Eec3tQk98c0?si=DKBajIvRhT067kku",
  },
  {
    id: "proof-5",
    title: "Faith over fear",
    description: "Watch the fifth featured message.",
    youtubeUrl: "https://youtube.com/shorts/ZwTSUpNsSLw?si=19PjXJEQZy6amvxG",
  },
  {
    id: "proof-6",
    title: "A message of hope",
    description: "Watch the sixth featured message.",
    youtubeUrl: "https://youtube.com/shorts/raRtAOhu3QA?si=Z7MUCBDEdBys5cer",
  },
];

const authorYears = "10+ years";

export function MeetAuthorSection() {
  const [activeVideo, setActiveVideo] = useState<ProofVideo | null>(null);

  return (
    <section className='meet-author-section' aria-labelledby='author-heading'>
      <div className='meet-author-section__header'>
        <p className='section-kicker'>Why this book</p>
        <h2 id='author-heading'>
          Before you go any further, here&apos;s why this book is worth your
          time.
        </h2>
      </div>

      <div className='author-profile'>
        <div className='author-profile__image-wrap'>
          <div
            className='author-profile__portrait'
            aria-label='Author portrait placeholder'
          >
            <span>Pastor Isaac</span>
          </div>
        </div>

        <div className='author-profile__content'>
          <p className='author-profile__intro'>
            My name is Pastor IPAYE Isaac.
          </p>
          <p className='author-profile__role'>
            Lead Pastor, The Household of Light (THOL), Ogbomosho, Oyo State
          </p>
          <p className='author-profile__experience'>
            I&apos;ve spent {authorYears} teaching, pastoring, and working with
            people through the exact fear this book addresses.
          </p>
        </div>
      </div>

      <div className='proof-videos'>
        {proofVideos.map((video) => (
          <article key={video.id} className='proof-video-card'>
            <button
              type='button'
              className='proof-video-card__trigger'
              onClick={() => setActiveVideo(video)}
              aria-label={`Open video: ${video.title}`}
            >
              <VideoFrame
                youtubeUrl={video.youtubeUrl}
                title={video.title}
                className='proof-video-card__video'
              />
              <span className='proof-video-card__play' aria-hidden='true'>
                ▶
              </span>
            </button>

            <div className='proof-video-card__body'>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className='author-cta-wrap'>
        <CTAButton
          label='Get Fearless Through Faith Now'
          href={SELLER_CHECKOUT_URL}
          variant='primary'
          size='lg'
          external
        />
      </div>

      <VideoLightbox
        isOpen={Boolean(activeVideo)}
        title={activeVideo?.title ?? ""}
        youtubeUrl={activeVideo?.youtubeUrl ?? ""}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}
