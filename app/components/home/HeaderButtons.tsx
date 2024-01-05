import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ThemeSwitcher from "./ThemeSwitcher";
import Time from "./Time";

interface HeaderButtonsProps extends React.HTMLProps<HTMLDivElement> {}

export default function HeaderButtons({ className }: HeaderButtonsProps) {
  return (
    <div className={twMerge("flex items-center gap-2 relative", className)}>
      <Time />
      <span className="h-6 w-[1px] bg-slate-500"></span>
      <div>
        <Image
          src="/eua-flag.png"
          alt="Bandeira do Brasil"
          width={64}
          height={64}
          className="h-7 w-7"
        />
      </div>
      <ThemeSwitcher />
    </div>
  );
}
