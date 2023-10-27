import { Song } from "@/types";
import { Container, ReadMore } from "@/components/common";

interface AboutProps {
  song: Song;
}

const About = ({ song }: AboutProps) => {
  const description =
    song.description_preview.length > 0
      ? song.description_preview
      : "There is no description about this song yet 😓.";

  return (
    <Container
      outerClassName="bg-secondary-900 text-primary-900"
      className="flex flex-col items-center py-8 px-4 text-center"
    >
      <h3 className="text-xl">About</h3>
      <h4 className="font-passion text-5xl">{song.title}</h4>
      <ReadMore className="whitespace-pre-line text-center max-w-2xl mt-4">
        {description}
      </ReadMore>
    </Container>
  );
};

export { About };
