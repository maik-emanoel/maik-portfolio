import {
  CaretDown,
  DownloadSimple,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";
import Header from "../components/home/Header";
import IntroTitle from "../components/home/IntroTitle";
import Image from "next/image";
import { Icon } from "@phosphor-icons/react/dist/lib/index";

export default function Home() {
  return (
    <div
      className="h-screen max-h-[768px] flex flex-col relative sm:h-screen-mobile"
      id="home"
      data-section="home"
    >
      <Header />

      <main className="flex-1 max-h-[500px] flex items-center justify-between md:flex-col-reverse md:justify-center md:gap-6">
        <div>
          <IntroTitle />

          <div
            className="mt-4 flex items-center gap-2 animate-reveal"
            style={{
              animationDelay: "1300ms",
            }}
          >
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

        <div
          className="w-[300px] h-[300px] p-3 rounded-full relative overflow-hidden md:w-52 md:h-52 animate-[reveal_.6s_backwards_2000ms] md:animate-[reveal_.6s_backwards_600ms]"
        >
          <Image
            src="/profile-photo.jpg"
            width={1536}
            height={2048}
            alt="Foto de perfil de Maik Emanoel"
            priority
            className="w-full h-full rounded-full object-cover object-top"
          />

          <div className="absolute inset-0 border border-t-muted border-b-muted rounded-full border-r-transparent border-l-transparent animate-spin-slow"></div>
        </div>

        <CaretDown className="hidden sm:block absolute left-1/2 -translate-x-[50%] bottom-[15%] animate-scrollBounce" />
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
      className="h-10 w-10 max-w-[150px] rounded-full border border-blue-primary flex items-center gap-2 px-[10px] hover:w-full group transition-[width] duration-500 overflow-hidden cursor-pointer"
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
