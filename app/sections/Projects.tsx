import ProjectsContent from '../components/projects/ProjectsContent'
import Section from '../components/Section'
import { useTranslations } from 'next-intl'

export default function Projects() {
  const t = useTranslations('projects')

  const projectCardLabels = {
    titleTopic: t('title-topic'),
    firstLink: t('first-link'),
    secondLink: t('second-link'),
  }

  return (
    <Section
      key={'projects'}
      title={t('section-name')}
      id="projects"
      className="sm:h-svh"
    >
      <ProjectsContent t={projectCardLabels} />
    </Section>
  )
}
