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
          <Tag key={tag} text={tag} active={slug(tag) == activeTag} projects />
        ))}
      </div>
    </div>
  )
}
