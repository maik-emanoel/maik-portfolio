import ProjectsContent from "../components/ProjectsContent";
import Section from "../components/Section";

export default async function Projects() {
  const response = await fetch(
    "https://api.github.com/users/maik-emanoel/repos?per_page=100"
  );
  const data = await response.json();

  const reposFiltered = data.filter((repo: any) => repo.topics.includes("mk"));

  const reposWithImage = await Promise.all(
    reposFiltered.map(async (repoFiltered: any) => {
      try {
        const reponse = await fetch(
          `https://api.github.com/repos/maik-emanoel/${repoFiltered.name}/contents/README.md`
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
    <Section title="Projects" id="projects" className="sm:h-svh">
      <ProjectsContent reposWithImage={reposWithImage} />
    </Section>
  );
}
