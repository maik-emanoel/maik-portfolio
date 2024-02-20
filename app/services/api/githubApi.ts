const personalAccessToken = process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN;

export async function fetchGithubRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/maik-emanoel/repos?per_page=100",
      {
        headers: {
          Authorization: `Bearer ${personalAccessToken}`,
        },
        next: {
          revalidate: 60,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Failed to fetch GitHub repositories", error);
  }
}

export const fetchReadmeImage = async (repoFiltered: any) => {
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

    return {
      ...repoFiltered,
      imageUrl: fullImageUrl,
    };
  }
};
