import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import ProjectsLayout from '@/components/ProjectsLayout'
import ProjectsTags from '@/components/ProjectsTags'
import { MotionDiv } from '@/components/MotionDiv'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  const imagePath = '/static/images/projects/'

  const allTags = new Set<string>()
  projectsData.forEach((project) => {
    if (project.tags) {
      project.tags.forEach((tag) => allTags.add(tag))
    }
  })

  return (
    <ProjectsLayout projectTitle="Some of my work">
      <ProjectsTags tags={Array.from(allTags)} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projectsData.map((d) => (
          <Card
            key={d.title}
            title={d.title}
            description={d.description}
            imgSrc={imagePath + d.imgSrc}
            href={d.href}
            tags={d.tags}
          />
        ))}
      </div>
    </ProjectsLayout>
  )
}
