import { CTAButton } from "../components/CTAButton";
import { VideoFrame } from "../components/VideoFrame";
import { SELLER_CHECKOUT_URL } from "../config";

export function HeroSection() {
  return (
    <section
      className='pt-8 max-[900px]:pt-[18px]'
      aria-labelledby='hero-title'
    >
      <div className='grid grid-cols-1 items-center gap-11 min-[1101px]:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]'>
        <div className='max-w-[620px] max-[640px]:text-center'>
          <p className='mb-[18px] text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[#8b5e34]'>
            Message from Pastor IPAYE Isaac, Lead Pastor, The Household of Light
          </p>

          <h1
            id='hero-title'
            className='m-0 text-[clamp(2.35rem,4vw,5rem)] font-bold leading-[0.96] tracking-[-0.06em] text-[#1a120d]'
          >
            What if the fear that&apos;s been running your life wasn&apos;t
            meant to win?
          </h1>

          <p className='mt-5 max-w-[620px] text-[clamp(1.06rem,1.7vw,1.4rem)] leading-[1.6] text-[#4f453d]'>
            If your fear has quietly shaped your decisions, your relationships,
            your prayers, and even your faith, this book shows you the one shift
            that changes everything.
          </p>

          <div className='mt-7 max-[640px]:w-full'>
            <CTAButton
              label='Get Fearless Through Faith Now'
              href={SELLER_CHECKOUT_URL}
              variant='primary'
              size='lg'
              external
            />
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='w-full max-w-[560px] rounded-[28px] border border-[rgba(98,73,57,0.12)] bg-white/[0.68] p-4 shadow-[0_20px_48px_rgba(53,39,29,0.08)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_52px_rgba(53,39,29,0.12)]'>
            <VideoFrame
              youtubeUrl='https://youtube.com/shorts/VD-8N6SgZQM?si=J7LkFZ0PKRgZkQAF'
              title='Fearless Through Faith YouTube Short'
              className='overflow-hidden rounded-[18px] border border-[rgba(105,79,58,0.18)] bg-[#efe6dd]'
            />

            <div className='px-1.5 pb-2 pt-[18px]'>
              <h2 className='mb-2.5 text-[clamp(1.5rem,2vw,2rem)] tracking-[-0.04em] text-[#1b120d]'>
                Fearless Through Faith
              </h2>
              <p className='m-0 text-base leading-[1.6] text-[#504741]'>
                Watch the featured YouTube Short.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
