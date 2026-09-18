import { useEffect, useRef, useState } from "react";

import { getCountdownParts } from "../funnel/countdown";

const OFFER_DURATION_MS = 24 * 60 * 60 * 1000;

export function OfferCountdown() {
  const offerEndsAt = useRef(Date.now() + OFFER_DURATION_MS);
  const [remainingMs, setRemainingMs] = useState(OFFER_DURATION_MS);

  useEffect(() => {
    const updateRemaining = () => {
      const now = Date.now();

      if (now >= offerEndsAt.current) {
        offerEndsAt.current = now + OFFER_DURATION_MS;
      }

      setRemainingMs(Math.max(0, offerEndsAt.current - now));
    };

    updateRemaining();
    const timerId = window.setInterval(updateRemaining, 1000);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  const countdown = getCountdownParts(remainingMs);
  const units = [
    [countdown.hours, "hours"],
    [countdown.minutes, "minutes"],
    [countdown.seconds, "seconds"],
  ] as const;

  return (
    <div
      className='text-center'
      aria-label='Time remaining before the sale closes'
    >
      <p className='mb-1.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#f5d9ae]'>
        Before Fearless-Discount Sale Closes
      </p>
      <div className='flex items-center justify-center gap-2'>
        {units.map(([value, label]) => (
          <div
            key={label}
            className='min-w-[52px] rounded-xl border border-[rgba(214,173,116,0.3)] bg-[rgba(255,247,239,0.1)] px-2 py-1.5'
          >
            <span className='block text-[1.05rem] font-bold leading-none text-[#fff7ef]'>
              {String(value).padStart(2, "0")}
            </span>
            <span className='mt-1 block text-[0.58rem] uppercase tracking-[0.08em] text-[rgba(238,225,208,0.7)]'>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
