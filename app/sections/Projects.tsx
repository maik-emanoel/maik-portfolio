import { getTranslations } from 'next-intl/server'
import ProjectsContent from '../components/projects/ProjectsContent'
import Section from '../components/Section'
import { fetchGithubRepos, fetchReadmeImage } from '../services/api/githubApi'

export default async function Projects() {
  const t = await getTranslations('projects')

  const projectCardLabels = {
    titleTopic: t('title-topic'),
    firstLink: t('first-link'),
    secondLink: t('second-link'),
  }

  const data = await fetchGithubRepos()

  const reposFiltered = data.filter((repo: any) => repo.topics.includes('mk'))

  const reposWithImage = await Promise.all(
    reposFiltered.map(async (repoFiltered: any) => {
      try {
        return await fetchReadmeImage(repoFiltered)
      } catch (error) {
        console.log('Failed to fetch data', error)
      }
    })
  )

  return (
    <Section
      key={'projects'}
      title={t('section-name')}
      id="projects"
      className="sm:h-svh"
    >
      <ProjectsContent reposWithImage={reposWithImage} t={projectCardLabels} />
    </Section>
  )
}
