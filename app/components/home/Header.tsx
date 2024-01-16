import Image from "next/image";
import HeaderButtons from "./HeaderButtons";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("themeOptions")

  return (
    <header className="py-5 flex items-center justify-between h-20">
      <div>
        <Image
          src="/logo.png"
          alt=""
          width={1500}
          height={156}
          className="w-36 object-cover my-2 hidden dark:inline-block"
        />
        <Image
          src="/logo-dark.svg"
          alt=""
          width={1500}
          height={156}
          className="w-36 object-cover my-2 inline-block dark:hidden"
        />
      </div>

      <HeaderButtons lightLabel={t("light")} darkLabel={t("dark")} systemLabel={t("system")} />
    </header>
  );
}
