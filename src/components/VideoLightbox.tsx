import { useEffect, useRef } from "react";

export interface VideoLightboxProps {
  isOpen: boolean;
  title: string;
  videoId: string;
  onClose: () => void;
}

export function VideoLightbox({
  isOpen,
  title,
  videoId,
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

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    const previousActiveElement = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div
      className='video-lightbox'
      role='dialog'
      aria-modal='true'
      aria-label={title}
      onClick={onClose}
    >
      <div
        className='video-lightbox__content'
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type='button'
          className='video-lightbox__close'
          aria-label={`Close video: ${title}`}
          onClick={onClose}
        >
          ×
        </button>

        <div className='video-lightbox__frame'>
          <iframe
            src={embedUrl}
            title={title}
            loading='lazy'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
