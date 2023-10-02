import { Container } from "@/components/common";
import { FigmaIcon, GithubIcon } from "@/components/icons";

const Footer = () => (
  <footer className="bg-secondary-900 font-passion text-primary-900 text-xl py-4">
    <Container className="flex items-center flex-col lg:flex-row gap-y-2 px-4 text-center">
      <div className="flex-1" />
      <a href="https://github.com/energywraith" className="">
        © 2023 energywraith/Adam Jałocha - Made with ♥
      </a>
      <div className="flex-1 flex justify-end gap-x-2">
        <a href="https://www.figma.com/file/RmhNGOgpAsbVAoiO3RUJGN/Harmonia">
          <FigmaIcon className="h-8" />
        </a>
        <a href="https://github.com/energywraith/harmonia">
          <GithubIcon className="h-8 text-black" />
        </a>
      </div>
    </Container>
  </footer>
);

export { Footer };
