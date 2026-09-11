import { useState } from "react";

import { CTAButton } from "../components/CTAButton";
import { VideoFrame } from "../components/VideoFrame";
import { VideoLightbox } from "../components/VideoLightbox";
import { SELLER_CHECKOUT_URL } from "../config";

type PersonalVideo = {
  id: string;
  title: string;
  youtubeUrl: string;
  description: string;
};

const personalVideo: PersonalVideo = {
  id: "pastor-message",
  title: "A personal message from Pastor Isaac",
  youtubeUrl: "https://youtube.com/shorts/raRtAOhu3QA?si=Z7MUCBDEdBys5cer",
  description:
    "A short personal message from Pastor Isaac connected to the message of the book and the journey toward freedom.",
};

export function PersonalMessageSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      className='personal-message-section'
      aria-labelledby='personal-message-heading'
    >
      <div className='personal-message__header'>
        <p className='section-kicker'>Personal message</p>
        <h2 id='personal-message-heading'>
          A Personal Message From Pastor I.P. Isaac
        </h2>
        <p className='personal-message__subhead'>Watch Before You Decide</p>
      </div>

      <div className='personal-message__video-wrap'>
        <button
          type='button'
          className='personal-message__video-trigger'
          onClick={() => setIsVideoOpen(true)}
          aria-label={`Open video: ${personalVideo.title}`}
        >
          <VideoFrame
            youtubeUrl={personalVideo.youtubeUrl}
            title={personalVideo.title}
            className='personal-message__video'
          />
          <span className='personal-message__play' aria-hidden='true'>
            ▶
          </span>
        </button>
      </div>

      <div className='personal-message__copy'>
        <p>{personalVideo.description}</p>
      </div>

      <div className='personal-message__cta-wrap'>
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
        youtubeUrl={personalVideo.youtubeUrl}
        onClose={() => setIsVideoOpen(false)}
      />
    </section>
  );
}
