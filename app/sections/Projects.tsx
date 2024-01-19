import { getTranslations } from "next-intl/server";
import ProjectsContent from "../components/projects/ProjectsContent";
import Section from "../components/Section";

export default async function Projects() {
  const t = await getTranslations("projects");

  const projectCardLabels = {
    titleTopic: t("title-topic"),
    firstLink: t("first-link"),
    secondLink: t("second-link")
  }

  const personalAccessToken = process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN

  try {
    const response = await fetch(
      "https://api.github.com/users/maik-emanoel/repos?per_page=100",
      {
        headers: {
          Authorization: `Bearer ${personalAccessToken}`,
        },  
      }
    );

    const data = await response.json();

    const reposFiltered = data.filter((repo: any) =>
      repo.topics.includes("mk")
    );

    const reposWithImage = await Promise.all(
      reposFiltered.map(async (repoFiltered: any) => {
        try {
          const reponse = await fetch(
            `https://api.github.com/repos/maik-emanoel/${repoFiltered.name}/contents/README.md`,
            {
              headers: {
                Authorization: `Bearer ${personalAccessToken}`,
              },
            }
          );
          const data = await reponse.json();

          const readmeContent = atob(data.content);
          const imageRegex = /!\[.*?\]\((.*?)\)/;
          const matches = readmeContent.match(imageRegex);

          if (matches && matches.length >= 2) {
            const imageUrl = matches[1];
            const repoBaseUrl = `https://raw.githubusercontent.com/maik-emanoel/${repoFiltered.name}/main/`;
            const fullImageUrl = `${repoBaseUrl}${imageUrl}`;

            const repoWithImageUrl = {
              ...repoFiltered,
              imageUrl: fullImageUrl,
            };

            return repoWithImageUrl;
          }
        } catch (error) {
          console.log("Failed to fetch data", error);
        }
      })
    );

    return (
      <Section
        key={"projects"}
        title={t("section-name")}
        id="projects"
        className="sm:h-svh"
      >
        <ProjectsContent reposWithImage={reposWithImage} t={projectCardLabels} />
      </Section>
    );
  } catch (error) {
    console.log("Failed to fetch repositories", error);

    return (
      <Section
        key={"projects"}
        title={t("section-name")}
        id="projects"
        className="sm:h-svh"
      >
        <div className="h-full flex flex-col mt-[25%]">
          <p className="self-center text-2xl">Sorry, something went wrong...</p>
        </div>
      </Section>
    );
  }
}
