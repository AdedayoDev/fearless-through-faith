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
    description: "In case you missed the video above, here's another one for you",
    youtubeUrl: "https://youtube.com/shorts/e9FID1wRewk?si=VYkh04bcFyLWeLo0",
  },
  // {
  //   id: "proof-2",
  //   title: "A message of faith",
  //   description: "Watch the second featured message.",
  //   youtubeUrl: "https://youtube.com/shorts/vqf08_PkIwQ?si=BPz5j1NvCuSXlj_y",
  // },
  {
    id: "proof-3",
    title: "Walking by faith",
    description: "Listen to what the author said below aout the authority you have",
    youtubeUrl: "https://youtube.com/shorts/MqvQcUellRc?si=QjTt8YoT4yiC1aL6",
  },
  {
    id: "proof-4",
    title: "A word for the journey",
    description: "",
    youtubeUrl: "https://youtube.com/shorts/Eec3tQk98c0?si=DKBajIvRhT067kku",
  },
  // {
  //   id: "proof-5",
  //   title: "Faith over fear",
  //   description: "Watch the fifth featured message.",
  //   youtubeUrl: "https://youtube.com/shorts/ZwTSUpNsSLw?si=19PjXJEQZy6amvxG",
  // },
  // {
  //   id: "proof-6",
  //   title: "A message of hope",
  //   description: "Watch the sixth featured message.",
  //   youtubeUrl: "https://youtube.com/shorts/raRtAOhu3QA?si=Z7MUCBDEdBys5cer",
  // },
];

const authorYears = "10+ years";

export function MeetAuthorSection() {
  const [activeVideo, setActiveVideo] = useState<ProofVideo | null>(null);

  return (
    <section className='mt-[88px] md:pt-8' aria-labelledby='author-heading'>
      {/* <div className='mb-6'>
        <p className='mb-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#8b5e34] text-center md:text-left'>
          Why this book
        </p>
        <h2
          id='author-heading'
          className='m-0 text-[clamp(2rem,3vw,3.2rem)] text-center md:text-left leading-tight tracking-[-0.05em] text-[#1b120d]'
        >
          Meet with the author and get fearless through faith
        </h2>
      </div> */}

      <div className='grid grid-cols-1 items-center gap-7 py-6 min-[861px]:grid-cols-[minmax(240px,360px)_minmax(0,1fr)]'>
        <div className='flex justify-center'>
          <div
            className='grid aspect-[4/5] w-full max-w-[310px] place-items-center overflow-hidden rounded-[28px] border border-[rgba(109,82,63,0.18)] bg-[linear-gradient(155deg,rgba(183,148,109,0.18),rgba(255,255,255,0.74))] shadow-[0_24px_44px_rgba(45,31,24,0.08)]'
            aria-label='Author portrait placeholder'
          >
            <img
              src='/my-pastor-1.png'
              alt='Pastor Isaac'
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>

        <div className='max-w-[680px]'>
          <p className='m-0 text-[clamp(1.3rem,2vw,1.8rem)] leading-[1.3] tracking-[-0.03em] text-[#1b120d]'>
            My name is Pastor IPAYE Isaac.
          </p>
          <p className='mt-2.5 text-[1.08rem] font-semibold text-[#694d37]'>
            Lead Pastor, The Household of Light (THOL), Ogbomosho, Oyo State
          </p>
          <p className='mt-[18px] text-[1.08rem] leading-[1.7] text-[#473d37]'>
            I&apos;ve spent {authorYears} teaching, pastoring, and working with
            people through the exact fear this book addresses.
          </p>
        </div>
      </div>

      <div className='mt-7 grid grid-cols-1 gap-[18px] min-[861px]:grid-cols-2 min-[1101px]:grid-cols-3'>
        {proofVideos.map((video) => (
          <article
            key={video.id}
            className='flex flex-col overflow-hidden rounded-[22px] border border-[rgba(109,82,63,0.12)] bg-white/[0.62] shadow-[0_18px_32px_rgba(39,30,24,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(45,34,28,0.08)]'
          >
            <button
              type='button'
              className='relative block w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 text-left'
              onClick={() => setActiveVideo(video)}
              aria-label={`Open video: ${video.title}`}
            >
              <VideoFrame
                youtubeUrl={video.youtubeUrl}
                title={video.title}
                className='pointer-events-none rounded-none'
              />
              <span
                className='absolute bottom-3 right-3 flex size-[46px] items-center justify-center rounded-full bg-[rgba(19,13,10,0.66)] text-[1.1rem] text-[#fffaf5] shadow-[0_18px_28px_rgba(0,0,0,0.18)]'
                aria-hidden='true'
              >
                ▶
              </span>
            </button>

            <div className='px-[18px] pb-5 pt-[18px]'>
              <h3 className='mb-2 text-[1.1rem] leading-[1.4] text-[#1b120d]'>
                {video.title}
              </h3>
              <p className='m-0 leading-[1.6] text-[#504741]'>
                {video.description}
              </p>
            </div>
          </article>
        ))}
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

      <VideoLightbox
        isOpen={Boolean(activeVideo)}
        title={activeVideo?.title ?? ""}
        youtubeUrl={activeVideo?.youtubeUrl ?? ""}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}
