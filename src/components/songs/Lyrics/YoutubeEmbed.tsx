import { Song } from "@/types";

interface YoutubeEmbedProps {
  url: Song["youtube_url"];
}

const getEmbedURL = (url: Song["youtube_url"]) => {
  return `https://www.youtube.com/embed/${url.split("=")[1]}`;
};

const lgClassnames = `lg:flex-1 lg:self-start lg:mt-0 lg:max-w-md lg:sticky lg:top-24 lg:ml-auto`;

const YoutubeEmbed = ({ url }: YoutubeEmbedProps) =>
  url && (
    <div
      className={`w-full self-center mt-4 max-w-lg h-64 shadow-md shadow-black ${lgClassnames}`}
    >
      <iframe
        src={getEmbedURL(url)}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="w-full h-full"
      />
    </div>
  );

export { YoutubeEmbed };
