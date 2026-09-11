import { CTAButton } from "../components/CTAButton";
import { VideoFrame } from "../components/VideoFrame";
import { SELLER_CHECKOUT_URL } from "../config";

export function HeroSection() {
  return (
    <section className='hero-section' aria-labelledby='hero-title'>
      <div className='hero-section__content'>
        <div className='hero-section__copy'>
          <p className='hero-section__eyebrow'>
            Message from Pastor IPAYE Isaac, Lead Pastor, The Household of Light
          </p>

          <h1 id='hero-title'>
            What if the fear that&apos;s been running your life wasn&apos;t
            meant to win?
          </h1>

          <p className='hero-section__subheadline'>
            If your fear has quietly shaped your decisions, your relationships,
            your prayers, and even your faith, this book shows you the one shift
            that changes everything.
          </p>

          <div className='hero-section__cta-wrap'>
            <CTAButton
              label='Get Fearless Through Faith Now'
              href={SELLER_CHECKOUT_URL}
              variant='primary'
              size='lg'
              external
            />
          </div>
        </div>

        <div className='hero-section__media'>
          <div className='media-card'>
            <VideoFrame
              youtubeUrl='https://youtube.com/shorts/VD-8N6SgZQM?si=J7LkFZ0PKRgZkQAF'
              title='Fearless Through Faith YouTube Short'
              className='media-card__video'
            />

            <div className='media-card__copy'>
              <h2>Fearless Through Faith</h2>
              <p>Watch the featured YouTube Short.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
