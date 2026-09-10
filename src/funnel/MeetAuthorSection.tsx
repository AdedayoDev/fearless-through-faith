import { useState } from "react";

import { CTAButton } from "../components/CTAButton";
import { VideoFrame } from "../components/VideoFrame";
import { VideoLightbox } from "../components/VideoLightbox";
import { SELLER_CHECKOUT_URL } from "../config";

type ProofVideo = {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
};

const proofVideos: ProofVideo[] = [
  {
    id: "proof-1",
    title: "A recent teaching on facing fear with faith",
    description:
      "A clip from one of my recent teachings on facing fear with faith. You will see exactly the heart behind this book.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "proof-2",
    title: "Pastor Isaac ministering and teaching",
    description: "A glimpse of Pastor Isaac ministering and teaching.",
    youtubeId: "ScMzIvxBSi4",
  },
  {
    id: "proof-3",
    title: "Press and media appearance",
    description: "A press/media appearance alongside another guest.",
    youtubeId: "ysz5S6PUM-U",
  },
];

const authorYears = "{X years}";

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
            My name is Pastor I.P.A.Y.E. Isaac.
          </p>
          <p className='author-profile__role'>
            Lead Pastor, The Household of Light (THL), Ogbomosho, Oyo State
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
                videoId={video.youtubeId}
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
        videoId={activeVideo?.youtubeId ?? ""}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}
