import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-5xl font-bold  tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
            <span>Hi, I'm Eugen 👋</span> <br />
            <span className="mt-2 block text-gray-500 dark:text-gray-400">Frontend Developer</span>
          </h1>
        </div>
        <div className="container py-12">
          <span className="mb-5 block text-2xl font-bold text-secondary-400">My Projects:</span>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                tags={d.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
