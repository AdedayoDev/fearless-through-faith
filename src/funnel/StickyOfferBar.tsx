import { useEffect, useMemo, useState } from "react";

import { getCountdownParts } from "./countdown";

const OFFER_DURATION_MS = 48 * 60 * 60 * 1000;

export function StickyOfferBar() {
  const offerEndsAt = useMemo(() => Date.now() + OFFER_DURATION_MS, []);
  const [remainingMs, setRemainingMs] = useState(() =>
    Math.max(0, offerEndsAt - Date.now()),
  );

  useEffect(() => {
    const updateRemaining = () => {
      setRemainingMs(Math.max(0, offerEndsAt - Date.now()));
    };

    updateRemaining();

    const timerId = window.setInterval(updateRemaining, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, [offerEndsAt]);

  const countdown = getCountdownParts(remainingMs);

  return (
    <div
      className='sticky top-0 z-20 border-b border-[rgba(210,180,138,0.3)] bg-[rgba(22,19,12,0.96)] shadow-[0_6px_18px_rgba(17,12,7,0.12)] backdrop-blur-xl'
      role='status'
      aria-live='polite'
    >
      <div className='mx-auto flex min-h-[66px] w-[calc(100%-32px)] items-center justify-between gap-5 py-2.5 max-[900px]:w-[calc(100%-24px)] max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:justify-center max-[640px]:w-[calc(100%-18px)] max-[640px]:gap-3'>
        <div className='flex flex-wrap items-center gap-3 text-[#f2eadf] max-[900px]:justify-center'>
          <span className='inline-flex items-center justify-center rounded-full border border-[rgba(214,173,116,0.45)] bg-[rgba(192,146,89,0.16)] px-2.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#f5d9ae]'>
            Launch Offer
          </span>
          <span className='text-[0.92rem] text-[rgba(255,247,239,0.85)] max-[640px]:w-full max-[640px]:text-center'>
            A timely message for this season, available for a short window.
          </span>
        </div>

        {/* <div
          className='flex shrink-0 items-center gap-2.5 max-[900px]:flex-wrap max-[900px]:justify-center'
          aria-label='Time remaining in the launch offer'
        >
          <div>
            <span>{String(countdown.hours).padStart(2, "0")}</span>
            <span className='mt-0.5 block text-[0.63rem] uppercase tracking-[0.1em] text-[rgba(238,225,208,0.7)]'>
              hours
            </span>
          </div>
          <div>
            <span>{String(countdown.minutes).padStart(2, "0")}</span>
            <span className='mt-0.5 block text-[0.63rem] uppercase tracking-[0.1em] text-[rgba(238,225,208,0.7)]'>
              minutes
            </span>
          </div>
          <div>
            <span>{String(countdown.seconds).padStart(2, "0")}</span>
            <span className='mt-0.5 block text-[0.63rem] uppercase tracking-[0.1em] text-[rgba(238,225,239,0.7)]'>
              seconds
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
