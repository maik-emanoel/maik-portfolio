import { DownloadSimple, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Header from "../components/Header";
import IntroTitle from "../components/IntroTitle";
import Image from "next/image";
import { Icon } from "@phosphor-icons/react/dist/lib/index";

export default function Home() {
  return (
    <div className="h-screen flex flex-col" id="home">
      <Header />

      <main className="flex-1 max-h-[500px] flex items-center justify-between">
        <div>
          <IntroTitle />

          <div className="mt-4 flex items-center gap-2">
            <LinkButton
              icon={DownloadSimple}
              text="Download CV"
              path="/curriculo-maik-dev.pdf"
              isDownloadButton
            />
            <LinkButton
              icon={GithubLogo}
              text="Github"
              path="https://github.com/maik-emanoel"
            />
          </div>
        </div>
        <div className="w-[300px] h-[300px] p-3 rounded-full relative">
          <Image
            src="/profile-photo.jpg"
            width={1536}
            height={2048}
            alt="Foto de perfil de Maik Emanoel"
            priority
            className="w-full h-full border rounded-full"
          />

          <div className="absolute inset-0 border rounded-full border-r-transparent border-l-transparent animate-spin-slow"></div>
        </div>
      </main>
    </div>
  );
}

interface LinkButtonsProps {
  icon: Icon;
  text: string;
  path: string;
  isDownloadButton?: boolean;
}

function LinkButton({
  icon: Icon,
  text,
  path,
  isDownloadButton,
}: LinkButtonsProps) {
  return (
    <a
      className="h-10 w-10 max-w-[150px] rounded-full border border-[#2F84FF] flex items-center gap-2 px-[10px] hover:w-full group transition-[width] duration-500 overflow-hidden cursor-pointer"
      href={path}
      download={isDownloadButton && "cv-maikemanoel"}
      target="_blank"
    >
      <Icon size={20} className="flex-shrink-0" />
      <span className="text-[0px] opacity-0 group-hover:opacity-100 group-hover:text-sm whitespace-nowrap transition-all duration-300">
        {text}
      </span>
    </a>
  );
}
