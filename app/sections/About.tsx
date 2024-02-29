import { useTranslations } from "next-intl";
import InfiniteSlider from "../components/about/InfiniteSlider";
import Section from "../components/Section";
import ViewAllButton from "../components/about/ViewAllButton";

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
          <div className="flex justify-between items-center mb-10 sm:mb-4">
            <h3 className="w-fit text-3xl text-terciary sm:text-2xl xs:text-xl scroll-reveal">
              {t("second-subtitle")}
            </h3>

            <ViewAllButton viewAllButtonTitle={t("view-all.view-all-button-title")} title={t("view-all.title")} />
          </div>
          <InfiniteSlider />
        </div>
      </div>
    </Section>
  );
}
