import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Header() {
  const hour = new Date().getHours()
  const minutes = new Date().getMinutes()

  return (
    <header className="py-5 flex items-center justify-between h-20">
      <Image
        src="/logo.png"
        alt=""
        width={1500}
        height={156}
        className="w-36 object-cover my-2"
      />

      <div className="flex items-center gap-2">
        <div className="text-xs text-slate-300 flex items-center gap-1">
          <span className="block rounded-full w-1 h-1 bg-emerald-500"></span>
          {hour}h{minutes.toString().padStart(2, '0')}
        </div>
        <span className="h-6 w-[1px] bg-slate-500"></span>
        <div>
          <Image src="/brazil-flag.png" alt="Bandeira do Brasil" width={64} height={64} className="h-7 w-7"/>
        </div>
        <div className="text-slate-100 rounded-full border border-slate-400 h-7 w-7 grid place-items-center">
          <Moon size={20} />
        </div>
      </div>
    </header>
  );
}
