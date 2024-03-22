import Link from 'next/link'
import { MotionDiv } from './MotionDiv'
import Tag from './Tag'
import { slug } from 'github-slugger'

interface Props {
  tags: Array<string>
  activeTag?: string
}

export default function ProjectsTags({ tags, activeTag }: Props) {
  return (
    <div className="overflow-hidden">
      <div className="flex overflow-x-auto pb-4">
        {Array.from(tags).map((tag) => (
          <Link
            key={tag}
            scroll={false}
            href={`/projects/${slug(tag)}`}
            className={`mr-2 ${
              slug(tag) == activeTag
                ? 'bg-opacity-100 font-semibold text-gray-950'
                : 'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
            } whitespace-nowrap rounded-2xl bg-primary-500 bg-opacity-10 px-3 py-1 text-sm font-medium uppercase   `}
          >
            {tag.split(' ').join('-')}
          </Link>
        ))}
      </div>
    </div>
  )
}
