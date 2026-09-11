import { useEffect, useRef } from "react";

export interface ImageLightboxProps {
  isOpen: boolean;
  imageSrc: string;
  alt: string;
  title?: string;
  caption?: string;
  onClose: () => void;
}

export function ImageLightbox({
  isOpen,
  imageSrc,
  alt,
  title,
  caption,
  onClose,
}: ImageLightboxProps) {
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

  return (
    <div
      className='fixed inset-0 z-[60] grid place-items-center bg-[rgba(20,15,12,0.74)] backdrop-blur-lg'
      role='dialog'
      aria-modal='true'
      aria-label={title ?? alt}
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
          aria-label={`Close preview: ${alt}`}
          onClick={onClose}
        >
          <span aria-hidden='true'>×</span>
        </button>

        <img
          src={imageSrc}
          alt={alt}
          className='block max-h-[82vh] w-full bg-[#120d0a] object-contain'
        />
        {caption ? (
          <p className='m-0 p-4 text-center text-sm text-white'>{caption}</p>
        ) : null}
      </div>
    </div>
  );
}
