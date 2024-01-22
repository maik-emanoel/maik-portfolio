"use client";

import {
  FaHtml5 as htmlLogo,
  FaReact as reactLogo,
  FaGitAlt as gitLogo,
} from "react-icons/fa";
import {
  IoLogoCss3 as cssLogo,
  IoLogoGithub as githubLogo,
} from "react-icons/io";
import { IoLogoJavascript as javascriptLogo } from "react-icons/io5";
import {
  BiLogoTypescript as typescriptLogo,
  BiLogoVisualStudio as vscodeLogo,
} from "react-icons/bi";
import {
  SiNextdotjs as nextjsLogo,
  SiTailwindcss as tailwindLogo,
} from "react-icons/si";
import { useIsTouchSupported } from "@/app/utils/touchUtils";

const logos = [
  {
    image: htmlLogo,
    name: "HTML",
  },
  {
    image: cssLogo,
    name: "CSS",
  },
  {
    image: javascriptLogo,
    name: "Javascript",
  },
  {
    image: typescriptLogo,
    name: "Typescript",
  },
  {
    image: reactLogo,
    name: "React",
  },
  {
    image: nextjsLogo,
    name: "Next.js",
  },
  {
    image: tailwindLogo,
    name: "Tailwind CSS",
  },
  {
    image: githubLogo,
    name: "Github",
  },
  {
    image: gitLogo,
    name: "Git",
  },
  {
    image: vscodeLogo,
    name: "Visual Code",
  },
];

const before =
  "before:absolute before:top-0 before:left-0 before:w-[15%] before:h-full before:bg-[linear-gradient(to_left,_transparent,_#fff)] before:dark:bg-[linear-gradient(to_left,_transparent,_#0f172a)] before:z-10";

const after =
  "after:absolute after:top-0 after:right-0 after:w-[15%] after:h-full after:bg-[linear-gradient(to_right,_transparent,_#fff)] after:dark:bg-[linear-gradient(to_right,_transparent,_#0f172a)] after:z-10";

export default function InfiniteSlider() {
  const isTouchSupported = useIsTouchSupported();

  return (
    <div
      className={`overflow-hidden py-2 whitespace-nowrap text-terciary group relative slider logos-slide ${
        isTouchSupported ? `${before} ${after}` : ""
      } scroll-reveal`}
    >
      <LogosSlide />
      <LogosSlide />
    </div>
  );
}

function LogosSlide() {
  return (
    <div className="animate-slide inline-block group-hover:animation-paused">
      {logos.map((logo) => {
        return (
          <div
            key={logo.name}
            className="inline-block mx-8 hover:bg-secondary hover:text-background py-2 px-2 rounded-lg cursor-pointer relative group/logo transition-[scale,_opacity] logo sm:mx-6"
          >
            <logo.image className="w-8 h-8 sm:w-6 sm:h-6" />

            <div className="hidden absolute left-full top-1/2 -translate-y-1/2 ml-2 py-1 px-3 bg-secondary text-background text-sm font-medium z-50 rounded-md group-hover/logo:block animate-fromLeft">
              {logo.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
