export interface VideoFrameProps {
  youtubeUrl?: string;
  embedUrl?: string;
  title: string;
  aspectRatio?: string;
  className?: string;
  poster?: string;
}

export function VideoFrame({
  youtubeUrl,
  embedUrl,
  title,
  aspectRatio = "16 / 9",
  className,
  poster,
}: VideoFrameProps) {
  const resolvedEmbedUrl = youtubeUrl ? toEmbedUrl(youtubeUrl) : embedUrl;

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

export function toEmbedUrl(youtubeUrl: string, autoplay = false) {
  let url: URL;

  try {
    url = new URL(youtubeUrl);
  } catch {
    return youtubeUrl;
  }

  const videoId = url.pathname.startsWith("/shorts/")
    ? url.pathname.split("/")[2]
    : (url.searchParams.get("v") ?? url.pathname.split("/").pop());

  if (!videoId) {
    return youtubeUrl;
  }

  const autoplayQuery = autoplay ? "&autoplay=1" : "";

  return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?rel=0&modestbranding=1${autoplayQuery}`;
}
