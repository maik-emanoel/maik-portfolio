import { useTranslations } from "next-intl";
import InfiniteSlider from "../components/about/InfiniteSlider";
import Section from "../components/Section";

export default function About() {
  const t = useTranslations("about");

  return (
    <Section
      id="about"
      title={t("section-name")}
      className="sm:h-screen-mobile"
    >
      <div className="flex flex-col gap-8">
        <div className="flex-1 mt-4">
          <h3 className="w-fit text-3xl text-terciary mb-4 sm:text-2xl scroll-reveal">
            {t("first-subtitle")}
          </h3>

          <div className="text-muted sm:text-sm">
            <p className="scroll-reveal-text">{t("first-parag")}</p>
            <br />
            <p className="scroll-reveal-text">{t("second-parag")}</p>
            <br />
            <p className="scroll-reveal-text">{t("third-parag")}</p>
          </div>
        </div>

        <div>
          <h3 className="w-fit text-3xl text-terciary mb-10 sm:text-2xl sm:mb-4 scroll-reveal">
            {t("second-subtitle")}
          </h3>
          <InfiniteSlider />
        </div>
      </div>
    </Section>
  );
}
