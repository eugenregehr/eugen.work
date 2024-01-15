import { slug } from 'github-slugger'
import projectsData from '@/data/projectsData'
import ProjectsLayout from '@/components/ProjectsLayout'
import Card from '@/components/Card'
import ProjectsTags from '@/components/ProjectsTags'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = decodeURI(params.tag)
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged project`,
  })
}

export const generateStaticParams = async () => {
  const allTags = new Set<string>()

  projectsData.forEach((project) => {
    if (project.tags) {
      project.tags.forEach((tag) => allTags.add(slug(tag)))
    }
  })

  const paths = Array.from(allTags).map((tag) => ({
    tag: tag,
  }))

  return paths
}

export default async function Projects({ params }) {
  const imagePath = '/static/images/projects/'
  const tag = params.tag
  const title = tag.toLowerCase()
  const filteredPosts = projectsData.filter(
    (project) => project.tags && project.tags.map((t) => slug(t)).includes(tag)
  )

  // Get all tags
  const allTags = new Set<string>()
  projectsData.forEach((project) => {
    if (project.tags) {
      project.tags.forEach((tag) => allTags.add(tag))
    }
  })

  return (
    <ProjectsLayout projectTitle={'tag: ' + title} resetFilter>
      <ProjectsTags tags={Array.from(allTags)} activeTag={tag} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredPosts.map((d) => (
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
