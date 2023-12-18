import Header from "../components/Header";
import IntroTitle from "../components/IntroTitle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col" id="home">
      <Header />

      <main className="flex-1 max-h-[500px] flex items-center justify-between">
        <IntroTitle />
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
