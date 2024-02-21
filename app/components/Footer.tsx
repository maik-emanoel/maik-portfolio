import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {IconBaseProps} from 'react-icons'
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="absolute w-full left-0 bottom-6 mx-auto px-5 flex justify-between items-center text-muted xs:bottom-4">
      <p className="text-xs">{t("created-by")} Maik Emanoel</p>

      <div className="flex gap-4 xs:gap-2">
        <SocialLink
          path="https://github.com/maik-emanoel"
          icon={FaGithub}
          name="Github"
        />
        <SocialLink
          path="https://linkedin.com/in/maik-emanoel-b21539269"
          icon={FaLinkedin}
          name="LinkedIn"
        />
        <SocialLink
          path="https://instagram.com/maik.emanoel"
          icon={FaInstagram}
          name="Instagram"
        />
        <SocialLink
          path="https://discordapp.com/users/469542084349526016"
          icon={FaDiscord}
          name="Discord"
        />
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  name: string;
  path: string;
  icon: React.ElementType<IconBaseProps>;
}

function SocialLink({ name, path, icon: Icon }: SocialLinkProps) {
  return (
    <a href={path} target="_blank" title={name} className="hover:text-primary transition-all duration-200">
      <Icon size={20} />
    </a>
  );
}
