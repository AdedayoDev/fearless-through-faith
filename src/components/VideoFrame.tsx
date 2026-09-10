export interface VideoFrameProps {
  videoId?: string;
  embedUrl?: string;
  title: string;
  aspectRatio?: string;
  className?: string;
  poster?: string;
}

export function VideoFrame({
  videoId = "pastor-isaac-placeholder-video",
  embedUrl,
  title,
  aspectRatio = "16 / 9",
  className,
  poster,
}: VideoFrameProps) {
  const resolvedEmbedUrl =
    embedUrl ??
    `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?rel=0&modestbranding=1`;

  const classes = ["video-frame"];

  if (className) {
    classes.push(className);
  }

  return (
    <div
      className={classes.join(" ")}
      style={{
        aspectRatio,
        backgroundImage: poster ? `url(${poster})` : undefined,
        backgroundSize: poster ? "cover" : undefined,
        backgroundPosition: poster ? "center" : undefined,
      }}
      aria-label={title}
    >
      <iframe
        src={resolvedEmbedUrl}
        title={title}
        loading='lazy'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      />
    </div>
  );
}
