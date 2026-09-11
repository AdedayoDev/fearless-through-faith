import { useState } from "react";

import { CTAButton } from "../components/CTAButton";
import { VideoFrame } from "../components/VideoFrame";
import { VideoLightbox } from "../components/VideoLightbox";
import { SELLER_CHECKOUT_URL } from "../config";

type PersonalVideo = {
  id: string;
  title: string;
  youtubeUrl?: string;
  description: string;
};

const personalVideo: PersonalVideo = {
  id: "pastor-message",
  title: "A personal message from Pastor Isaac",
  youtubeUrl: undefined,
  description:
    "A direct message from Pastor Isaac connected to the message of the book.",
};

export function PersonalMessageSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const hasVideo = Boolean(personalVideo.youtubeUrl);

  return (
    <section className='mt-[88px]' aria-labelledby='personal-message-heading'>
      <div className='mb-[22px] text-center motion-safe:animate-[section-rise_0.55s_ease_both]'>
        <p className='mb-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#8b5e34]'>
          Personal message
        </p>
        <h2
          id='personal-message-heading'
          className='m-0 text-[clamp(2rem,3vw,3.2rem)] leading-tight tracking-[-0.05em] text-[#1b120d]'
        >
          A Personal Message From Pastor IPAYE ISAAC
        </h2>
        <p className='mt-2.5 text-[0.82rem] font-bold uppercase tracking-[0.12em] text-[#7a5a42]'>
          Watch Before You Decide
        </p>
      </div>

      <div className='relative mx-auto max-w-[1040px] rounded-[30px] border border-[rgba(112,80,60,0.16)] bg-[linear-gradient(145deg,rgba(255,255,255,0.78),rgba(245,236,225,0.74))] p-2.5 shadow-[0_28px_58px_rgba(45,32,24,0.1)] min-[641px]:p-[18px] motion-safe:animate-[section-rise_0.55s_ease_both]'>
        {hasVideo ? (
          <button
            type='button'
            className='group relative block w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 text-left rounded-[22px] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(45,32,24,0.16)] focus-visible:outline-3 focus-visible:outline-[rgba(120,82,41,0.35)] focus-visible:outline-offset-4'
            onClick={() => setIsVideoOpen(true)}
            aria-label={`Open video: ${personalVideo.title}`}
          >
            <VideoFrame
              youtubeUrl={personalVideo.youtubeUrl}
              title={personalVideo.title}
              className='overflow-hidden rounded-[22px] border border-[rgba(104,75,58,0.18)] bg-[#1b120d]'
            />
            <span
              className='absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(19,13,10,0.66)] text-xl text-[#fffaf5] shadow-[0_18px_28px_rgba(0,0,0,0.18)] transition duration-200 group-hover:scale-105'
              aria-hidden='true'
            >
              ▶
            </span>
          </button>
        ) : (
          <div className='relative overflow-hidden rounded-[22px] border border-dashed border-[rgba(104,75,58,0.25)] bg-[#1b120d]'>
            <VideoFrame
              embedUrl='about:blank'
              title={personalVideo.title}
              className='overflow-hidden rounded-[22px] border border-[rgba(104,75,58,0.18)] bg-[#1b120d]'
            />
            <p className='pointer-events-none absolute inset-0 grid place-items-center bg-[rgba(27,18,13,0.48)] text-sm font-semibold uppercase tracking-[0.12em] text-[#fff7ef]'>
              Video coming soon
            </p>
          </div>
        )}
      </div>

      <div className='mx-auto mt-6 max-w-[720px] text-center motion-safe:animate-[section-rise_0.55s_0.1s_ease_both]'>
        <p className='m-0 text-[1.04rem] leading-[1.7] text-[#4d403a]'>
          {personalVideo.description}
        </p>
      </div>

      <div className='mt-8 flex justify-center max-[640px]:w-full motion-safe:animate-[section-rise_0.55s_0.2s_ease_both]'>
        <CTAButton
          label='Get Fearless Through Faith Now'
          href={SELLER_CHECKOUT_URL}
          variant='primary'
          size='lg'
          external
        />
      </div>

      <VideoLightbox
        isOpen={isVideoOpen}
        title={personalVideo.title}
        youtubeUrl={personalVideo.youtubeUrl ?? ""}
        onClose={() => setIsVideoOpen(false)}
      />
    </section>
  );
}
