import { useTranslations } from "next-intl";

// \u00A0

export default function IntroTitle() {
  const t = useTranslations("home.intro-text")

  const firstPhrase = t("first-line"); // hi, I'm
  const secondPhrase = t("second-line"); // a Front-end Developer

  const firstPhraseArr = firstPhrase.split("").map((char, i) => (
    <span
      key={i}
      className="hover:animate-rubberband hover:text-[#f4a949] inline-block cursor-default transition-colors duration-200"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  const secondPhraseArr = secondPhrase.split("").map((char, i) => (
    <span
      key={i}
      className="hover:animate-rubberband hover:text-[#f4a949] inline-block cursor-default transition-colors duration-200"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

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
