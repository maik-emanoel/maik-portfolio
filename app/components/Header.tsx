import Image from "next/image";
import HeaderButtons from "./HeaderButtons";

export default function Header() {
  return (
    <header className="py-5 flex items-center justify-between h-20">
      <Image
        src="/logo.png"
        alt=""
        width={1500}
        height={156}
        className="w-36 object-cover my-2"
      />

      <HeaderButtons />
    </header>
  );
}
