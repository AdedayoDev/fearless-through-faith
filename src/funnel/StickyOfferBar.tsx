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
    <div className='sticky-offer-bar' role='status' aria-live='polite'>
      <div className='offer-bar__inner'>
        <div className='offer-bar__text-block'>
          <span className='offer-bar__eyebrow'>Launch Offer</span>
          <span className='offer-bar__message'>
            A timely message for this season, available for a short window.
          </span>
        </div>

        <div
          className='offer-bar__countdown'
          aria-label='Time remaining in the launch offer'
        >
          <div className='countdown-unit'>
            <span className='countdown-unit__value'>
              {String(countdown.hours).padStart(2, "0")}
            </span>
            <span className='countdown-unit__label'>hours</span>
          </div>
          <div className='countdown-unit'>
            <span className='countdown-unit__value'>
              {String(countdown.minutes).padStart(2, "0")}
            </span>
            <span className='countdown-unit__label'>minutes</span>
          </div>
          <div className='countdown-unit'>
            <span className='countdown-unit__value'>
              {String(countdown.seconds).padStart(2, "0")}
            </span>
            <span className='countdown-unit__label'>seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
