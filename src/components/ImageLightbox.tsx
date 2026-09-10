import { useEffect, useRef } from "react";

export interface ImageLightboxProps {
  isOpen: boolean;
  imageSrc: string;
  alt: string;
  title?: string;
  onClose: () => void;
}

export function ImageLightbox({
  isOpen,
  imageSrc,
  alt,
  title,
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

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
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

  return (
    <div
      className='image-lightbox'
      role='dialog'
      aria-modal='true'
      aria-label={title ?? alt}
      onClick={onClose}
    >
      <div
        className='image-lightbox__panel'
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type='button'
          className='image-lightbox__close'
          aria-label={`Close preview: ${alt}`}
          onClick={onClose}
        >
          ×
        </button>

        <img src={imageSrc} alt={alt} className='image-lightbox__image' />
      </div>
    </div>
  );
}
