import Header from "../components/Header";

export default function Home() {
  return (
    <div className="h-screen flex flex-col" id="home">
      <Header />

      <main className="flex-1 max-h-[500px] flex items-center justify-between">
        <div className="leading-tight">
          <span className="text-spanClamp">hi, I&apos;m</span>
          <h1
            className="font-bold text-titleClamp relative cursor-default"
            data-text='Maik Emanoel'
            style={{
              WebkitTextStroke: "1px rgb(241 245 249)",
              color: 'transparent'
            }}
          >
            Maik Emanoel
          </h1>
          <span className="text-spanClamp">a Front-End Developer</span>
        </div>

        <div className="w-80 h-80 rounded-full border"></div>
      </main>
    </div>
  );
}
