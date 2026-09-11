import { useEffect, useRef } from "react";

import { toEmbedUrl } from "./VideoFrame";

export interface VideoLightboxProps {
  isOpen: boolean;
  title: string;
  youtubeUrl: string;
  onClose: () => void;
}

export function VideoLightbox({
  isOpen,
  title,
  youtubeUrl,
  onClose,
}: VideoLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousBodyOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const embedUrl = toEmbedUrl(youtubeUrl, true);

  return (
    <div
      className='fixed inset-0 z-[60] grid place-items-center bg-[rgba(20,15,12,0.74)] backdrop-blur-lg'
      role='dialog'
      aria-modal='true'
      aria-label={title}
      onClick={onClose}
    >
      <div
        className='relative max-h-[90vh] w-[min(92vw,900px)] overflow-hidden rounded-3xl border border-[rgba(212,184,149,0.2)] bg-[rgba(17,12,10,0.98)] shadow-[0_30px_60px_rgba(0,0,0,0.3)]'
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type='button'
          className='absolute right-3 top-3 z-[1] size-10 cursor-pointer rounded-full border-0 bg-white/[0.16] text-[1.6rem] text-white'
          aria-label={`Close video: ${title}`}
          onClick={onClose}
        >
          ×
        </button>

        <div className='relative aspect-video'>
          <iframe
            src={embedUrl}
            title={title}
            loading='lazy'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            className='block h-full w-full border-0'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
