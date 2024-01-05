const firstPhrase = "hi,\u00A0I'm"; // hi, I'm
const secondPhrase = "a\u00A0Front-End\u00A0Developer"; // a Front-end Developer

export default function IntroTitle() {
  return (
    <div className="leading-tight">
      <span className="text-spanClamp">{firstPhraseArr}</span>
      <h1
        className="font-bold text-titleClamp relative cursor-default text-transparent"
        data-text="Maik Emanoel"
        style={{
          WebkitTextStroke: "1px #2F84FF",
        }}
      >
        Maik Emanoel
      </h1>
      <p className="text-spanClamp">{secondPhraseArr}</p>
    </div>
  );
}

const firstPhraseArr = firstPhrase.split("").map((letter, i) => {
  return (
    <span
      key={i}
      className="hover:animate-rubberband hover:text-[#f4a949] inline-block cursor-default transition-colors duration-200"
    >
      {letter}
    </span>
  );
});

const secondPhraseArr = secondPhrase.split("").map((letter, i) => {
  return (
    <span
      key={i}
      className="hover:animate-rubberband hover:text-[#f4a949] inline-block cursor-default transition-colors duration-200"
    >
      {letter}
    </span>
  );
});
