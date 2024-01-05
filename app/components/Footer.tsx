import {
  DiscordLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { IconProps } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="relative max-w-[1000px] bottom-8 mx-auto px-5 flex justify-between items-center text-slate-400 xs:bottom-4">
      <p className="text-xs">Created by Maik Emanoel</p>

      <div className="flex gap-4 xs:gap-2">
        <SocialLink
          path="https://github.com/maik-emanoel"
          icon={GithubLogo}
          name="Github"
        />
        <SocialLink
          path="https://linkedin.com/in/maik-emanoel-b21539269"
          icon={LinkedinLogo}
          name="LinkedIn"
        />
        <SocialLink
          path="https://instagram.com/maik.emanoel"
          icon={InstagramLogo}
          name="Instagram"
        />
        <SocialLink
          path="https://discordapp.com/users/469542084349526016"
          icon={DiscordLogo}
          name="Discord"
        />
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  name: string;
  path: string;
  icon: React.ElementType<IconProps>;
}

function SocialLink({ name, path, icon: Icon }: SocialLinkProps) {
  return (
    <a href={path} target="_blank" title={name} className="hover:text-slate-100 transition-all duration-200">
      <Icon size={20} />
    </a>
  );
}
