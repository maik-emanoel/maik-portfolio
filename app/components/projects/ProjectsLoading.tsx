import { useTranslations } from "next-intl";
import Section from "../Section";
import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

export default function ProjectsLoading() {
  const t = useTranslations("projects");

  return (
    <Section
      key={"projects"}
      title={t("section-name")}
      id="projects"
      className="sm:h-svh"
    >
      <div className="h-[75%] flex justify-center">
        <p className="flex items-center gap-2">
          <CircleNotch size={20} weight="bold" className="animate-spin"/>
          <span className="font-medium text-2xl">{t("message-loading")}...</span>
        </p>
      </div>
    </Section>
  );
}
