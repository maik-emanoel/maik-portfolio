import { useTranslations } from "next-intl";

// \u00A0

const author = "Maik Emanoel";

export default function IntroTitle() {
  const t = useTranslations("home.intro-text");

  const authorArr = author.split("").map((char, i) => (
    <span
      key={i}
      className="hover:animate-rubberband hover:text-[#f4a949] inline-block cursor-default transition-colors duration-200"
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div className="leading-tight">
      <span
        className="text-spanClamp animate-reveal block"
        style={{
          animationDelay: "750ms",
        }}
      >
        {t("first-line")}
      </span>
      <h1
        className="font-bold text-titleClamp relative cursor-default text-transparent fill-name"
        data-author={author}
      >
        {authorArr}
      </h1>
      <p
        className="text-spanClamp animate-reveal"
        style={{
          animationDelay: "1150ms",
        }}
      >
        {t("second-line")}
      </p>
    </div>
  );
}
